<template>
  <div class="offices__wrapper">
    <p class="headline">All Offices</p>
    <div class="office__card" v-for="office in offices" :key="office.id">
      <SpecnoOfficeCard
        @click.native="
          $router.push({ name: 'office-details', params: { id: office.id } })
        "
        :office="office"
        style="cursor: pointer"
      />
    </div>
    <AddNew @add-new="$router.push({ name: 'new-office' })" />
  </div>
</template>

<script>
import SpecnoOfficeCard from "@/components/SpecnoOfficeCard";
import AddNew from "@/components/AddNew";

import OfficeDataService from "@/services/OfficeDataService";
export default {
  components: {
    SpecnoOfficeCard,
    AddNew,
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
