<template>
  <div>
    <h1>OffMainThread</h1>
    <button class="btn" @click="generate">Generate {{loading}}</button>
    <generated-nums :nums="nums"/>
  </div>
</template>

<script>
  import GeneratedNums from "./GeneratedNums";

  const bgCalc = new Worker('../background-calc-worker.js', { type: 'module' });

  export default {
    name: 'OffMainThread',
    components: { GeneratedNums },
    data() {
      return {
        nums: [],
        loading: false,
      }
    },
    methods: {
      generate() {
        // this.$emit('loading', true)
        bgCalc.postMessage({ method: 'calculatePrimes', args: [400, 1000000000] });
        // this.$emit('loading', false)
      }
    },
    created() {
      bgCalc.onmessage = e => {
        console.log('%c OffMainThread.vue, , , , ', 'color: yellow; font-weight: 700',e);
        this[e.data.key] = e.data.value;
      };
    },
    watch: {
      loading(update) {
        this.$emit("loading", update)
      }
    }
  }
</script>
