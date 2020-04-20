<template>
  <div>
    <h1>Main Thread</h1>
    <button class="btn" @click="generate">Generate</button>
    <button class="btn" @click="nums = []">Reset</button>
    <generated-nums :nums="nums"/>
  </div>
</template>

<script>
  import GeneratedNums from "./GeneratedNums";
  import { calculatePrimes } from "../heavy-task";

  export default {
    name: "MainThread",
    components: { GeneratedNums },
    data() {
      return {
        nums: [],
      };
    },
    methods: {
      generate() {
        this.$emit("loading", true);
        this.nums = calculatePrimes(400, 1000000000);
        this.$emit("loading", false);
      },
    },
  };
</script>
