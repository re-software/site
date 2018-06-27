<template>
	<div class="main_wrapper">
		<Navbar/>
		<div class="content">
			<FirstSection/>
			<WhyUs/>
			<Products/>
			<Portfolio/>
			<Order/>
			<Footer/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import Navbar from "./Navbar.vue";
import Hello from "./Hello.vue";
import FirstSection from "./FirstSection.vue";
import WhyUs from "./WhyUs.vue";
import Products from "./Products.vue";
import Order from "./Order.vue";
import Portfolio from "./Portfolio.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Hello,
    Navbar,
    FirstSection,
    WhyUs,
    Products,
    Order,
    Portfolio,
    Footer
  }
};
</script>

<style lang="scss">
.content {
  padding-top: 70px;
}
</style>

