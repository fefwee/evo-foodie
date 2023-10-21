import { RecipeItem } from "src/app/interfaces/recipe-interface"


export interface recipeFavoriteModel {
    favorite: RecipeItem[],
}
export class getRecipe {
    static readonly type = '[Recipe] Get Recipe'
}

export class AddToFavorite {
    static readonly type = '[Recipe] Add recipe'
    constructor(public payload: number) { }
}