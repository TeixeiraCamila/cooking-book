<script setup lang="ts">
import { useRecipes } from "@/composables/useRecipes";

const { recipes } = useRecipes();
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
      <div class="margin-line"></div>

      <div class="page-content">
        <header class="book-header">
          <span class="header-label">Meu Livro de Receitas</span>
          <div class="header-divider">
            <span class="divider-gem">✦</span>
          </div>
        </header>

        <div class="recipes-grid">
          <router-link
            v-for="recipe in recipes"
            :key="recipe.id"
            :to="{ name: 'recipe', params: { id: recipe.id } }"
            class="recipe-card"
          >
            <div class="card-photo-wrap">
              <img
                :src="recipe.image"
                :alt="recipe.name"
                class="card-photo"
                loading="lazy"
              />
              <div class="card-overlay">
                <span class="card-cta">Ver Receita →</span>
              </div>
            </div>
            <div class="card-info">
              <h2 class="card-name">{{ recipe.name }}</h2>
              <p class="card-meta">
                <span class="meta-item"> {{ recipe.time }}</span>
                <span class="meta-item"> {{ recipe.servings }} porções</span>
              </p>
            </div>
            <div class="card-tape card-tape--top">{{ recipe.category }}</div>
          </router-link>
        </div>

        <footer class="book-footer">
          <div class="footer-line"></div>
          <span class="footer-text"
            >{{ recipes.length }} receitas colecionadas</span
          >
        </footer>
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

.spine-ring {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring-outer {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--ring-shine) 0%,
    var(--ring) 40%,
    #666 100%
  );
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
  background: var(--cream);
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 27px,
    rgba(180, 160, 140, 0.12) 27px,
    rgba(180, 160, 140, 0.12) 28px
  );
  border-radius: 0 6px 6px 0;
  box-shadow:
    4px 0 24px rgba(0, 0, 0, 0.25),
    8px 4px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  overflow: hidden;
  position: relative;
}

.margin-line {
  position: absolute;
  left: 72px;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: rgba(180, 80, 80, 0.25);
  z-index: 1;
}

/* ── Page content ── */
.page-content {
  flex: 1;
  padding: 16px 36px 20px 88px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ── Header ── */
.book-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.header-label {
  font-family: var(--font-decorative);
  font-size: 2rem;
  color: var(--red);
  letter-spacing: 0.5px;
}

.header-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
}

.header-divider::before,
.header-divider::after {
  content: "";
  flex: 1;
  height: 3px;
  background: var(--border);
}

.header-divider::before {
  flex: 0 0 0px;
}

.header-divider::after {
  flex: 1;
}

.divider-gem {
  color: var(--red);
  font-size: 1.5rem;
}

/* ── Recipe grid ── */
.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 20px;
  flex: 1;
  overflow: scroll;
  padding-top: 1rem;
}

/* ── Recipe card ── */
.recipe-card {
  position: relative;
  background: white;
  border: 1px solid var(--border);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.12);
  height: 100%;
  max-height: 240px;
}

.recipe-card:hover {
  transform: translateY(-4px) rotate(0.5deg);
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.2);
}

.card-tape {
  position: absolute;
  width: 140px;
  height: 14px;
  background: rgb(255, 230, 150);
  border-left: 1px solid rgba(200, 180, 100, 0.4);
  border-right: 1px solid rgba(200, 180, 100, 0.4);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.card-tape--top {
  top: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(-1deg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-photo-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.card-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.recipe-card:hover .card-photo {
  transform: scale(1.06);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(44, 24, 16, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.recipe-card:hover .card-overlay {
  opacity: 1;
}

.card-cta {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--cream);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--red);
  padding: 6px 14px;
  border-radius: 1px;
}

.card-info {
  padding: 10px 12px 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 4.6875rem;
  justify-content: space-between;
}

.card-name {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  color: var(--brown);
  line-height: 1.3;
}

.card-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.meta-item {
  font-size: 10px;
  color: var(--text-light);
  letter-spacing: 0.02em;
}

/* ── Footer ── */
.book-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
}

.footer-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.footer-text {
  font-family: var(--font-decorative);
  font-size: 2rem;
  color: var(--text-light);
}

@media (max-width: 600px) {
  .page-content {
    padding: 2rem;
  }
  .footer-text {
    font-size: 1rem;
  }
}
</style>
