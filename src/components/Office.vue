<template>
  <v-card class="mx-auto">
    <v-card-title class="text-h5 font-weight-bolder">
      Specno
      <v-spacer></v-spacer>
      <v-icon color="#0d4477">mdi-pencil-outline</v-icon>
    </v-card-title>

    <info>
      <v-row>
        <v-col class="pb-0">
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </info>

    <v-card-actions>
      <v-col>
        <v-row justify="space-around">
          <v-btn small block plain @click="show = !show">
            More info
            <v-icon right>{{
              show ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Info from "./Info";
export default {
  components: {
    Info,
  },
  data: () => ({
    show: false,
  }),
};
</script>