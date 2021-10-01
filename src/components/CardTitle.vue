<template>
  <v-card-title class="text-h5 font-weight-bolder">
    <slot></slot>
    {{ title }}
    <v-spacer></v-spacer>
    <v-icon @click.stop="$emit('icon-clicked')" color="specno-blue dust">{{
      icon
    }}</v-icon>
  </v-card-title>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
