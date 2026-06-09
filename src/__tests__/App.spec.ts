import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "home", component: { template: "<div />" } }],
});

describe("App", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(App, {
      global: { plugins: [router] },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
