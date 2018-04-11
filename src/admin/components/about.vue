<template lang="pug">
    .about-section
        app-title  Страница "Обо мне"
        .skill-tables
            skills-list(
                v-for='skillType in skillsTypes'
                :key='skillType'
                :skillType='skillType'
                :skills='skills'
            )
        .button(@click="showModal = true")
            app-button Сохранить
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
import appTitle from './title';

export default {
    components: {
        skillsList,
        appButton,
        modal,
        appTitle
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
        ...mapActions(['fetchSkills']),
        showModalki: function () {
            alert('eeeee')
        }
    },
    mounted() {
        //add preloader
        this.fetchSkills();
    }
}
</script>
<style lang="scss" scoped>
    
    .skill-tables {
        display: flex;
        // width: 75%;
        flex-wrap: wrap;
    }

    .button {
        width: fit-content;
    }
</style>
