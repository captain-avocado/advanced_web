<template lang="pug">
    .title
        slot Заголовок
</template>
<style lang="scss" scoped>
    .title {
        font-size: 21px;
        font-weight: 500;
        margin-bottom: 40px;
        @include tablets {
            margin-bottom: 3%;
        }
    }
</style>

