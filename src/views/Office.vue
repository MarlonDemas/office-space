<template>
  <div class="office__wrapper">
    <PageTitle title="Office" />
    <SpecnoOfficeCard :office="office" />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";

import OfficeDataService from "@/services/OfficeDataService";
export default {
  components: { PageTitle },
  data() {
    return {
      office: {},
    };
  },
  mounted() {
    this.getOffice();
  },
  methods: {
    getOffice() {
      const id = this.$route.params.id;
      OfficeDataService.get(id)
        .then((response) => {
          this.office = response.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style>
</style>