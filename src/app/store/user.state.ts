import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddUser, AuthUser,userStateModel } from './models/user.model';
import { AuthUserService } from '../services/auth-user.service';
import { tap } from 'rxjs/operators';



@State<userStateModel>({
    name: 'UserState',
    defaults: {
        access_token: '',
        role: '',
        username: '',
        id: 0,
        fullname: '',
        image: '',
        isAuth:null
    }
})

@Injectable()
export class UserState {

    constructor(private serviceAuth: AuthUserService) { }

    @Selector()
    static getUser(state: userStateModel) {
        return state;
    };

    @Action(AuthUser)
    AuthUser(
        { getState, setState }: StateContext<userStateModel>,
        { payload }: AuthUser) {
        return this.serviceAuth.loginUser(payload).pipe(
            tap((res) => {
                const state = getState();
                setState({
                    ...state,
                    access_token: res.access_token,
                    fullname: res.fullname,
                    image: res.image,
                    role: res.role,
                    username: res.username,
                    id: res.id,
                    isAuth:true
                })
            })
        )
    }
}