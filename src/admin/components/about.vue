<template lang="pug">
    .about-section
        h1 Страница "Обо мне"
        skills-list(
            v-for='skillType in skillsTypes'
            :key='skillType'
            :skillType='skillType'
        )
</template>
<script>
import skillsList from './skillsList';

export default {
    components: {
        skillsList
    },
    data() {
        return {
            skills: [],
            skillsTypes: [
                'frontend',
                'backend',
                'workflow'
            ]
        }
    },
    // mounted() {
    //     fetch('')
    // }
}
</script>
<style lang="scss" scoped>
    .about-section {
        height: 100%;
        background-color: rgba($bg-white, .75);
    }
</style>
