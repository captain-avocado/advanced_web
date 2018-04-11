<template lang="pug">
  .tabs
    ul.list
        li.item(v-for='tab in tabs')
            router-link.link(
                :to="tab.href"
            ) {{ tab.name }}
</template>
<script>
export default {
    data() {
        return {
            tabs: [
                {
                    name: 'Обо мне',
                    href:'/'
                },
                {
                    name: 'Блог',
                    href:'/blog'
                },
                {
                    name: 'Мои работы',
                    href:'/works'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .list {
        display: flex;
        background-color: $bg-beige;
    }

    .item {
        border-right: 2px solid $white;
    }

    .link {
        padding: 25px 70px;
        display: block;
        color: $text-dark;
        text-transform: uppercase;
        &:hover {
            background-color: $white;
            color: $bg-green;
        }
    }
</style>
