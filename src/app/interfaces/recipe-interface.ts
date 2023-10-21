
export interface UserInterface {
    id: number
    date: string
    name: string
    image: string
}
export interface FoodValueInterface {
    calories: number
    fats: number
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
    additionalInformation: {
        ingredients: string[],
        details: [
            {
                title: string,
                body: string
            }
        ]
    }
    favorite: boolean | null,
    isFavorite: boolean | null
}
export interface Recipe {
    id: number
    title: string
    tags: string
    user: {
        id: number,
        date: string
        name: string
        image: string
    },
    image: string
    body: string
    timeCooking: number
    favorite: boolean | null
}

export interface DeleteItemRecipe {
    deleted: boolean
    deletedPost: RecipeItem
    id: number
}
