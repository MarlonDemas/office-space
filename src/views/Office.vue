<template>
  <div class="office__wrapper">
    <PageTitle title="Office" />
    <SpecnoOfficeCard v-if="office.color" :office="office" />
    <v-text-field
      class="mt-8"
      label="Search"
      flat
      solo
      append-icon="mdi-magnify"
    ></v-text-field>
    <div class="d-flex">
      <p class="text-h5 font-weight-medium">Staff Members in Office</p>
      <v-spacer></v-spacer>
      <p class="text-h6 font-weight-regular">{{ office.staffs.length }}</p>
    </div>
    <v-row v-for="staff in office.staffs" :key="staff.id">
      <v-col cols="3">
        <img src="@/assets/img/avatar1.svg" alt="avatar1">
      </v-col>
      <v-col cols="9">
        <span class="text-caption">{{ fullName(staff) }}</span>
      </v-col>
    </v-row>
    <AddNew @add-new="doSom" />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import SpecnoOfficeCard from "@/components/SpecnoOfficeCard";
import AddNew from '@/components/AddNew';

import OfficeDataService from "@/services/OfficeDataService";
export default {
  components: { PageTitle, SpecnoOfficeCard, AddNew },
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
    fullName({firstname, lastname}) {
        return `${firstname} ${lastname}`;
    }
  },
};
</script>

<style>
</style>