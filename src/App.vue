<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="wrap">
      <main-thread @loading="loading = $event"/>
      <off-main-thread @loading="loading = $event"/>
    </div>
    <img
      v-if="loading"
      src="https://i0.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/clock-loading.gif"
      alt="Loading circle."
      class="loader"
    >
  </div>
</template>

<script>
  import MainThread from './components/MainThread.vue'
  import OffMainThread from './components/OffMainThread.vue'

  export default {
    name: 'App',
    components: {
      MainThread,
      OffMainThread,
    },
    data() {
      return {
        loading: false,
      }
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .wrap {
    display: flex;
    justify-content: space-evenly;
  }

  .loader {
    position: fixed;
    top: -25px;
    right: -25px;
  }
</style>
