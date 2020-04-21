<template>
  <div class="info-box" :class="{'info-box--correct': correct}">
    <ol>
      <li>Click generate</li>
      <li>Interface will
        <span v-if="correct"><b>not</b></span>
        freeze
        <span v-if="!correct">for about 2 seconds</span>
      </li>
      <li>Loader will
        <span v-if="!correct"><b>not</b></span>
        appear<span v-if="!correct">, even though it is fired</span>
      </li>
      <li>
        <label :for="`checkbox-test${correct ? '--correct' : ''}`" class="clickable">
          You will <span v-if="!correct"><b>not</b></span> be able to check this checkbox
          <input
            :id="`checkbox-test${correct ? '--correct' : ''}`"
            name="checkbox-test"
            type="checkbox"
          >
        </label>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "InfoBox",
    props: {
      correct: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style>
  .info-box {
    margin: 2em auto;
    padding: 0.5em 1em 0.5em 0;
    background-color: #fafad280;
    color: #8e7800;
    border: 1px solid #8e7800;
    letter-spacing: 0.4px;
    font-size: 1.15em;
    line-height: 1.5em;
  }

  .info-box--correct {
    background-color: #20b2aa08;
    border-color: lightseagreen;
    color: lightseagreen;
  }

  .clickable {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
