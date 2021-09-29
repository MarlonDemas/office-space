<template>
  <form>
    <v-text-field solo label="Name" flat v-model="office.name"></v-text-field>
    <v-text-field
      solo
      label="Physical Address"
      flat
      v-model="office.address"
    ></v-text-field>
    <v-text-field
      solo
      label="Email Address"
      flat
      v-model="office.email"
    ></v-text-field>
    <v-text-field
      solo
      label="Phone Number"
      flat
      v-model="office.phone"
    ></v-text-field>
    <v-text-field
      solo
      label="Maximum Capacity"
      flat
      v-model="office.capacity"
    ></v-text-field>
    <p class="text-h5 font-weight-medium">Office Colour</p>
    <v-swatches
      v-model="office.color"
      inline
      background-color="#E5E5E5"
      shapes="circles"
      row-length="6"
      swatch-size="36"
      :spacing-size="18"
      :swatches="swatches"
      :wrapper-style="{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }"
    ></v-swatches>
    <div class="update__buttons" v-if="edit">
        <SubmitButton title="Update Office" @submitClicked="$emit('edit-office', office.id, office)" />
        <SubmitButton title="Delete Office" text @submitClicked="$emit('delete-office', office.id)" />
    </div>
    <SubmitButton v-else title="Add Office" @submitClicked="$emit('add-office', office)" />
  </form>
</template>

<script>
import VSwatches from "vue-swatches";

import "vue-swatches/dist/vue-swatches.css";
import SubmitButton from './SubmitButton';
export default {
  props: {
    office: {
      type: Object,
      required: true,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  components: { VSwatches, SubmitButton },
  data() {
    return {
      swatches: [
        "#FFBE0B",
        "#FF9B71",
        "#FB5607",
        "#97512C",
        "#DBBADD",
        "#FF006E",
        "#A9F0D1",
        "#00B402",
        "#489DDA",
        "#0072E8",
        "#8338EC",
      ],
    };
  },
};
</script>