<template lang="pug">
    .blog-section
        app-title Страница "Блог"
        .subtitle Добавить запись
        .inputs(:class="{error: validation.hasError('validateDate'), emptyError: validation.hasError('validateText')}")
            input.input.name(type="text" placeholder="Название" v-model="validateText")
            <div class="message">{{ validation.firstError('validateText') }}</div>
            input.input.date(type="text" placeholder="Дата" v-model="validateDate")
            <div class="message">{{ validation.firstError('validateDate') }}</div>
            textarea.input.textarea
        .button(@click="showModal = true")
            app-button Сохранить
        modal(
            v-if="showModal"
            @close="showModal = false"
        ) Сообщение отправлено
</template>
<script>
import { Validator } from 'simple-vue-validator';
import appTitle from './title';
import appButton from './button';
import modal from './modal';

export default {
    components: {
        appTitle,
        appButton,
        modal
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        validateText: value => {
            return Validator.value(value).minLength(5, 'Заполните поле')
        },
        validateDate: value => {
            const reg = /^(0?[1-9]|[12][0-9]|3[01])[\.](0?[1-9]|1[012])[\.]\d{4}$/;
            return Validator.value(value).regex(reg, 'Поле заполнено некорректно');
        }
    },
    data() {
        return {
            showModal: false,
            validateDate: "",
            validateText: ""
        }
    },
    // methods: {
    //     addPaper() {
    //         const paper = {
    //             name: 
    //         }
    //     }
    // }
}
</script>
<style lang="scss" scoped>

    .subtitle {
        font-weight: 700;
        margin-bottom: 2%;
    }

    .inputs {
        width: 50%;
    }

    .name, .date {
        width: 70%;
    }

    .textarea {
        width: 100%;
        resize: none;
        height: 200px;
    }

    .input {
        padding: 10px;
        border-radius: 3px;
        font-size: 16px;
        color: $text-dark;
        border: 0;
        outline: none;
        margin-bottom: 2%;
    }

    .message {
        margin-bottom: 2%;
    }

    .button {
        width: fit-content;
    }

</style>


