import Vue from "vue";
import { i18n } from "./i18n/i18n";

import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import "./styles/index.scss";

import App from "./components/App.vue";
// export const createApp = (): IApp => {
//     sync(store, router);
//     const app: Vue = new Vue(
//       {
//         router,
//         store,
//         i18n,
//         render: (h) => h(App),
//       },
//     );

//     return { app, router, store, i18n };
//   };
// here
const v = new Vue({
  el: "#app",
  i18n,
  render: h => h(App),
  // template: `
  // <div>
  //     Name: <input v-model="name" type="text">
  //     <h1>Hello Component</h1>
  //     <hello-component :name="name" :initialEnthusiasm="5" />
  //     <h1>Hello Decorator Component</h1>
  //     <hello-decorator-component :name="name" :initialEnthusiasm="5" />
  //     </div>
  // `,
  // data: { name: "World" },
  components: {
    HelloComponent,
    HelloDecoratorComponent
  }
});
