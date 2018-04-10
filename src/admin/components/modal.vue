<template lang="pug">
    transition(name="modal")
        .modal-mask
            .modal-wrapper
                .modal-container
                    .modal-text
                        slot Текст модального окна
                    .modal-close(@click="$emit('close')")
                        app-button Закрыть
</template>
<script>
import appButton from './button';

export default {
    components: {
        appButton
    }
}
</script>
<style lang="scss" scoped>

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .5s ease;
    }

    .modal-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modal-container {

        transition: opacity .5s ease, transform .5s ease;

        padding: 15px 40px;
        width: fit-content;
        background-color: $white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    }

    .modal-text {
        margin-bottom: 15px;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>

