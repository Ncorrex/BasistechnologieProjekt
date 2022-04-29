import { Component, OnInit } from '@angular/core';
import { RECIPE } from '../mock-recipe';
import { recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes = RECIPE;
  constructor() { }

  ngOnInit(): void {
  }

}
