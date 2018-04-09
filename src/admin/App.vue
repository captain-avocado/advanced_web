<template lang="pug">
  .admin  
    app-header
    tabs
    .content
      about
</template>

<script>
import header from './components/header';
import tabs from './components/tabs';
import about from './components/about';

export default {
  components: {
    appHeader: header,
    tabs,
    about
  }
}
</script>

<style lang="scss">

  @import './src/styles/layout/global.scss';
  // @import './src/styles/layout/fonts.scss';

  .admin {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
  }

  .content {
    flex: 1;
    background: url('~images/bg/bg.jpg') center center / cover no-repeat;
  }


</style>