<template>
  <div>
    <h3>Generated nums</h3>
    <ul>
      <li v-for="num in nums" :key="num">{{ num }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "GeneratedNums",
    props: {
      nums: {
        type: Array,
        default: () => ([]),
      },
    },
  };
</script>
