<template>
  <v-app>
    <v-main>
      <v-container class="container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.container {
  max-width: 350px;
}
</style>