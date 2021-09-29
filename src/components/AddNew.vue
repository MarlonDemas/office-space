<template>
  <v-fab-transition>
    <v-btn color="#0D4477" large dark fixed bottom right fab @click="$emit('add-new')">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-fab-transition>
</template>