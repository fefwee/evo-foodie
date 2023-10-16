
export interface UserInterface {
    id: number
    date: string
    name: string
    image: string
}
export interface FoodValueInterface {
    calories: number
    fats: 10
    carbohydrates: number
    belki: number
}
export interface CommentsInterface {
    postId: number
    id: number
    body: string
    user: {
        id: number
        username: string
    }
    dateCreated: string
}
export interface IngridientsInterface {
    ingredients: string
}
export interface Details {
    title: string
    body: string
}

export interface AdditionalInformationInteface {
    ingredients: IngridientsInterface[]
    details: Details[]
}

export interface RecipeItem {
    id: number
    title: string
    tags: string
    user: UserInterface | undefined
    image: string
    body: string
    timeCooking: number
    foodValue: FoodValueInterface | undefined
    comments: CommentsInterface[]
    additionalInformation: AdditionalInformationInteface |undefined
    favorite: boolean
}