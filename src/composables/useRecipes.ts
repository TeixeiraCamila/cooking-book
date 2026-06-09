import { ref, onMounted } from "vue";
import type { Recipe } from "@/types/recipe";
import recipesData from "@/data/recipes.json";

const allRecipes = ref<Recipe[]>([]);

function loadRecipes() {
  if (allRecipes.value.length === 0) {
    allRecipes.value = recipesData.recipes as Recipe[];
  }
}

export function useRecipes() {
  loadRecipes();
  return { recipes: allRecipes };
}

export function useRecipe(id: number) {
  const recipe = ref<Recipe | null>(null);

  onMounted(() => {
    loadRecipes();
    recipe.value = allRecipes.value.find((r) => r.id === id) ?? null;
  });

  return { recipe };
}
