const ALERTE_VERTE = 'ALERTE_VERTE';
const ALERTE_ORANGE = 'ALERTE_ORANGE';
const ALERTE_ROUGE = 'ALERTE_ROUGE';
//TODO utiliser les constantes pour définir les valeurs de warn_NOK et warn_NONE
//TODO déplacer ici les définitions des valeurs calculées (ex. alertLvl) ?...

const LCQ_FORMS = [
	{
		//TODO clean PATATE after tests
		category: 'PATATE',
		formLabel: 'Patate de luxe',
		items: [
			{
				$$$type: 'lcq-item-compoundGroup', label: 'Bac {i}',
				items: [
					{
						$$$type: 'lcq-item-temperature', label: 'Température de programmation',
						min_ORANGE: 165,
					},
					{
						$$$type: 'lcq-item-check', label: 'Niveau d\'huile',
						warn_NOK: 'ALERTE_ORANGE', warn_NONE: 'ALERTE_ROUGE',
					},
					{
						$$$type: 'lcq-item-contentLevel', label: 'Relevé du composé polaire',
						max_ORANGE: 20, max_ROUGE: 22
					}
				]
			},
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 10,
				itemBase: {
					$$$type: 'lcq-item-temperature', label: 'Armoire {i} -',
					min_ROUGE: -25, min_ORANGE: -23, max_ORANGE: -17, max_ROUGE: -15
				},
				items: [
					{
						$$$type: 'lcq-item-temperature', label: 'Armoire 1 -',
						min_ROUGE: -25, min_ORANGE: -23, max_ORANGE: -17, max_ROUGE: -15
					},
					{
						$$$type: 'lcq-item-temperature', label: 'Armoire 2 -',
						min_ROUGE: -25, min_ORANGE: -23, max_ORANGE: -17, max_ROUGE: -15
					},
				],
			},
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 10,
				itemBase: {
					$$$type: 'lcq-item-compoundGroup', label: 'Bac {i}',
					items: [
						{
							$$$type: 'lcq-item-temperature', label: 'Température de programmation',
							min_ORANGE: 165,
						},
						{
							$$$type: 'lcq-item-check', label: 'Niveau d\'huile',
							warn_NOK: 'ALERTE_ORANGE', warn_NONE: 'ALERTE_ROUGE',
						},
						{
							$$$type: 'lcq-item-contentLevel', label: 'Relevé du composé polaire',
							max_ORANGE: 20, max_ROUGE: 22
						}
					]
				},
				items: [{
					$$$type: 'lcq-item-compoundGroup', label: 'Bac {i}',
					items: [
						{
							$$$type: 'lcq-item-temperature', label: 'Température de programmation',
							min_ORANGE: 165,
						},
						{
							$$$type: 'lcq-item-check', label: 'Niveau d\'huile',
							warn_NOK: 'ALERTE_ORANGE', warn_NONE: 'ALERTE_ROUGE',
						},
						{
							$$$type: 'lcq-item-contentLevel', label: 'Relevé du composé polaire',
							max_ORANGE: 20, max_ROUGE: 22
						}
					]
				},]
			},
		]
	},
	{
		category: 'CONGELS',
		formLabel: 'Température des stockages surgelés',
		items: [
			{
				$$$type: 'lcq-item-temperature', label: 'Chambre Froide -',
				min_ROUGE: -25, min_ORANGE: -23, max_ORANGE: -17, max_ROUGE: -15
			},
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 10,
				itemBase: {
					$$$type: 'lcq-item-temperature', label: 'Armoire {i} -',
					min_ROUGE: -25, min_ORANGE: -23, max_ORANGE: -17, max_ROUGE: -15
				}
			}
		]
	},

	{
		category: 'FRIGOS',
		formLabel: 'Température des stockages réfrigérés',
		items: [
			{
				$$$type: 'lcq-item-temperature', label: 'Chambre Froide +',
				min_ROUGE: 0, min_ORANGE: 1, max_ORANGE: 4, max_ROUGE: 7
			},
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 10,
				itemBase: {
					$$$type: 'lcq-item-temperature', label: 'Armoire {i} +',
					min_ROUGE: 0, min_ORANGE: 1, max_ORANGE: 4, max_ROUGE: 7
				}
			},
			{
				$$$type: 'lcq-item-temperature', label: 'Machine à glace',
				min_ROUGE: 0, min_ORANGE: 1, max_ORANGE: 4, max_ROUGE: 7
			}
		]
	},

	{
		category: 'DLCS',
		formLabel: 'Conservation des produits',
		items: [
			{
				$$$type: 'lcq-item-check', label: 'DLC primaire',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE', withComment: true, withPhotos: true,
			},
			{
				$$$type: 'lcq-item-check', label: 'DLC secondaire',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE', withComment: true, withPhotos: true,
			},
			{
				$$$type: 'lcq-item-check', label: 'Rotation et Présence étiquette',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE', withComment: true, withPhotos: true,
			},
			{
				$$$type: 'lcq-item-check', label: 'Produits protégés et filmés',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE', withComment: true, withPhotos: true,
			}
		]
	},

	{
		category: 'HUILES',
		formLabel: 'Huiles de cuisson',
		items: [
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 20,
				itemBase: {
					$$$type: 'lcq-item-compoundGroup', label: 'Bac {i}',
					items: [
						{
							$$$type: 'lcq-item-temperature', label: 'Température de programmation',
							min_ORANGE: 165,
						},
						{
							$$$type: 'lcq-item-check', label: 'Niveau d\'huile',
							warn_NOK: 'ALERTE_ORANGE', warn_NONE: 'ALERTE_ROUGE',
						},
						{
							$$$type: 'lcq-item-contentLevel', label: 'Relevé du composé polaire',
							max_ORANGE: 20, max_ROUGE: 22
						}
					]
				}
			}
		]
	},

	{
		category: 'GRILLS',
		formLabel: 'Cuissons des produits grillés',
		items: [
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 10,
				itemBase: {
					$$$type: 'lcq-item-compoundGroup', label: 'Grill {i}',
					items: [
						{
							$$$type: 'lcq-item-check', label: 'Propreté et état du grill, spatules, grattoirs...',
							warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE',
						},
						{
							$$$type: 'lcq-item-temperature', label: 'Température du grill'
						},
						{
							$$$type: 'lcq-item-temperature', label: 'Prise température interne du steak sur 1ère série',
							min_ROUGE: 63, min_ORANGE: 65
						}
					]
				}
			}
		]
	},

	{
		category: 'CHAUFFE',
		formLabel: 'Conservation des produits chauds',
		items: [
			{
				$$$type: 'lcq-item-repeatGroup',
				minCount: 1, maxCount: 10,
				itemBase: {
					$$$type: 'lcq-item-temperature', label: 'Température du maintien chaud {i}',
					min_ROUGE: 63, min_ORANGE: 65
				}
			}
		]
	},

	{
		category: 'NETTOYAGE',
		formLabel: 'Nettoyage du matériel',
		items: [
			{
				$$$type: 'lcq-item-check', label: 'Propreté plonge',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE',
			},
			{
				$$$type: 'lcq-item-check', label: 'Propreté coupe-légume',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE',
			},
			{
				$$$type: 'lcq-item-check', label: 'Propreté machine à glaces',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE',
			},
			{
				$$$type: 'lcq-item-check', label: 'Propreté zone marinade',
				warn_NOK: 'ALERTE_ROUGE', warn_NONE: 'ALERTE_ROUGE',
			}
		]
	}

];
