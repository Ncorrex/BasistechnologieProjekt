import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RECIPE } from '../mock-recipe';
import { recipe } from '../recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes = RECIPE;
  selectedRecipe?: recipe;
  constructor() { }

  ngOnInit(): void {
  }

  
  onSelect(recipe: recipe): void{
    this.selectedRecipe = recipe;
  };
}
