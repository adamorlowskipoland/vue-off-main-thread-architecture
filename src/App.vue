<template>
  <div id="app">
    <info-box />
    <div class="wrap text--center">
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
  import InfoBox from "./components/InfoBox.vue"
  import MainThread from "./components/MainThread.vue"
  import OffMainThread from "./components/OffMainThread.vue"

  export default {
    name: "App",
    components: {
      InfoBox,
      MainThread,
      OffMainThread,
    },
    data() {
      return {
        loading: false,
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  .text--center {
    text-align: center;
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
