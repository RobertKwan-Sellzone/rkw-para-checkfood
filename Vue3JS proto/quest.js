const questions = [
    {
        formName: "1- Température des stockages surgelés",
        items: [
            { type: "temp", label: "Chambre Froide (-)", max_ORANGE: -17, max_RED: -15, min_ORANGE: -23, min_RED: -25 },
            {
                type: "group", label: "Armoire (-) 1", items: [
                    { type: "temp", max_ORANGE: -17, max_RED: -15, min_ORANGE: -23, min_RED: -25 },
                ],
            },
        ],
    },

    {
        formName: "2 - Température des stockages réfrigérés",
        items: [
            { type: "temp", label: "Chambre Froide (+)", max_ORANGE: 4, max_RED: 7, min_ORANGE: 1, min_RED: 0 },
            {
                type: "group", label: "Armoire (+) 1", items: [
                    { type: "temp", max_ORANGE: 4, max_RED: 7, min_ORANGE: 1, min_RED: 0 },
                ],
            },
        ],
    },

    {
        formName: "3 - Conservation des produits",
        items: [
            { type: "check", label: "DLC primaire", photos: "" }, //liste ou pas ? avec une légende
            { type: "check", label: "DLC secondaire", photos: "" },
            { type: "check", label: "Rotation et Présence étiquette", photos: "" },
            { type: "check", label: "Produits protégés et filmés", photos: "" },
        ]
    },

    {
        formName: "4 - Huiles de cuisson",
        items: [
            {
                type: "group",
                label: "Bac 1",
                items: [
                    { type: "temp", label: "Température de programmation", min_ORANGE: 165 },
                    { type: "check", label: "Niveau d'huile" },
                    { type: "content", label: "Relevé du composé polaire", max_ORANGE: 20, max_RED: 22 },
                ],
            },
            { type: "check", label: "Produits protégés et filmés", photos: "" },
        ],
    },

    {
        formName: "5 - Cuissons des produits grillés",
        items: [
            {
                type: "group",
                label: "Grill 1",
                items: [
                    { type: "check", label: "Propreté et état du grill, spatules, grattoirs..." },
                    { type: "temp", label: "Température du grill" },
                    { type: "temp", label: "Prise température interne du steak sur 1ère série", min_ORANGE: 65, min_RED: 63 },
                ],
            },
        ]
    },

    {
        formName: "6 - Conservation des produits chauds",
        items: [
            { type: "temp", label: "Température du maintien chaud 1", min_ORANGE: 65, min_RED: 63 },
        ]
    },

    {
        formName: "7 - Nettoyage du matériel",
        items: [
            { type: "check", label: "Propreté plonge" },
            { type: "check", label: "Propreté coupe-légume" },
            { type: "check", label: "Propreté machine à glaces" },
            { type: "check", label: "Propreté zone marinade" },
        ]
    }
];