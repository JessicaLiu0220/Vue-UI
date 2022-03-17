<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/switch">switch</router-link></li>
          <li><router-link to="/doc/button">button</router-link></li>
          <li><router-link to="/doc/dialog">dialog</router-link></li>
          <li><router-link to="/doc/tabs">tabs</router-link></li>
        </ol>
      </aside>
      <main>主内容111</main>
    </div>
  </div>
</template>
<script>
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scope>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  padding-top: 70px;
  position: fixed;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>