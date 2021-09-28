<template>
  <div class="offices-wrapper">
    <p class="headline">All Offices</p>
    <specno-card-wrapper color="#333666">
      <template>
        <Office :offices="offices" />
      </template>
    </specno-card-wrapper>
  </div>
</template>

<script>
import SpecnoCardWrapper from "@/components/SpecnoCardWrapper";
import Office from "@/components/Office";

import OfficeDataService from "@/services/OfficeDataService";
import StaffDataService from "@/services/StaffDataService";
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
          this.offices.forEach((office) => {
            StaffDataService.getAll(office.id)
              .then((response) => {
                office.staffCount = response.data.count;
              })
              .catch((e) => {
                console.error(e);
              });
          });
          console.log(this.offices);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>
