<template lang="pug">
    .blog-section
        app-title Страница "Блог"
        .subtitle Добавить запись
        .inputs(:class="{dateError: validation.hasError('paperDate'), nameError: validation.hasError('paperName'), textError: validation.hasError('paperText')}")
            input.input.name(type="text" placeholder="Название" v-model="paperName")
            .message(
                :class="{error: validation.hasError('paperName')}"
            ) {{ validation.firstError('paperName') }}
            
            input.input.date(type="text" placeholder="Дата" v-model="paperDate")
            .message(
                :class="{error: validation.hasError('paperDate')}"
            ) {{ validation.firstError('paperDate') }}
            textarea.input.textarea(v-model="paperText")
            .message(
                :class="{error: validation.hasError('paperText')}"
            ) {{ validation.firstError('paperText') }}

        .button(@click="addNewPaper")
            app-button Сохранить
        modal(
            v-if="showModal"
            @close="showModal = false"
        ) Сообщение отправлено
</template>
<script>
import { mapMutations } from 'vuex';
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
        paperName: value => {
            return Validator.value(value).required('Заполните поле');
        },
        paperDate: value => {
            const reg = /^(0?[1-9]|[12][0-9]|3[01])[\.](0?[1-9]|1[012])[\.]\d{4}$/;
            return Validator.value(value).required('Заполните поле').regex(reg, 'Поле заполнено некорректно');
        },
        paperText: value => {
            return Validator.value(value).required('Заполните поле');
        },
    },
    data() {
        return {
            showModal: false,
            paperDate: "",
            paperName: "",
            paperText: ""
        }
    },
    methods: {
        ...mapMutations(['addPaper']),
        addNewPaper() {
            const newPaper = {
                name: this.paperName,
                date: this.paperDate,
                text: this.paperText
            };
            this.$validate().then(success => {
                if (!success) return;
                this.addPaper(newPaper);
                this.paperName = "";
                this.paperDate = "";
                this.paperText = "";
                this.validation.reset();
                this.showModal = true;
            })
        }
    }
}
</script>
<style lang="scss" scoped>

    .message {
        font-size: 14px;
        height: 16px;
        opacity: 0;
        transition: opacity 1s;
        &.error {
            opacity: 1;
        }
        
    }

    .subtitle {
        font-weight: 700;
        margin-bottom: 2%;
    }

    .inputs {
        width: 50%;
        @include tablets {
            width: 75%;
        }
    }

    .name, .date {
        width: 70%;
    }

    .textarea {
        width: 100%;
        resize: none;
        height: 150px;
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


