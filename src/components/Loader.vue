<template>
    <v-progress-linear :active="requestsActive" indeterminate color="secondary"/>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'Loader',
        computed: {
            ...mapGetters(['requestsActive'])
        }
    }
</script>