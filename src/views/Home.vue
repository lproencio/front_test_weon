<template>
  <div class="home"><Avatar name="test user" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { Avatar },
});
</script>
