<template>
  <div class="app">
    <Nav :routes="routes" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Nav from "./components/Nav.vue";

interface routeType {
  label: string;
  url: string;
}

export default defineComponent({
  components: { Nav },
  setup() {
    const routes = ref<routeType[]>([
      { label: "users", url: "/" },
      { label: "new", url: "/new" },
    ]);

    return { routes };
  },
});
</script>
