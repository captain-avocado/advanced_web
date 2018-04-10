<template lang="pug">
  tr.skill-row
    td.skill-name {{skill.name}}
    td
        input.percents-area(type='text' @focus='toggleRemoveButton()' :value='skill.percents')
    td
        button(type='button' v-show='isOpen' @click='removeExistedSkill(skill.id)') Удалить
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            isOpen: false
        }
    },
  props: {
      skill: Object
  },
  methods: {
      toggleRemoveButton() {
          this.isOpen = !this.isOpen;
      },
      ...mapMutations(['removeSkill']),
      removeExistedSkill(skillId) {
          this.removeSkill(skillId);
      }
  }
}
</script>
<style lang="scss" scoped>

    .skill-row {
        display: flex;
    }

    .skill-name {
        margin-right: auto;
    }

    .percents-area {
        padding: 8px;
        font-size: 16px;
        text-align: center;
        border-radius: 2px;
        width: 45px;
        color: $text-dark;
        // &:after {
        //     content: '%';
        //     display: block;

        // }
    }
    
</style>


