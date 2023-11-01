import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DeleteItemRecipe, Recipe, RecipeItem } from '../interfaces/recipe-interface';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://ea-backend.wckz.space/posts')
  };

  public getRandomRecipe(el?: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://ea-backend.wckz.space/posts').pipe(
      map((m: any) => {
        const newArr = m.sort(() => Math.random() - 0.5);
        const setArray = newArr.filter((item:any)=> item.id !== m.id);
        const arr = newArr.slice(1, el)
        return arr
      })
    )
  };

  public getRecipeId(id: number): Observable<RecipeItem> {
    return this.http.get<RecipeItem>(`https://ea-backend.wckz.space/posts/${id}`)
  };

  createRecipe(recipe: any): Observable<RecipeItem> {
    return this.http.post<RecipeItem>('https://ea-backend.wckz.space/posts', recipe)
  };

  deleteRecipe(id: number): Observable<DeleteItemRecipe> {
    return this.http.delete<DeleteItemRecipe>(`https://ea-backend.wckz.space/posts/${id}`)
  }

  updateRecipe(id: number,recipe:any): Observable<any> {
    return this.http.delete<DeleteItemRecipe>(`https://ea-backend.wckz.space/posts/${id}`,recipe)
  }

}
