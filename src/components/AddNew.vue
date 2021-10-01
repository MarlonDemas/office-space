<template>
  <v-fab-transition>
    <v-btn
      color="specno-blue dust"
      large
      dark
      fixed
      bottom
      right
      fab
      @click="$emit('add-new')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-fab-transition>
</template>
