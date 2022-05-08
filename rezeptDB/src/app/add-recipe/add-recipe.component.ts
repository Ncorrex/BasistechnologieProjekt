import { Component, Inject } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { ingredient } from '../ingredient';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  selectedIngredient: string = "";
  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>, private recipeService: RecipeService, @Inject(MAT_DIALOG_DATA) public recipes: Recipe[]) { }

  posIngredients: string[] = ['Eier', 'Zucker', 'Milch', 'Mehl'];
  
  exportIngredients: ingredient[] = [];

  addIngredientField(name: string, amount: string): void {
    this.exportIngredients.push({
      name: name,
      amount: parseInt(amount),
      unit: 'test'
    })
  }

  add(name: string, prep: string): void {
    name = name.trim();
    prep = prep.trim();
    if (!name || !prep) {return;}
    this.recipeService.addRecipe(
      {
        id: this.recipes.length + 1,
        name: name,
        preparation: prep,
        ingredients: this.exportIngredients,
        tags: []
      }
    ).subscribe(recipe => {
      this.recipes.push(recipe);
    });
    this.exportIngredients = [];
    this.dialogRef.close();
  }

}
