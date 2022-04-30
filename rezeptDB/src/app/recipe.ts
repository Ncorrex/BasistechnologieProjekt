import { ingredient } from "./ingredient"

export interface recipe {
    id: number
    name: string
    ingredients: ingredient[]
    preparation: string,
    tags: string[]
}