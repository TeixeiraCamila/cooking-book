export interface IngredientGroup {
  name: string
  ingredients: string[]
}

export interface PreparationGroup {
  name: string
  steps: string[]
}

export interface Recipe {
  id: number
  name: string
  description: string
  category: string
  servings: number
  time: string
  image: string
  ingredientGroups: IngredientGroup[]
  preparationGroups: PreparationGroup[]
}
