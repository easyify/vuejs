<template>
    <div class="home_wrapper">
        home
        <hello></hello>
    </div>
</template>

<script type="text/ecmascript-6" charset="utf-8">
import hello from "../../components/Hello.vue";

export default {
  name: "record-add",

  components: {
    hello: hello
  }
};
</script>

<style lang="scss" rel="stylesheet/sass" scoped>
// @import "../../assets/scss/reset.scss";
// @import "../../assets/css/iconfont.css";
</style>