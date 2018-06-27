<template>
	<header class="navbar">
		<div class="logo_wrap">
			<div class="logo">
				<Eye width="50" height="50"/>
			</div>
		</div>
		<div class="brand_name">Red Eye</div>
		
		<div class="lang_change">
					<div class="lang_icon"
					  @click="setLocale('ru')"
					>
						<ruIcon/>
					</div>
					<div class="lang_icon"
					  @click="setLocale('en')"
					>
						<engIcon/>
					</div>
			</div>

	</header>
</template>

<script lang="ts">
import Vue from "vue";
import Eye from "./icons/Eye.vue";
import ruIcon from "./icons/ru.vue";
import engIcon from "./icons/eng.vue";
export default {
  components: {
    Eye,
    ruIcon,
    engIcon
  },
  methods: {
    setLocale(locale: string) {
      (Vue.config as any).lang = locale;
      // this.activeLocale = locale;
      // this.$cookie.set("locale", locale);
      (this as any).$i18n.locale = (Vue.config as any).lang;
    }
  }
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}
.logo_wrap {
  font-size: 100px;
  .logo {
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.brand_name {
	font-size: 1.5em;
	flex: 1;
}
.lang_change {
  align-self: flex-end;
  display: flex;
  width: 80px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
	padding: 0 10px;
	.lang_icon{
		cursor: pointer;
	}
}
</style>