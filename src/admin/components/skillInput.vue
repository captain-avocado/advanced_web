<template lang="pug">
    .input-wrap
        .skill-input
            input.precents-area(
                type="text"
                v-model='skillName'
                @keydown.enter="addNewSkill"
                :class="{error: validation.hasError('skillName')}"
            )
            .button(@click="addNewSkill")
                app-button Добавить
        .error-message {{ validation.firstError('skillName') }}
</template>
<script>
import { mapMutations } from 'vuex';
import { Validator } from 'simple-vue-validator';
import appButton from './button';

export default {
    components: {
        appButton
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        skillName: value => {
            return Validator.value(value).required('Название не может быть пустым');
        }
    },
    props: {
        type: Number
    },
    data() {
        return {
            skillName: ""
        }
    },
    methods: {
        ...mapMutations(['addSkill']),
        addNewSkill() {
            const newSkill = {
                id: Math.round(Math.random() * 100000),
                name: this.skillName,
                percents: 0,
                type: this.type
            };
            this.$validate().then(success => {
                if (!success) return;
                this.addSkill(newSkill);
                this.skillName = '';
                this.validation.reset();
            })
        }
    }
}
</script>
<style lang="scss" scoped>

    .skill-input {
        display: flex;
    }
    
    .error {
        border: 1px solid crimson;
        outline: none;
    }

    .precents-area {
        padding: 10px;
        font-size: 16px;
        border-radius: 2px;
        color: $text-dark;
        margin-right: auto;
    }
</style>


