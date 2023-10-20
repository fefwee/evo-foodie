import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Recipe, RecipeItem } from '../interfaces/recipe-interface';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getRecipe():Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://ea-backend.wckz.space/posts')
  };

  public getRandomRecipe(el?: number):Observable<Recipe[]> {
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
    const headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NzgzMjU4MSwiZXhwIjoxNjk3ODM5NzgxfQ.0IpiEqBQUENE_mca1ZaxB_G8STBQFE51XsMS7NRDB9Y') 
    return this.http.post<RecipeItem>('https://ea-backend.wckz.space/posts',recipe,{headers:headers})
  };

}
