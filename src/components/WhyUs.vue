<template>
	<Section class="why_us_section">

		<div class="section_header">{{$t("whyUs.title")}}</div>
		<div class="section_content">
			<div class="icons">
				<div class="icon">
					<div class="icon_img">
						<Calendar width=100 height="100" />
					</div>
					<div class="icon_text">{{$t("whyUs.calendar")}}</div>
				</div>
				<div class="icon">
					<div class="icon_img">
						<Money width=100 height="100" />
					</div>
					<div class="icon_text">{{$t("whyUs.money")}}</div>
				</div>
				<div class="icon">
					<div class="icon_img">
						<Analysis width=100 height="100" />
					</div>
					<div class="icon_text">{{$t("whyUs.ideas")}}</div>
				</div>
			</div> 
		</div>

	</Section>
</template>

<script lang="ts">
import Section from "./Section.vue";
import Money from "./icons/Money.vue";
import Calendar from "./icons/Calendar.vue";
import Analysis from "./icons/Analysis.vue";

export default {
  components: {
    Section,
    Money,
    Calendar,
    Analysis
  }
};
</script>

<style lang="scss">
.why_us_section {
  background: linear-gradient(0deg, #e6e9f0, #eef1f5);
  height: 400px;
  align-items: center;
}
@media only screen and (max-width: 680px) {
  .why_us_section {
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
.icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.icon {
  text-align: center;
  width: 220px;
}
.icon_img {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
}
</style>
