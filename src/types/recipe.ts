export interface Ingredient {
  quantity: string
  name: string
}

export interface IngredientGroup {
  name: string
  ingredients: Ingredient[]
}

export interface PreparationGroup {
  name: string
  steps: string[]
}

export interface Recipe {
  id: number
  name: string
  description: string
  servings: number
  time: string
  image: string
  ingredientGroups: IngredientGroup[]
  preparationGroups: PreparationGroup[]
}