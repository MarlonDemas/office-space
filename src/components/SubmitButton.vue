<template>
  <div class="text-center mt-5">
    <v-btn
      :loading="loading"
      rounded
      color="#489DDA"
      dark
      :text="text"
      class="px-10"
      @click="
        loading = true;
        $emit('submitClicked');
      "
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>