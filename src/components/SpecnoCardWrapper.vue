<template>
  <v-card class="mx-auto mb-3" :style="coloredBorder">
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coloredBorder: "",
    };
  },
  mounted() {
    this.coloredBorder = `padding-left: 10px; background: linear-gradient(to bottom, ${this.lightenDarkenColor(
      this.color,
      -20
    )} 0, ${this.lightenDarkenColor(this.color, -20)} 33%, ${this.color} 33%, ${
      this.color
    } 66%, ${this.lightenDarkenColor(
      this.color,
      20
    )} 66%, ${this.lightenDarkenColor(this.color, 20)} 100%)`;
  },
  methods: {
    lightenDarkenColor(col, amt) {
      let usePound = false;

      if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
      }

      let num = parseInt(col, 16);

      let r = (num >> 16) + amt;

      if (r > 255) r = 255;
      else if (r < 0) r = 0;

      let b = ((num >> 8) & 0x00ff) + amt;

      if (b > 255) b = 255;
      else if (b < 0) b = 0;

      let g = (num & 0x0000ff) + amt;

      if (g > 255) g = 255;
      else if (g < 0) g = 0;

      return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    },
  },
};
</script>