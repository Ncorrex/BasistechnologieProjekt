import { Component, Inject, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { ingredient } from '../ingredient';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit{
  selectedIngredient?: ingredient;
  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>, private recipeService: RecipeService, @Inject(MAT_DIALOG_DATA) public recipes: Recipe[]) { }

  ngOnInit(): void {
      this.getIngredients();
  }

  posIngredients: ingredient[] = [];
  tempIngredients: ingredient[] = [];

  getIngredients(): void {
    this.recipeService.getIngredients().subscribe(ingrendients => this.posIngredients = ingrendients);
  }

  exportIngredients: ingredient[] = [];

  addIngredientField(ing: ingredient, amount: string): void {
    if (amount && ing){
      this.exportIngredients.push({
        name: ing.name,
        amount: parseInt(amount),
        unit: ing.unit
      })
    }
  }

  removeIngredient(ing: ingredient): void {
    this.tempIngredients = this.exportIngredients;
    this.exportIngredients = []
    for(let ingredient of this.tempIngredients) {
      if (ingredient != ing){
        this.exportIngredients.push(ingredient);
      }
    }
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
