<template>
  <div class="card_user">
    <Avatar :name="user.name" />
    <p>{{ user.name }}</p>
    <p>{{ user.document }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";

export default defineComponent({
  props: { user: { type: Object, default: null } },
  components: { Avatar },
});
</script>
