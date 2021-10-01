<template>
  <div class="edit__office-wrapper">
    <PageTitle title="Edit Office" />
    <FormInputs
      :office="office"
      :edit="true"
      @edit-office="editOffice"
      @delete-office="deleteOffice"
    />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import FormInputs from "@/components/FormInputs";

import OfficeDataService from "@/services/OfficeDataService";
export default {
  components: { PageTitle, FormInputs },
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
    editOffice(id, office) {
      OfficeDataService.update(id, office)
        .then(() => {
          this.$router.push({ name: "offices" });
        })
        .catch((e) => {
          console.error(e);
        });
    },
    deleteOffice(id) {
      OfficeDataService.delete(id)
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
