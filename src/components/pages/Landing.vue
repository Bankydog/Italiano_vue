<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { ref, onMounted } from "vue";
import Intro from "./subLandingPage/Intro.vue";
import HeroSec from "./subLandingPage/HeroSec.vue";
import ContactSec from "./subLandingPage/ContactSec.vue";
import MenuSec from "./subLandingPage/MenuSec.vue";

const restaurantName = ref("My Italian Restaurant");

useHead({
  title: restaurantName,
  meta: [
    {
      name: "description",
      content: `Welcome to ${restaurantName.value}!`,
    },
  ],
});

setTimeout(() => {
  restaurantName.value = "Luigi's Pizzeria";
}, 3000);

onMounted(() => {
  console.log("Initial restaurant name:", restaurantName.value);
  setTimeout(() => {
    console.log("Updated restaurant name:", restaurantName.value);
  }, 3500);
});
</script>

<template>
  <div>
    <h1 class="text-6xl">{{ restaurantName }}</h1>
    <p class="text-3xl">The current restaurant name is: {{ restaurantName }}</p>
    <Intro />
    <HeroSec />
    <ContactSec />
    <MenuSec />
  </div>
</template>
