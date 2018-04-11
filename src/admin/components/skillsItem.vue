<template lang="pug">
  tr.skill-row
    td.skill-name {{skill.name}}
    td
        .skill-num
            input.percents-area(type='text' @click='toggleRemoveButton()' :value='skill.percents')
            .precent %
    td
        .button(v-show='isOpen' @click='removeExistedSkill(skill.id)')
            app-button Удалить
</template>
<script>
import { mapMutations } from 'vuex';
import appButton from './button';
export default {
    components: {
        appButton
    },
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
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }

    .skill-name {
        margin-right: auto;
    }

    .percents-area {
        width: 45px;
        text-align: center;
        padding: 10px;
        font-size: 16px;
        border-radius: 2px;
        color: $text-dark;
    }
    
    .skill-num {
        display: flex;
        align-items: center;
    }

    .precent {
        margin: 0 10px 0 5px;
    }

</style>


