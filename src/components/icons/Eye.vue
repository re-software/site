<template>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	x="0px"
	y="0px"
	viewBox="0 0 100 100"
	:width="width"
    :height="height"
	>
		<path d="M 5 50 Q 50 0 95 50 Q 50 100 5 50 Z" stroke="black" fill="none" v-bind:stroke-width="strokeWidth"/>
		<circle cx="50" cy="50" r="25" fill="none" stroke="black" v-bind:stroke-width="strokeWidth"/>
		<circle cx="50" cy="50" v-bind:r="25-strokeWidth" fill="red" stroke="red" v-bind:stroke-width="strokeWidth"/>
		<circle cx="50" cy="50" r="12" fill="black" stroke="red" v-bind:stroke-width="strokeWidth"/>
	</svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    strokeWidth: {
      type: [Number, String],
      default: 2
    }
  }
};
</script>