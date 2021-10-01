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
        newMember = true;
        $refs.addEditStaffDialog.namesDialog = true;
      "
    />
    <AddEditStaffDialog
      ref="addEditStaffDialog"
      :staff="newMember ? newStaffMember : staff"
      :title="newMember ? 'Add Staff Member' : 'Edit Staff Member'"
      :buttonTitle="newMember ? 'Update Staff Member' : 'Add Staff Member'"
      :emitText="newMember ? 'add-member' : 'update-member'"
      @add-member="addMember()"
      @update-member="updateMember()"
    />
    <v-dialog max-width="500px" v-model="staffOptionsDialog">
      <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
          <SpecnoButton
            block
            title="Edit Staff Member"
            @button-clicked="
              $refs.addEditStaffDialog.namesDialog = true;
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
import SpecnoButton from "@/components/SpecnoButton";

import OfficeDataService from "@/services/OfficeDataService";
import StaffDataService from "@/services/StaffDataService";
import AddEditStaffDialog from "../components/AddEditStaffDialog.vue";
export default {
  components: {
    PageTitle,
    SpecnoOfficeCard,
    AddNew,
    AddEditStaffDialog,
    SpecnoButton,
  },
  data() {
    return {
      office: {
        staffs: [],
      },
      staff: {},
      newStaffMember: {},
      newMember: false,
      staffOptionsDialog: false,
      deleteDialog: false,
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
    addMember() {
      this.newStaffMember.officeId = this.office.id;
      StaffDataService.create(this.newStaffMember)
        .then(() => {
          this.$refs.addEditStaffDialog.avatarDialog = false;
          this.newStaffMember = {};
          this.getOffice();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    editMember({ id }) {
      this.newMember = false;
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
          this.$refs.addEditStaffDialog.avatarDialog = false;
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
