import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes$!: Observable<Recipe[]>;
  recipes: Recipe[] = [];
  private searchTerms = new Subject<string>();
  selectedRecipe?: Recipe;

  constructor(public dialog: MatDialog, private recipeService: RecipeService) { }

  search(term: string): void {
    this.searchTerms.next(term);
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

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
    this.getRecipes();
    this.recipes$ = this.searchTerms.pipe(
      // wait 300ms for user experience
      debounceTime(300),

      // only do stuff if there is a new word
      distinctUntilChanged(),

      // search for new things each time search term changes
      switchMap((term: string) => this.recipeService.searchRecipe(term)),
    );
  }

}
