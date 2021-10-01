<template>
  <div class="d-flex mt-2 mb-8 text-center">
    <div class="flex-grow-1 align-end">
      <v-icon @click="$router.push({ name: 'offices' })" class="float-left pt-1"
        >mdi-arrow-left</v-icon
      >
      <p class="text-specno-title mb-0">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
