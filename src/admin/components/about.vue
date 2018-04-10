<template lang="pug">
    .about-section
        .title Страница "Обо мне"
        .skill-tables
            skills-list(
                v-for='skillType in skillsTypes'
                :key='skillType'
                :skillType='skillType'
                :skills='skills'
            )
        app-button(
            @click="showModal = true"
        ) Сохранить
        modal(
            v-if="showModal"
            @close="showModal = false"
        ) Сообщение отправлено
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import skillsList from './skillsList';
import appButton from './button';
import modal from './modal';

export default {
    components: {
        skillsList,
        appButton,
        modal
    },
    data() {
        return {
            skillsTypes: [
                'frontend',
                'backend',
                'workflow'
            ],
            showModal: false
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
    .title {
        font-size: 21px;
        font-weight: 500;
        margin-bottom: 40px;
    }
    .about-section {
        height: 100%;
        background-color: rgba($bg-white, .75);
        padding: 40px 20px;
    }
    .skill-tables {
        display: flex;
        width: 75%;
        flex-wrap: wrap;
    }
</style>
