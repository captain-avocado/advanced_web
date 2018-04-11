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
        @include phones {
            flex-direction: column;
        }
    }

    .item {
        @include tablets {
            flex: 1;
        }
        border-right: 2px solid $white;
    }

    .link {
        padding: 25px 70px;
        @include phones {
            padding: 10px 20px;
        }
        display: block;
        width: 100%;
        height: 100%;
        color: $text-dark;
        text-transform: uppercase;
        text-align: center;
        &:hover {
            background-color: $white;
            color: $bg-green;
        }
    }
</style>
