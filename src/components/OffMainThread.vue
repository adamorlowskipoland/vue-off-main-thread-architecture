<template>
  <div>
    <h1>Outside Main Thread</h1>
    <button class="btn" @click="generate">Generate</button>
    <button class="btn" @click="nums = []">Reset</button>
    <generated-nums :nums="nums"/>
  </div>
</template>

<script>
  import GeneratedNums from "./GeneratedNums";

  const bgCalc = new Worker("../background-calc-worker.js", { type: "module" });

  export default {
    name: "OffMainThread",
    components: { GeneratedNums },
    data() {
      return {
        nums: [],
        error: null,
      };
    },
    methods: {
      generate() {
        if (this.error) {
          this.error = null;
        }
        bgCalc.postMessage({ method: "calculatePrimes", args: [400, 1000000000] });
      },
    },
    created() {
      bgCalc.onmessage = (event) => {
        if (event.data.key === "working") {
          this.$emit("loading", event.data.value)
        } else {
          this[event.data.key] = event.data.value;
        }
      };
    },
  };
</script>
