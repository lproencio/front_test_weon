<template>
  <div class="home"><Avatar name="test user" /> {{ users }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { listUser } from "@/types/user";
import user_api from "@/api/user_api";

import Avatar from "@/components/Avatar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { Avatar },

  setup() {
    const users = ref<listUser | null>(null);

    onMounted(async () => {
      const all_users = await user_api.getAll();

      users.value = all_users.data;
    });

    return { users };
  },
});
</script>
