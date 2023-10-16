import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeItem } from '../interfaces/recipe-interface';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getRecipe() {
    return this.http.get('https://ea-backend.wckz.space/posts')
  }

  public getRecipeId(id:number):Observable<RecipeItem>{
    return this.http.get<RecipeItem>(`https://ea-backend.wckz.space/posts/${id}`)
  }
}
