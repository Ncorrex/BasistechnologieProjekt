import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RECIPE } from '../mock-recipe';
import { Recipe } from '../recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{
  recipes: Recipe[] = [];
  selectedRecipe?: Recipe;
  constructor(public dialog: MatDialog, private recipeService: RecipeService) {}

  public ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  openRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    const dialogRef = this.dialog.open(RecipeDetailsComponent, {
      width: '500px',
      role: "dialog",
      data: this.selectedRecipe,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addRecipe(){
    const dialogRef = this.dialog.open(AddRecipeComponent, {
      data: this.recipes,
    })
  }
}
