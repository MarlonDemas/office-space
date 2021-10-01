<template>
  <div class="dialogs">
    <v-dialog max-width="500px" v-model="namesDialog">
      <v-card>
        <CardTitle
          :title="title"
          icon="mdi-close-circle-outline"
          @icon-clicked="namesDialog = false"
        />
        <v-card-text>
          <v-text-field
            solo
            label="First Name"
            flat
            v-model="staff.firstname"
          ></v-text-field>
          <v-text-field
            solo
            label="Last Name"
            flat
            v-model="staff.lastname"
          ></v-text-field>
          <v-container>
            <v-col>
              <v-row justify="space-around">
                <div class="dialog__icons">
                  <v-icon class="mr-1" color="specno-blue" size="8"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                  <v-icon color="specno-blue" size="8"
                    >mdi-checkbox-blank-circle-outline</v-icon
                  >
                </div>
              </v-row>
            </v-col>
          </v-container>
          <v-container>
            <SpecnoButton
              block
              title="Next"
              @button-clicked="
                namesDialog = false;
                avatarDialog = true;
              "
            />
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog max-width="500px" v-model="avatarDialog">
      <v-card>
        <card-title
          :title="title"
          icon="mdi-close-circle-outline"
          @icon-clicked="avatarDialog = false"
        >
          <template>
            <v-icon
              @click="
                namesDialog = true;
                avatarDialog = false;
              "
              class="pr-3"
              >mdi-arrow-left</v-icon
            >
          </template>
        </card-title>
        <v-card-text>
          <p class="text-h5 font-weight-medium black--text">Avatar</p>
          <v-layout row wrap v-if="avatars" justify-space-around>
            <v-flex v-for="avatar in avatars" :key="avatar.id">
              <v-card tile flat class="d-flex justify-center">
                <v-card-text class="d-flex justify-center">
                  <v-avatar
                    size="48"
                    @click="
                      staff.avatar = avatar.path;
                      reloadModal();
                    "
                    :class="{ active: avatar.path === staff.avatar }"
                  >
                    <img :src="require(`@/assets/avatars/${avatar.path}`)" />
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-container>
            <v-col>
              <v-row justify="space-around">
                <div class="dialog__icons">
                  <v-icon color="specno-blue" size="8"
                    >mdi-checkbox-blank-circle-outline</v-icon
                  >
                  <v-icon class="mr-1" color="specno-blue" size="8"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
              </v-row>
            </v-col>
          </v-container>
          <SpecnoButton
            block
            :title="buttonTitle"
            @button-clicked="$emit(emitText, staff)"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import SpecnoButton from "@/components/SpecnoButton";
export default {
  props: {
    staff: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
    emitText: {
      type: String,
      required: true,
    },
  },
  components: { CardTitle, SpecnoButton },
  data() {
    return {
      avatars: {},
      namesDialog: false,
      avatarDialog: false,
    };
  },
  mounted() {
    let files = require.context("@/assets/avatars", true, /\.svg$/);
    files.keys().map((key) => {
      let id = key.split("/").pop().split(".")[0].toUpperCase();
      this.avatars[id] = {
        path: key.split("/").pop(),
        id: id,
      };
    });
  },
  methods: {
    reloadModal() {
      this.avatarDialog = false;
      this.avatarDialog = true;
    },
  },
};
</script>
