<template>
  <div class="offices-wrapper">
    <p class="headline">All Offices</p>
    <div class="office__card" v-for="office in offices" :key="office.id">
      <specno-card-wrapper :color="office.color">
        <template>
          <Office :office="office" />
        </template>
      </specno-card-wrapper>
    </div>
    <v-fab-transition>
      <v-btn color="#0D4477" large dark fixed bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import SpecnoCardWrapper from "@/components/SpecnoCardWrapper";
import Office from "@/components/Office";

import OfficeDataService from "@/services/OfficeDataService";
export default {
  components: {
    SpecnoCardWrapper,
    Office,
  },
  data() {
    return {
      offices: [],
    };
  },
  mounted() {
    this.getOffices();
  },
  methods: {
    getOffices() {
      OfficeDataService.getAll()
        .then((response) => {
          this.offices = response.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style>
.office__btn {
  bottom: 17px;
}
</style>