<template lang="pug">
    .header
      h1.title Панель администрирования
      a(href="./index.html").return-back Вернуться на сайт
</template>
<style lang="scss" scoped>

  .header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    background: $bg-green;
    align-items: center;
    color: $white;
  }

  .title {
    font-size: 28px;
    font-weight: 500;
  }

  .return-back {
    display: block;
    color: $transp-white;
    text-decoration: underline;
    &:hover {
      color: $white;
    }
  }
  
</style>
