<template lang="pug">
    .about-section
        h1 Страница "Обо мне"
        skills-list(
            v-for='skillType in skillsTypes'
            :key='skillType'
            :skillType='skillType'
            :skills='skills'
        )
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import skillsList from './skillsList';

export default {
    components: {
        skillsList
    },
    data() {
        return {
            skillsTypes: [
                'frontend',
                'backend',
                'workflow'
            ]
        }
    },
    computed: {
        ...mapGetters(['skills'])
    },
    methods: {
        ...mapActions(['fetchSkills'])
    },
    mounted() {
        //add preloader
        this.fetchSkills();
    }
}
</script>
<style lang="scss" scoped>
    // .about-section {
    //     // height: 100%;
    //     // background-color: rgba($bg-white, .75);
    // }
</style>
