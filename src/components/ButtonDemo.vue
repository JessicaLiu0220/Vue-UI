<template>
  <div>
    <div>Button示例</div>
    <h1>示例1</h1>
    <Button theme="button">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("button被点击了");
    };
    return { onClick };
  },
};
</script>