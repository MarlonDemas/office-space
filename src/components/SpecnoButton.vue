<template>
  <v-container class="text-center">
    <v-btn
      :block="block"
      rounded
      :color="color"
      dark
      :text="text"
      class="px-10 text-uppercase"
      @click="$emit('button-clicked')"
    >
      {{ title }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    text: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "specno-blue",
    },
  },
};
</script>
