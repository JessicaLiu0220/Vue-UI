<template>
  <div>
    <div class="topNavaddBan">
      <Topnav />
      <div class="banner">
        <h1>轱辘UI111</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/JessicaLiu0220">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-deng2"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.topNavaddBan {
  background: linear-gradient(
    137deg,
    rgba(132, 195, 255, 1) 0%,
    rgba(62, 133, 234, 1) 100%
  );
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;
    a {
      margin: 20px 18px;
      background: #fff;
      display: inline-block;
      border-radius: 8px;
      padding: 5px 12px;
    }
  }
}
</style>