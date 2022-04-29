import { recipe } from "./recipe";
import { ingredient } from "./ingredient";

export const RECIPE: recipe[] = [
    {
        id: 1,
        name: 'Pfannekuchen',
        ingredients: [
            {
                name: "Mehl",
                amount: 300,
                unit: 'g'
            },
            {
                name: "Eier",
                amount: 3,
                unit: 'x'
            },
            {
                name: "Milch",
                amount: 0.3,
                unit: 'l'
            }
        ],
        preparation: "Mischen, inne Pfanne, servieren"
    },
    {
        id: 2,
        name: 'Rührei',
        ingredients: [{
            name: "Eier",
            amount: 5,
            unit: 'x'
        },
        {
            name: "Milch",
            amount: 0.05,
            unit: 'l'
        },
        {
            name: "Salz",
            amount: 1,
            unit: 'Prise'
        }
    ],
        preparation: "Mischen, inne Pfanne, würzen, servieren"
    }
];