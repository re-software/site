<template>
	<div class="first_section section">
		<Eye width="300" height="300"/>
		<div class="main_title">{{$t("firstSection.title")}}</div> 
		<div class="main_content">{{$t("firstSection.content")}}</div> 
	</div>
</template>

<script lang="ts">
import Eye from "./icons/Eye.vue";
export default {
  components: {
    Eye
  }
};
</script>

<style lang="scss">
.first_section {
	height: calc(100vh - 200px);
	min-height: 400px;

	align-items: center;
	justify-content: flex-start;
	text-align: center;
	.main_title{
		font-size: 1.4em;
		padding: 10px 0;
	}
	.main_content{
		font-size: 1.1em;
	}
}
</style>
