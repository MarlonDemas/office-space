<template>
    <div class="new__office-wrapper">
        <PageTitle title="New Office" />
        <v-text-field solo label="Name" flat v-model="office.name"></v-text-field>
        <v-text-field solo label="Physical Address" flat v-model="office.address"></v-text-field>
        <v-text-field solo label="Email Address" flat v-model="office.email"></v-text-field>
        <v-text-field solo label="Phone Number" flat v-model="office.phone"></v-text-field>
        <v-text-field solo label="Maximum Capacity" flat v-model="office.capacity"></v-text-field>
        <p class="text-h5 font-weight-medium">
            Office Colour
        </p>
        <v-swatches v-model="office.color" inline background-color="#E5E5E5" shapes="circles" row-length="6" swatch-size="36" :spacing-size="18" :swatches="swatches" :wrapper-style="{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}"></v-swatches>
        <div class="text-center mt-5">
            <v-btn
                :loading="loading"
                rounded
                color="#489DDA"
                dark
                class="px-10"
                @click="addOffice()"
            >
                Add Office
            </v-btn>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';
import VSwatches from 'vue-swatches';

import OfficeDataService from "@/services/OfficeDataService";
import 'vue-swatches/dist/vue-swatches.css';
export default {
    components: {
        PageTitle,
        VSwatches
    },
    data() {
        return {
            office: {},
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
                "#8338EC"
            ],
            loading: false,
        }
    },
    methods: {
        addOffice() {
            this.loading = true;
            OfficeDataService.create(this.office)
            .then(() => {
                this.$router.push({name: "offices"});
            })
            .catch((e) => {
                console.error(e);
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>