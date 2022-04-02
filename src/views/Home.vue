<template>
  <div class="home">
    <div v-if="usersList">
      <CardUser v-for="(user, i) in usersList.users" :user="user" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { listUser } from "@/types/user";
import user_api from "@/api/user_api";

import CardUser from "@/components/CardUser.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { CardUser },

  setup() {
    const usersList = ref<listUser | null>(null);

    onMounted(async () => {
      const all_users = await user_api.getAll();

      usersList.value = all_users.data;
    });

    return { usersList };
  },
});
</script>
