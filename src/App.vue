<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";

const currentComponent = ref("ComponentA");

function toggleComponent() {
  if (currentComponent.value === "ComponentA") {
    currentComponent.value = "ComponentB";
  } else {
    currentComponent.value = "ComponentA";
  }
}
</script>
