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
      <p class="text-specno-title font-weight-regular">
        {{ office.staffs.length }}
      </p>
    </div>
    <v-row align="center" v-for="staff in office.staffs" :key="staff.id">
      <v-col cols="3">
        <v-avatar size="52">
          <img :src="require(`@/assets/avatars/${staff.avatar}`)" />
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <span class="text-body-1">{{ fullName(staff) }}</span>
      </v-col>
      <v-icon @click="editMember(staff)">mdi-dots-vertical</v-icon>
    </v-row>
    <AddNew
      @add-new="
        staff = {};
        namesDialog = true;
      "
    />
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
                    @click="staff.avatar = avatar.path"
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
            v-if="!staff.id"
            block
            title="Add Staff Member"
            @button-clicked="addMember()"
          />
          <SpecnoButton
            v-else
            block
            title="Update Staff Member"
            @button-clicked="updateMember()"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog max-width="500px" v-model="staffOptionsDialog">
      <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
          <SpecnoButton
            block
            title="Edit Staff Member"
            @button-clicked="
              namesDialog = true;
              staffOptionsDialog = false;
            "
          />
          <SpecnoButton
            block
            text
            title="Delete Staff Member"
            @button-clicked="
              staffOptionsDialog = false;
              deleteDialog = true;
            "
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog max-width="500px" v-model="deleteDialog">
      <v-card>
        <v-card-title class="text-h6 font-weight-bold">
          <v-row>
            <v-col cols="2">
              <v-icon
                @click="
                  staffOptionsDialog = true;
                  deleteDialog = false;
                "
                class="pr-3"
                >mdi-arrow-left</v-icon
              >
            </v-col>
            <v-col> Are You Sure You Want To Delete Staff Member? </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <SpecnoButton
            title="Delete Staff Member"
            color="error"
            @button-clicked="deleteMember()"
          />
          <SpecnoButton
            text
            title="Keep Staff Member"
            @button-clicked="deleteDialog = false"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import SpecnoOfficeCard from "@/components/SpecnoOfficeCard";
import AddNew from "@/components/AddNew";
import CardTitle from "@/components/CardTitle";
import SpecnoButton from "@/components/SpecnoButton";

import OfficeDataService from "@/services/OfficeDataService";
import StaffDataService from "@/services/StaffDataService";
export default {
  components: {
    PageTitle,
    SpecnoOfficeCard,
    AddNew,
    CardTitle,
    SpecnoButton,
  },
  computed: {
    title() {
      const type = this.staff.id ? "Edit" : "New";
      return `${type} Staff Member`;
    },
  },
  data() {
    return {
      avatars: {},
      office: {
        staffs: [],
      },
      staff: {},
      namesDialog: false,
      avatarDialog: false,
      staffOptionsDialog: false,
      deleteDialog: false,
    };
  },
  mounted() {
    this.getOffice();
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
    getOffice() {
      const id = this.$route.params.id;
      OfficeDataService.get(id)
        .then((response) => {
          this.office = response.data;
          this.staff.officeId = this.office.id;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    addMember() {
      StaffDataService.create()
        .then(() => {
          this.avatarDialog = false;
          this.getOffice();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    editMember({ id }) {
      StaffDataService.get(id)
        .then((response) => {
          this.staff = response.data;
          this.staffOptionsDialog = true;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    updateMember() {
      StaffDataService.update(this.staff.id, this.staff)
        .then(() => {
          this.avatarDialog = false;
          this.getOffice();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    deleteMember() {
      StaffDataService.delete(this.staff.id)
        .then(() => {
          this.deleteDialog = false;
          this.getOffice();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    fullName({ firstname, lastname }) {
      return `${firstname} ${lastname}`;
    },
  },
};
</script>

<style>
.active {
  border: 4px solid #475569;
}
</style>
