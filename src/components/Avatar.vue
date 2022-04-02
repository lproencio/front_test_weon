<template>
  <div class="avatar" :style="{ background: `#${color}` }">
    {{ initials }}
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  props: { name: { type: String, default: "" } },
  setup(props) {
    const initials = ref("");
    const color = ref("");

    const get_initials = (name: string) => {
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

      let inits: RegExpMatchArray[] | string = [...name.matchAll(rgx)] || [];

      inits = (
        (inits.shift()?.[1] || "") + (inits.pop()?.[1] || "")
      ).toUpperCase();

      return inits;
    };

    const create_code = (name: string) => {
      var hash = 0;
      for (var i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    };

    const create_color = (code: number) => {
      var c = (code & 0x00ffffff).toString(16).toUpperCase();

      return "00000".substring(0, 6 - c.length) + c;
    };

    initials.value = get_initials(props.name);

    const hash_code = create_code(props.name);
    color.value = create_color(hash_code);

    return { initials, color };
  },
});
</script>
