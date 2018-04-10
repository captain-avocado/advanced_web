<template lang="pug">
    .button
        slot Кнопка
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    .button {
        padding: 10px;
        background-color: $bg-green;
        width: fit-content;
        border-radius: 4px;
        color: $white;
        cursor: pointer;
        &:hover {
            background-color: $bg-green-dark;
        }
    }

</style>


