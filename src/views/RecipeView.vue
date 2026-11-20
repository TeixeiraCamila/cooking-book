<script setup lang="ts">
import { useRoute } from "vue-router";
import { useRecipe } from "@/composables/useRecipes";

const route = useRoute();
const { recipe } = useRecipe(Number(route.params.id));
</script>

<template>
  <div class="main-wrapper">
    <div class="binder-spine">
      <div v-for="n in 5" :key="n" class="spine-ring">
        <div class="ring-outer">
          <div class="ring-inner"></div>
        </div>
      </div>
    </div>

    <div class="book-page">
      <button class="back-btn" @click="$router.push('/')">← voltar</button>

      <template v-if="recipe">
        <div class="page-number">Nº {{ recipe.id }}</div>

        <div class="recipe-content">
          <div class="title-card">
            <div class="tape tape--title-left"></div>
            <div class="tape tape--title-right"></div>
            <h1 class="recipe-title">{{ recipe.name }}</h1>
          </div>

          <div class="middle-section">
            <div class="ingredients-card">
              <div class="paperclip">
                <div class="paperclip-inner"></div>
              </div>
              <div class="tape tape--card-top"></div>

              <h2 class="card-heading">Ingredientes:</h2>

              <div class="ingredients-body">
                <div class="ingredients-list-wrap">
                  <div
                    v-for="group in recipe.ingredientGroups"
                    :key="group.name"
                    class="ingredient-group"
                  >
                    <h3
                      v-if="recipe.ingredientGroups.length > 1"
                      class="group-name"
                    >
                      {{ group.name }}
                    </h3>
                    <ul class="ingredients-list">
                      <li
                        v-for="(ing, index) in group.ingredients"
                        :key="`${ing.quantity}-${ing.name}-${index}`"
                        class="ingredient-item"
                      >
                        <span class="ing-bullet">•</span>
                        <span class="ing-text"
                          >{{ ing.quantity }} de {{ ing.name }}</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="dish-photo-wrap">
                  <div class="tape tape--photo-tl"></div>
                  <div class="tape tape--photo-tr"></div>
                  <img
                    :src="recipe.image"
                    :alt="recipe.name"
                    class="dish-photo"
                  />
                </div>
              </div>

              <div class="recipe-meta">
                <span class="meta-badge">🕐 {{ recipe.time }}</span>
                <span class="meta-badge">🍽 {{ recipe.servings }} porções</span>
              </div>
            </div>
          </div>

          <div class="method-card">
            <div class="paperclip paperclip--right">
              <div class="paperclip-inner"></div>
            </div>
            <h2 class="card-heading card-heading--method">Modo de Preparo:</h2>

            <div class="method-groups">
              <div
                v-for="group in recipe.preparationGroups"
                :key="group.name"
                class="method-group"
              >
                <h3
                  v-if="recipe.preparationGroups.length > 1"
                  class="method-group-name"
                >
                  {{ group.name }}
                </h3>
                <ol class="method-list">
                  <li
                    v-for="(step, i) in group.steps"
                    :key="i"
                    class="method-item"
                  >
                    <span class="step-bullet">•</span>
                    {{ step }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div v-else class="notfound-message">
        <p class="notfound-code">Receita não encontrada</p>
        <p class="notfound-hint">
          O ID "{{ $route.params.id }}" não corresponde a nenhuma receita.
        </p>
        <button class="notfound-btn" @click="$router.push('/')">
          ← voltar para o livro
        </button>
      </div>

      <div class="stamp">
        <div class="stamp-inner">
          <span class="stamp-icon">🍓</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* ── Binder spine ── */
.binder-spine {
  width: 52px;
  height: 90%;
  background: linear-gradient(
    to right,
    #2a2a2a 0%,
    #4a4a4a 30%,
    #5a5a5a 50%,
    #3a3a3a 70%,
    #1a1a1a 100%
  );
  border-radius: 4px 0 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  box-shadow:
    -4px 0 12px rgba(0, 0, 0, 0.4),
    inset 2px 0 4px rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.ring-outer {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #cfcfcf 0%, #9e9e9e 40%, #666 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
}
.ring-inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
}

/* ── Book page ── */
.book-page {
  flex: 1;
  height: 90%;
  border-radius: 0 6px 6px 0;
  box-shadow:
    4px 0 24px rgba(0, 0, 0, 0.25),
    8px 4px 32px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: #cb3434;
  background-image:
    /* Vertical stripes white */
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.55) 0px,
      rgba(255, 255, 255, 0.55) 20px,
      transparent 20px,
      transparent 40px
    ),
    /* Horizontal stripes white */
    repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.55) 0px,
        rgba(255, 255, 255, 0.55) 20px,
        transparent 20px,
        transparent 40px
      ),
    /* Diagonal overlay for gingham cross-hatch */
    repeating-linear-gradient(
        90deg,
        rgba(180, 30, 30, 0.35) 0px,
        rgba(180, 30, 30, 0.35) 20px,
        transparent 20px,
        transparent 40px
      ),
    repeating-linear-gradient(
      0deg,
      rgba(180, 30, 30, 0.35) 0px,
      rgba(180, 30, 30, 0.35) 20px,
      transparent 20px,
      transparent 40px
    );
}

/* ── Navigation ── */
.back-btn {
  position: absolute;
  top: 14px;
  left: 44px;
  z-index: 10;
  font-family: var(--font-decorative);
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.18);
  padding: 4px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.02em;
}
.back-btn:hover {
  background: rgba(0, 0, 0, 0.32);
}

.page-number {
  position: absolute;
  top: 16px;
  right: 44px;
  z-index: 10;
  font-family: "Lato", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ── Recipe content ── */
.recipe-content {
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 48px 14px;
  gap: 10px;
}

/* ── Title card ── */
.title-card {
  position: relative;
  background: var(--cream);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  padding: 10px 40px 8px;
  border-radius: 2px;
  box-shadow:
    0 3px 12px rgba(0, 0, 0, 0.22),
    inset 0 0 0 1px rgba(200, 170, 130, 0.3);
  text-align: center;
  min-width: 260px;
}

.tape {
  position: absolute;
  background: rgba(255, 235, 160, 0.72);
  border-left: 1px solid rgba(200, 180, 100, 0.4);
  border-right: 1px solid rgba(200, 180, 100, 0.4);
  z-index: 10;
}

.tape--title-left {
  width: 44px;
  height: 13px;
  top: -5px;
  left: 20px;
  transform: rotate(-3deg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
.tape--title-right {
  width: 44px;
  height: 13px;
  top: -5px;
  right: 20px;
  transform: rotate(2deg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.recipe-title {
  font-family: var(--font-decorative);
  font-size: 34px;
  font-weight: 600;
  color: var(--brown);
  line-height: 1.1;
  white-space: nowrap;
}

/* ── Middle section ── */
.middle-section {
  width: 100%;
}

/* ── Ingredients card ── */
.ingredients-card {
  position: relative;
  background: #f0e8d8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
  border-radius: 2px;
  padding: 12px 14px 10px 20px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(180, 150, 110, 0.25);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tape--card-top {
  width: 56px;
  height: 14px;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(-1deg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

/* Paperclip SVG-style */
.paperclip {
  position: absolute;
  top: -6px;
  left: 16px;
  width: 18px;
  height: 36px;
  z-index: 6;
}
.paperclip--right {
  left: auto;
  right: 20px;
}
.paperclip::before,
.paperclip::after {
  content: "";
  position: absolute;
  border: 2.5px solid #888;
  border-radius: 10px;
}
.paperclip::before {
  width: 14px;
  height: 30px;
  top: 0;
  left: 2px;
  border-bottom: none;
}
.paperclip::after {
  width: 10px;
  height: 22px;
  top: 4px;
  left: 4px;
  border-bottom: none;
  border-color: #aaa;
}
.paperclip-inner {
  position: absolute;
  bottom: 0;
  left: 4px;
  width: 10px;
  height: 10px;
  border: 2.5px solid #888;
  border-top: none;
  border-radius: 0 0 6px 6px;
}

.card-heading {
  font-family: var(--font-decorative);
  font-size: 1.75em;
  font-weight: 600;
  color: var(--brown);
  padding-left: 1rem;
}

.ingredients-body {
  display: flex;
  gap: 14px;
  flex: 1;
  min-height: 0;
}

.ingredients-list-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;
}

.ingredient-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.group-name {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--red);
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(181, 41, 42, 0.2);
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ingredient-item {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-family: var(--font-decorative);
  font-size: 20px;
  color: var(--brown);
  line-height: 1.35;
}

.ing-bullet {
  color: var(--brown-mid);
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Dish photo ── */
.dish-photo-wrap {
  position: relative;
  flex-shrink: 0;
  width: 42%;
  align-self: center;
}

.tape--photo-tl {
  width: 36px;
  height: 11px;
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  opacity: 0.85;
}
.tape--photo-tr {
  width: 36px;
  height: 11px;
  top: -4px;
  right: -8px;
  transform: rotate(35deg);
  opacity: 0.85;
}

.dish-photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  box-shadow:
    3px 3px 0 0 rgba(181, 41, 42, 0.35),
    0 4px 12px rgba(0, 0, 0, 0.25);
  border: 3px solid white;
  transform: rotate(1.5deg);
}

/* ── Recipe meta ── */
.recipe-meta {
  display: flex;
  gap: 12px;
  padding-top: 4px;
}

.meta-badge {
  font-family: "Lato", sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--brown-mid);
  background: rgba(255, 255, 255, 0.5);
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.04em;
}

/* ── Method card ── */
.method-card {
  position: relative;
  width: 100%;
  background: #f0e8d8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E");
  border-radius: 2px;
  padding: 10px 20px 10px 20px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(180, 150, 110, 0.25);
}

.method-groups {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.method-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.method-group-name {
  font-family: "Lato", sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--red);
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(181, 41, 42, 0.2);
}

.method-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.method-item {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-family: var(--font-decorative);
  font-size: 20px;
  color: var(--brown);
  line-height: 1.4;
}

.step-bullet {
  color: var(--brown-mid);
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Decorative stamp ── */
.stamp {
  position: absolute;
  bottom: 22px;
  right: 38px;
  z-index: 6;
  width: 52px;
  height: 52px;
  border: 3px solid rgba(181, 41, 42, 0.5);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transform: rotate(-8deg);
}
.stamp::before {
  content: "";
  position: absolute;
  inset: 3px;
  border: 1px dashed rgba(181, 41, 42, 0.6);
  border-radius: 1px;
}
.stamp-inner {
  font-size: 22px;
}

/* ── Not found ── */
.notfound-message {
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px;
  text-align: center;
  flex: 1;
}

.notfound-code {
  font-family: var(--font-decorative);
  font-size: 28px;
  color: var(--brown);
}

.notfound-hint {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 900;
  color: var(--cream);
  line-height: 1.4;
}

.notfound-btn {
  margin-top: 8px;
  font-family: var(--font-decorative);
  font-size: 16px;
  color: var(--cream);
  background: var(--red);
  padding: 8px 20px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.02em;
}

.notfound-btn:hover {
  background: #8a1c1c;
}

@media (max-width: 600px) {
  .binder-spine {
    width: 32px;
  }

  .recipe-content {
    padding: 14px 16px 14px;
  }

  .recipe-title {
    white-space: normal;
    font-size: 26px;
  }
}
</style>
