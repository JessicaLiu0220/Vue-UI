<template>
  <div>tabs</div>
  <Tab />
</template>

<script>
import Tab from "./Tab.vue";
export default {
  components: { Tab },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs中的标签必须为Tab");
      }
    });
  },
};
</script>