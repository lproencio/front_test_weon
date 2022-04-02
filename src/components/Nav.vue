<template>
  <div class="nav">
    <div class="routes" v-if="routes">
      <button
        :class="{ select: is_selected(route.url) }"
        v-for="(route, i) in routes"
        :key="i"
      >
        <router-link :to="route.url">{{ route.label }}</router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRoute } from "vue-router";

interface PropRoute {
  label: string;
  url: string;
}

export default defineComponent({
  props: {
    routes: { type: Array as PropType<PropRoute[]>, default: () => [] },
  },

  setup() {
    const route = useRoute();

    const is_selected = (url: string) => {
      return url == route.path;
    };

    return { is_selected };
  },
});
</script>
