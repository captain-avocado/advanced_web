<template lang="pug">

    .input-wrapper
        input.input.name(type="text" placeholder="placehold" v-model="inputValue")
        .block {{placehold}}
        .message(
            :class="{error: validation.hasError('inputValue')}"
        ) {{ validation.firstError('inputValue') }}
</template>
<script>

//FIXME
import { mapMutations } from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
    props: ['placehold'],
    data() {
        return {
            inputValue: ""
        }
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        inputValue: value => {
            return Validator.value(value).required('Заполните поле');
        },
    }
}
</script>
<style lang="scss" scoped>
    .input {
        padding: 10px;
        border-radius: 3px;
        font-size: 16px;
        color: $text-dark;
        border: 0;
        outline: none;
        margin-bottom: 2%;
    }
</style>


