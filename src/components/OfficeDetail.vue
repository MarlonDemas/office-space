<template>
  <div>
    <v-card class="mx-auto">
      <v-card-title class="text-h5 font-weight-bolder">
        <span
        :class="{'clickable': clickable}"
          @click="clickable ?
            $router.push({ name: 'office-details', params: { id: office.id } }) : ''
          "
        >
          {{ office.name }}
        </span>
        <v-spacer></v-spacer>
        <v-icon
          @click="
            $router.push({ name: 'edit-office', params: { id: office.id } })
          "
          color="#0d4477"
          >mdi-pencil-outline</v-icon
        >
      </v-card-title>

      <info
        icon="mdi-account-group-outline"
        :text="`Staff Member${office.staffs.length > 1 ? 's' : ''} in Office`"
      >
        <template slot="additionalText">
          <span class="font-weight-bold">{{ office.staffs.length }}</span>
        </template>
        <template slot="belowInfo">
          <v-row>
            <v-col class="pb-0">
              <v-divider></v-divider>
            </v-col>
          </v-row>
        </template>
      </info>

      <v-card-actions>
        <v-col>
          <v-row justify="space-around">
            <v-btn small block plain @click="show = !show">
              More info
              <v-icon right>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <Info icon="mdi-phone-outline" :text="office.phone" />
          <Info icon="mdi-email-outline" :text="office.email" />
          <Info
            icon="mdi-account-group-outline"
            :text="`Office Capacity: ${office.capacity}`"
          />
          <Info icon="mdi-map-marker-outline" :text="office.address" />
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import Info from "./Info";
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
    Info,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style >
.clickable {
  cursor: pointer;
}
</style>