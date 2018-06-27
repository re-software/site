<template>
	<Section class="order_section">

		<div class="section_header">{{$t("order.title")}}</div>
		<div class="section_content">
			<div class="order">
				<!-- <div class="make_order_header">
					Whant to make order?
				</div> -->
				<div class="make_order_content">
					{{$t("order.content")}}
				</div>
				<div class="make_order_mail">
					<a :href="`mailto:${$t('order.email')}`">{{$t("order.email")}}</a>
				</div>
			</div>
		</div>

	</Section>
</template>

<script lang="ts">
import Section from "./Section.vue";
export default {
  components: {
    Section
  }
};
</script>

<style lang="scss">
.order_section {
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  height: 200px;
  align-items: center;
}
@media only screen and (max-width: 680px) {
  .order {
    height: auto;
  }
}

.section_header {
  font-size: 1.4em;
  margin: 20px 0;
  text-transform: uppercase;
}
.secton_content {
  width: 100%;
}
.order {
  text-align: center;
  padding-top: 20px;
}
// .make_order_header{
// 	font-size: 2em;
// }
.make_order_content {
  font-size: 1.2em;
}
.make_order_mail {
  font-size: 1.2em;
}
</style>
