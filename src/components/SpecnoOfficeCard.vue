<template>
  <specno-card-wrapper :color="office.color">
    <template>
      <OfficeDetail :office="office" />
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
  },
  components: {
    SpecnoCardWrapper,
    OfficeDetail,
  },
};
</script>

<style>
</style>