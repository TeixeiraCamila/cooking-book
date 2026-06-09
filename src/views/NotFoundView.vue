<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="notfound-wrapper">
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
        <div class="message-card">
          <div class="tape tape--left"></div>
          <div class="tape tape--right"></div>
          <h1 class="error-code">404</h1>
          <p class="error-text">Receita não encontrada</p>
          <p class="error-hint">
            Essa página não existe ou a receita foi removida.
          </p>
          <button class="home-btn" @click="router.push('/')">
            ← voltar para o livro
          </button>
        </div>

        <div class="stamp">
          <div class="stamp-inner">
            <span class="stamp-icon">📖</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notfound-wrapper {
  display: flex;
  height: 100vh;
  background: #b8a898;
  background-image:
    radial-gradient(ellipse at 20% 50%, #c9baa8 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, #a89888 0%, transparent 50%);
  align-items: center;
  justify-content: center;
  padding: 24px 24px 24px 0;
}

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
  max-width: 900px;
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

.page-content {
  flex: 1;
  padding: 16px 36px 20px 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.message-card {
  position: relative;
  background: white;
  border: 1px solid var(--border);
  padding: 32px 48px;
  text-align: center;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 380px;
}

.tape {
  position: absolute;
  width: 44px;
  height: 13px;
  background: rgba(255, 235, 160, 0.72);
  border-left: 1px solid rgba(200, 180, 100, 0.4);
  border-right: 1px solid rgba(200, 180, 100, 0.4);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  z-index: 10;
}

.tape--left {
  top: -5px;
  left: 20px;
  transform: rotate(-3deg);
}

.tape--right {
  top: -5px;
  right: 20px;
  transform: rotate(2deg);
}

.error-code {
  font-family: var(--font-heading);
  font-size: 60px;
  font-weight: 700;
  color: var(--red);
  line-height: 1;
}

.error-text {
  font-family: var(--font-decorative);
  font-size: 22px;
  color: var(--brown);
}

.error-hint {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: var(--text-light);
  max-width: 240px;
  line-height: 1.4;
}

.home-btn {
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

.home-btn:hover {
  background: #8a1c1c;
}

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
</style>
