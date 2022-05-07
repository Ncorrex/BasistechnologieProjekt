import { Component, Inject } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>, private recipeService: RecipeService, @Inject(MAT_DIALOG_DATA) public recipes: Recipe[]) { }

  add(name: string, prep: string): void {
    name = name.trim();
    prep = prep.trim();
    if (!name || !prep) {return;}
    this.recipeService.addRecipe(
      {
        id: this.recipes.length + 1,
        name: name,
        preparation: prep,
        ingredients: [],
        tags: []
      }
    ).subscribe(recipe => {
      this.recipes.push(recipe);
    });
    this.dialogRef.close();
  }

}
