import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RECIPE } from '../mock-recipe';
import { Recipe } from '../recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  recipes = RECIPE;
  selectedRecipe?: Recipe; 
  title = "4 minus 1";
  constructor(public dialog: MatDialog) {}

  openDialog(recipe: Recipe) {
    this.selectedRecipe = recipe;
    const dialogRef = this.dialog.open(RecipeDetailsComponent, {
      role: "dialog",
      data: this.selectedRecipe,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
