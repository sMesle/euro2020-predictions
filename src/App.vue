<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";
export default {
  name: "app",
  components: {
    ...components
  }
};
</script>

<style>
</style>
