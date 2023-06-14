import { createApp } from "vue";
import App from "./App.vue";
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";

const app = createApp(App);

app.component("ComponentA", ComponentA);
app.component("ComponentB", ComponentB);

app.mount("#app");
