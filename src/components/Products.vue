<template>
	<Section class="products_section">

		<div class="section_header">{{$t("products.title")}}</div>
		<div class="section_content">
			<div class="cards">
				
				<div class="card">
					<div class="card_title">{{$t("products.landing.title")}}</div>
					<div class="card_img">
						<Landing/>
					</div>
					<div class="card_content">{{$t("products.landing.content")}}</div>
				</div>

				<div class="card">
					<div class="card_title">{{$t("products.card.title")}}</div>
					<div class="card_img">
						<Card />
					</div>
					<div class="card_content">{{$t("products.card.content")}}</div>
				</div>
				<div class="card">
					<div class="card_title">{{$t("products.shop.title")}}</div>
					<div class="card_img">
						<Shop />
					</div>
					<div class="card_content">{{$t("products.shop.content")}}</div>
				</div>
				<div class="card">
					<div class="card_title">{{$t("products.custom.title")}}</div>
					<div class="card_img">
						<Custom />
					</div>
					<div class="card_content">{{$t("products.custom.content")}}</div>
				</div>
				
			</div>
		</div>

	</Section>
</template>

<script lang="ts">
import Section from "./Section.vue";
import siteIcon from "./icons/Site.vue";
import Custom from "./icons/blogging.svg";
import Shop from "./icons/online-shop.svg";
import Card from "./icons/sitemap.svg";
import Landing from "./icons/domain-registration.svg";
export default {
  components: {
    Section,
    siteIcon,
		Custom,
		Shop,
		Card,
		Landing
  }
};
</script>

<style lang="scss">
.products_section {
  //   background: linear-gradient(0deg, #e6e9f0, #eef1f5);
  height: 400px;
  align-items: center;
}
@media only screen and (max-width: 680px) {
  .products_section {
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
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 250px;
  border: solid 1px #f2f2f2;
  border-radius: 2px;
  padding: 10px 0;
  text-align: center;
  margin: 0 5px 5px 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .card_title {
    font-size: 1.2em;
  }
  .card_img {
    height: 200px;
		padding-top: 10px;
    svg {
      width: 180px;
      height: 180px;
    }
  }
}
</style>
