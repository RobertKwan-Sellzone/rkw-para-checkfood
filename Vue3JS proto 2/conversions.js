function buildNewForm(categ) {
	let originalForm;
	for (let i = 0; i < LCQ_FORMS.length; i++) {
		if (LCQ_FORMS[i].category == categ) {
			originalForm = LCQ_FORMS[i];
		}
	}
	// same as :
	// let originalForm = LCQ_FORMS.find(form => form.category == categ);

	// JSON-based deep copy
	let copyForm = JSON.parse(JSON.stringify(originalForm));

	// add properties needed for VueJS rendering
	injectVueProperties(copyForm);

	return copyForm;
}




var COUNTER_$$$idkey = 0;


function injectVueProperties(form) {
	if (form.reportDate) {
		//resolve ISO date string to Date obj
		form.reportDate = new Date(form.reportDate);
	} else {
		//init to now()
		form.reportDate = new Date();
	}

	for (let i = 0; i < form.items.length; i++) {
		let item = form.items[i];
		_injectVueProperties_item(item);
	}
}


function _itemCheck_alertLvl(){
	if (this.$$$value == "none" && this.warn_NONE) {
		return this.warn_NONE;
	}
	else if (this.$$$value == "nok" && this.warn_NOK) {
		return this.warn_NOK;
	}
	else {
		return '';
	}
}

function _itemNumeric_alertLvl(){
	if (this.$$$value > this.max_ROUGE || this.$$$value < this.min_ROUGE) {
		return ALERTE_ROUGE;
	}
	else if (this.$$$value > this.max_ORANGE || this.$$$value < this.min_ORANGE) {
		return ALERTE_ORANGE;
	}
	else {
		return ALERTE_VERTE;
	}
}

function _itemGroup_alertLvl(){
	function alerte2num(al){
		switch(al){
			case ALERTE_ROUGE: return 2;
			case ALERTE_ORANGE: return 1;
			case ALERTE_VERTE: default: return 0;
		}
	}
	function num2alerte(num){
		switch(num){
			case 2: return ALERTE_ROUGE;
			case 1: return ALERTE_ORANGE;
			case 0: default: return ALERTE_VERTE;
		}
	}

	// the group takes the most severe level of all sub items'
	return num2alerte(this.items
		.map(subItem => subItem.alertLvl())
		.map(alerte2num)
		.reduce((a,b)=>(a>b?a:b), 0) // a workaround to .reduce(Math.max, 0) not working
	);
}


function _injectVueProperties_item(item) {
	item.$$$idkey = COUNTER_$$$idkey++;

	switch (item.type) {
		case 'check':
		case 'temperature':
		case 'contentLevel': {
			item.$$$value = null;
			break;
		}
		case 'repeatGroup':
			_injectVueProperties_item(item.itemBase);
		//fallthrough
		case 'compoundGroup': {
			// init items in containers
			if (!Array.isArray(item.items)) {
				item.items = [];
			}
			// walk container tree
			for (let i = 0; i < item.items.length; i++) {
				let subItem = item.items[i];
				_injectVueProperties_item(subItem);
			}
			break;
		}
	}

	// inject computed alertLvl
	switch (item.type) {
		case 'check':         item.alertLvl = _itemCheck_alertLvl; break;
		case 'temperature':	  item.alertLvl = _itemNumeric_alertLvl; break;
		case 'contentLevel':  item.alertLvl = _itemNumeric_alertLvl; break;
		case 'repeatGroup':   item.alertLvl = _itemGroup_alertLvl; break;
		case 'compoundGroup': item.alertLvl = _itemGroup_alertLvl; break;
	}

}


function extractVueProperties(form) {
	//TODO faire l'inverse de injectVueProperties
	// càd enlever les trucs ajoutés

}

