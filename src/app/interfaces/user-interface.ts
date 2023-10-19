export interface User {
    userId: number,
    username: string,
    role: string,
    posts: number,
    fullName: string,
    dateLastEntry: string,
    lastDevice: string,
    lastOS: string,
    image: string
}
export interface registrationUser {
    email: string
    created: boolean
}
export interface loginUser {
    access_token: string
    role: string
    username: string
    id: number
    fullname: string
    image: string
}
