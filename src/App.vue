<template>
  <div>
    导航栏 |
    <router-link to="/">jessica1</router-link>|
    <router-link to="/xxx">jessica2</router-link>
  </div>

  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Jessica from "./components/Jessica.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Jessica,
  },
};
</script>
