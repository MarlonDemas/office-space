<template>
  <v-app class="container">
    <v-card class="mx-auto card" min-width="350" color="blue">
      <v-card class="mx-auto" min-width="342" max-width="344">
        <v-card-title class="text-h5 font-weight-bolder">
          Specno
          <v-spacer></v-spacer>
          <v-icon color="#0d4477">mdi-pencil-outline</v-icon>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <v-icon>mdi-account-group-outline</v-icon>
              <span class="text-caption pl-1"
                >5 staff members in this office</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pb-0">
              <hr />
            </v-col>
          </v-row>
        </v-card-text>

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
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss">
.card {
  padding-left: 10px !important;
  background: linear-gradient(
    to bottom,
    darken(blue, 15%) 0,
    darken(blue, 15%) 33%,
    blue 33%,
    blue 66%,
    lighten(blue, 20%) 66%,
    lighten(blue, 20%) 100%
  );
}
</style>