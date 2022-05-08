import { Injectable } from '@angular/core';
import { RECIPE } from './mock-recipe';
import { Recipe } from './recipe';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ingredient } from './ingredient';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(
    private http: HttpClient,
  ) { }

  private recipesUrl = 'api/recipes';
  private ingredientsUrl = 'api/ingredients';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getIngredients(): Observable<ingredient[]>{
    return this.http.get<ingredient[]>(this.ingredientsUrl).pipe(catchError(this.handleError<ingredient[]>('getIngredients', [])));
  }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.recipesUrl).pipe(catchError(this.handleError<Recipe[]>('getRecipes', [])));
  }

  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}};`
    return this.http.get<Recipe>(url).pipe(
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions).pipe(catchError(this.handleError<any>('updateRecipe'))
    );
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe, this.httpOptions).pipe(
      catchError(this.handleError<Recipe>('addRecipe'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }


}