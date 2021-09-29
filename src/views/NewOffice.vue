<template>
  <div class="new__office-wrapper">
    <PageTitle title="New Office" />
    <FormInputs :office="office" @add-office="addOffice" />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import FormInputs from "@/components/FormInputs";

import OfficeDataService from "@/services/OfficeDataService";
export default {
  components: {
    PageTitle,
    FormInputs,
  },
  data() {
    return {
      office: {},
    };
  },
  methods: {
    addOffice(office) {
      OfficeDataService.create(office)
        .then(() => {
          this.$router.push({ name: "offices" });
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>