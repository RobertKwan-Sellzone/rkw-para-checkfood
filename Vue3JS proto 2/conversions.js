function buildNewForm(categ){
	let originalForm;
	for (let i=0; i<LCQ_FORMS.length; i++){
		if (LCQ_FORMS[i].category == categ){
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


function injectVueProperties(form){
	for (let i=0; i<form.items.length; i++){
		let item = form.items[i];
		_injectVueProperties_item(item);
	}
}

function _injectVueProperties_item(item){
	item.$$$idkey = COUNTER_$$$idkey++;

	switch(item.type){
		case 'check':
		case 'temperature':
		case 'contentLevel':{
			item.$$$value = null;
			break;
		}
		case 'repeatGroup':
			_injectVueProperties_item(item.itemBase);
			//fallthrough
		case 'compoundGroup':{
			// init items in containers
			if (!Array.isArray(item.items)){
				item.items = [];
			}
			// walk container tree
			for (let i=0; i<item.items.length; i++){
				let subItem = item.items[i];
				_injectVueProperties_item(subItem);
			}
			break;
		}
	}
}


function extractVueProperties(form){
	//TODO faire l'inverse de injectVueProperties
	// càd enlever les trucs ajoutés

}

