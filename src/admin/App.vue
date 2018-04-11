<template lang="pug">
  .admin
    app-header
    tabs
    .content
      .section
        router-view
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
    // height: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
  }

  .content {
    flex: 1;
    background: url('~images/bg/bg.jpg') center center / cover no-repeat;
    color: $text-dark;
  }

  .section {
          height: 100%;
          background-color: rgba($bg-white, .75);
          padding: 40px 20px;
          @include tablets {
            padding: 30px 20px;
          }
      }
  html {
    @include phones {
      font-size: 13px;
    }
  }

</style>