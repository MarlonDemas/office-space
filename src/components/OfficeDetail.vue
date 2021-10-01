<template>
  <div>
    <v-card class="mx-auto">
      <CardTitle
        :title="office.name"
        icon="mdi-pencil-outline"
        @icon-clicked="
          $router.push({ name: 'edit-office', params: { id: office.id } })
        "
      />
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
            <v-btn small block plain @click.stop="show = !show">
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
import CardTitle from "./CardTitle";
import Info from "./Info";
export default {
  props: {
    office: {
      type: Object,
      required: true,
    },
  },
  components: {
    CardTitle,
    Info,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
