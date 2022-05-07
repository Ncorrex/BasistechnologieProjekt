import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const recipes = [
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
          preparation: "Mischen, inne Pfanne, servieren",
          tags: []
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
              amount: 0.5,
              unit: 'l'
          },
          {
              name: "Salz",
              amount: 1,
              unit: 'pr'
          },
          {
              name: "Pfeffer",
              amount: 1,
              unit: 'pr'
          }
      ],
          preparation: "Mischen, inne Pfanne, würzen, servieren",
          tags: []
      }
  ];
  return {recipes};
  }

  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}
