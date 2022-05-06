import { ingredient } from "./ingredient"

export interface Recipe {
    id: number
    name: string
    ingredients: ingredient[]
    preparation: string,
    tags: string[]
}