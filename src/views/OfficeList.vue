<template>
  <div class="offices-wrapper">
    <p class="headline">All Offices</p>
    <specno-card-wrapper color="#333666">
      <template>
        <Office />
      </template>
    </specno-card-wrapper>
  </div>
</template>

<script>
import SpecnoCardWrapper from "@/components/SpecnoCardWrapper";
import Office from "@/components/Office";
export default {
  components: {
    SpecnoCardWrapper,
    Office,
  },
};
</script>
