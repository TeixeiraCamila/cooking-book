import { describe, it, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import RecipeView from "../views/RecipeView.vue";

function mountRecipeView(id: number) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: "/recipe/:id", name: "recipe", component: RecipeView }],
  });

  router.push(`/recipe/${id}`);

  return router.isReady().then(() =>
    mount(RecipeView, {
      global: { plugins: [router] },
    }),
  );
}

describe("RecipeView", () => {
  it("renders ingredient quantities and names instead of raw objects", async () => {
    const wrapper = await mountRecipeView(1);
    await flushPromises();

    const text = wrapper.text();
    expect(text).toContain("1 xícara de óleo vegetal (canola ou girassol)");
    expect(text).toContain("250g de chocolate meio amargo");
    expect(text).not.toContain("[object Object]");
  });
});
