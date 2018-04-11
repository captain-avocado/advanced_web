<template lang="pug">
    .skills-list
        .skill-title {{ skillType }}
        table.skill-table
            skillsItem.skills-item(
                v-for='skill in skills'
                v-if='checkSkillType(skillType) === skill.type'
                :key="skill.id"
                :skill='skill'
            )
        skill-input(
            :type='checkSkillType(skillType)'
        )
</template>
<script>
import skillsItem from './skillsItem';
import skillInput from './skillInput';
export default {
    components: {
        skillsItem, 
        skillInput
    },
    props: {
        skillType: String,
        skills: Array
    },
    methods: {
        checkSkillType(skillGroupName) {
            switch (skillGroupName) {
                case 'frontend':
                    return 1;
                case 'workflow':
                    return 2;
                case 'backend':
                    return 3;
            }
        }
    }
}
</script>
<style lang="scss" scoped>

    .skills-list {
        // width: 30%;
        // min-width: 300px;
        margin-bottom: 5%;
        margin-right: 5%;
        flex: 1;
        @include tablets {
            margin-right: 0;
            margin-bottom: 8%;
        }
        // &:not(:nth-of-type(2n)) {
        //     margin-right: 15%;
        // }
    }

    .skill-title {
        margin-bottom: 20px;
        font-weight: 500;
    }

    .skill-table {
        padding-left: 20px;
        width: 100%;
    }



</style>


