<template lang="pug">
    .work-section
        app-title Страница "Мои работы"
        .subtitle Добавить работу
        .inputs
            input.input.blog-input.name(
                type="text"
                placeholder="Название проекта"
                v-model="workName"
            )
            .message(
                :class="{error: validation.hasError('workName')}"
            ) {{ validation.firstError('workName') }}
            input.input.blog-input.date(
                type="text"
                placeholder="Технологии"
                v-model="workTech"
            )
            .message(
                :class="{error: validation.hasError('workTech')}"
            ) {{ validation.firstError('workTech') }}
            .input-img
                img.input-icon
                .input-img-text Загрузите картинку
        .button(@click="addNewWork")
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
        modal,
    },
    data() {
        return {
            showModal: false,
            workName: "",
            workTech: ""
        }
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        workName: value => {
            return Validator.value(value).required('Заполните поле');
        },
        workTech: value => {
            return Validator.value(value).required('Заполните поле');
        }
    },
    methods: {
        ...mapMutations(['addWork']),
        addNewWork() {
            const newWork = {
                name: this.workName,
                tech: this.workTech
            };
            this.$validate().then(success => {
                if (!success) return;
                console.log('cued1')
                this.addWork(newWork);
                this.workName = "";
                this.workTech = "";
                this.validation.reset();
                this.showModal = true;
                console.log(this.showModal)
            })
        }
    }
}
</script>
<style lang="scss" scoped>

    .inputs {
        display: flex;
        flex-direction: column;
        width: 25%;
        @include tablets {
            width: 50%;
        }
    }

    .input {
        padding: 10px;
        border-radius: 3px;
        font-size: 16px;
        color: $text-dark;
        border: 0;
        outline: none;
        margin-bottom: 2%;
        background-color: $white;
    }

    .message {
        font-size: 14px;
        height: 16px;
        opacity: 0;
        transition: opacity 1s;
        &.error {
            opacity: 1;
        }
        margin-bottom: 2%;
    }

    .input-img-text {
        color: $bg-green;
        margin-bottom: 2%;
    }

    .subtitle {
        font-weight: 700;
        margin-bottom: 2%;
        @include phones {
            margin-bottom: 5%;
        }
    }

    .button {
        width: fit-content;
    }

</style>
