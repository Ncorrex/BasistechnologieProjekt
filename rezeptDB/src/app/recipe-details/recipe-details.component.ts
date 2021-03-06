import { Component, OnInit, Input, Inject } from '@angular/core';
import { Recipe } from '../recipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent{

  constructor(public dialogRef: MatDialogRef<RecipeDetailsComponent>, @Inject(MAT_DIALOG_DATA) public recipe: Recipe, private recipeService: RecipeService) { }

  save(): void {
    if (this.recipe) {
      this.recipeService.updateRecipe(this.recipe).subscribe();
    }
  }

}
