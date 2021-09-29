<template>
  <specno-card-wrapper :color="office.color">
    <template>
      <OfficeDetail :office="office" :clickable="clickable" />
    </template>
  </specno-card-wrapper>
</template>

<script>
import SpecnoCardWrapper from "./SpecnoCardWrapper";
import OfficeDetail from "./OfficeDetail";
export default {
  props: {
    office: {
      type: Object,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SpecnoCardWrapper,
    OfficeDetail,
  },
};
</script>

<style>
</style>