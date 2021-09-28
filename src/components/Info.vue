<template>
  <v-card-text>
    <v-row>
      <v-col>
        <v-icon class="mr-2">{{ icon }}</v-icon>
        <slot name="additionalText"></slot>&nbsp;<span class="text-caption">{{
          text
        }}</span>
      </v-col>
    </v-row>
    <slot name="belowInfo"></slot>
  </v-card-text>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>