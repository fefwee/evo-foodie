


export interface userStateModel {
    access_token: string | undefined
    role: string | undefined
    username: string | undefined
    id: number | undefined
    fullname: string | undefined
    image: string | undefined
    isAuth:boolean | null
}

export interface authParam {
    username: string
    password: string
}
export class GetUser {
    static readonly type = '[User]: Get User '
};

export class AuthUser {
    static readonly type = '[User] Auth User'
    constructor(public payload: authParam) { }
}

export class AddUser {
    static readonly type = '[User]: Add User';
    constructor(public payload: {
        username: string
        password: string
    }) { }
};