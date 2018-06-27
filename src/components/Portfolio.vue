<template>
	<Section class="portfolio_section">

		<div class="section_header">{{$t("portfolio.title")}}</div>
		<div class="section_content">

			<div class="portfolio_item">
				<div class="portfolio_slide">
					<div class="screen">
						<img class="image" src="./../assets/bilesta.png" alt="">
					</div>
				</div>
				<div class="item_overview">
					<div class="overview_title">
						{{$t("portfolio.item1.title")}}
					</div>
					<div class="overview_content">
						{{$t("portfolio.item1.content")}}
					</div>
				</div>
			</div>

			 <!-- <div class="browser_frame">
				 <Browser/>
				 <div class="site_srap">
					 <img class="site_screen" src="./../assets/bilesta.png" alt="">
				 </div>
			 </div> -->

		</div>

	</Section>
</template>

<script lang="ts">
import Section from "./Section.vue";
import Browser from "./icons/browser.svg";

export default {
  components: {
    Section,
    Browser
  }
};
</script>

<style lang="scss">
.portfolio_section {
  // background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  height: auto;
  align-items: center;
}
@media only screen and (max-width: 680px) {
  .portfolio_slide {
    width: 320px;
    min-width: 320px;
    height: 183px;
  }
}

.section_header {
  font-size: 1.4em;
  margin: 20px 0;
  text-transform: uppercase;
}
.section_content {
  width: 100%;
}
.portfolio_item {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  .item_overview {
    .overview_title {
      font-size: 1.5em;
      padding-bottom: 10px;
    }
    .overview_title {
    }
  }
}

.portfolio_slide {
  background: url("./../assets/laptop.png") no-repeat;
  background-size: 100%;
  width: 520px;
  min-width: 520px;
  height: 300px;
  position: relative;
}
.screen {
  background-size: 100%;
  height: auto;
  // height: 241px;
  // width: 379px;
  // position: absolute;
  // top: 74px;
  // left: 111px;
  // overflow-y: scroll;
  height: 80.3%;
  width: 74.4%;
  position: absolute;
  top: 8%;
  left: 13%;
  overflow-y: scroll;
}
.image {
  min-width: 100%;
}
</style>
