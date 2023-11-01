import { AddToFavorite, DeleteFavorite, recipeFavoriteModel } from './models/recipe.model';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { RecipeService } from '../services/recipe.service';



@State<recipeFavoriteModel>({
    name: 'FavoriteState',
    defaults: {
        favorite: [],
    }
}
)

@Injectable()
export class FavoriteState {

    constructor(private serviceRecipe: RecipeService) { }

    @Selector()
    static getRecipe(state: recipeFavoriteModel) {
        return state;
    };

    @Action(AddToFavorite)
    AddToFavorite(
        { getState, setState }: StateContext<recipeFavoriteModel>,
        { payload }: any) {
        return this.serviceRecipe.getRecipeId(payload).pipe(
            tap((res) => {
                res.favorite
                const state = getState();
                setState({
                    ...state,
                    favorite: [
                        ...state.favorite,
                        res,
                    ],

                })
            })
        )
    }

    @Action(DeleteFavorite)
    DeleteFavorite({ getState, setState }: StateContext<any>,
        { payload }: any) {
        return this.serviceRecipe.getRecipeId(payload).pipe(
            tap((res) => {
                const state = getState();
                setState({
                    ...state,
                    favorite: [
                        ...state.favorite.filter((m: any) => m.id !== payload)
                    ],

                })
            })
        )
    }
}