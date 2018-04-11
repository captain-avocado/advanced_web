<template lang="pug">
    .work-section
        app-title Страница "Мои работы"
        .subtitle Добавить запись
        //- .inputs
        //-     input.blog-input.name(type="text" placeholder="Название") 
        //-     input.blog-input.date(type="text" placeholder="Дата")
        //-     textarea.blog-input.textarea
        .button(@click="showModal = true")
            app-button Сохранить
        modal(
            v-if="showModal"
            @close="showModal = false"
        ) Сообщение отправлено
</template>
<script>
import appTitle from './title';
import appButton from './button';
import modal from './modal';

export default {
    components: {
        appTitle,
        appButton,
        modal
    },
    data() {
        return {
            showModal: false
        }
    }
}
</script>
<style lang="scss" scoped>

    .subtitle {
        font-weight: 700;
    }

    .button {
        width: fit-content;
    }
    
</style>
