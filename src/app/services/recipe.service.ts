import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Recipe, RecipeItem } from '../interfaces/recipe-interface';
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
        const newArr = m.sort(() => Math.random() - 0.5)
        const arr = newArr.slice(1, el)
        return arr
      })
    )
  };

  public getRecipeId(id: number): Observable<RecipeItem> {
    return this.http.get<RecipeItem>(`https://ea-backend.wckz.space/posts/${id}`)
  };

  createRecipe(recipe: any): Observable<RecipeItem> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5Nzc1MDQ5NiwiZXhwIjoxNjk3NzU3Njk2fQ.l41LS4cprZk7JFqMiSe8VbTHQ7zW5xSFi9hYP7_gfEA')
    return this.http.post<RecipeItem>('https://ea-backend.wckz.space/posts', recipe, { headers: headers })
  };

}
