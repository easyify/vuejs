<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script type="text/ecmascript-6" charset="utf-8">
{{#unless vuex}}
import {mapActions} from 'vuex';
{{/unless}}
{{#unless router}}
import Hello from './Hello';

{{/unless}}
export default {
  name: 'app'{{#router}},
  components: {
    Hello,
  }
  {{/router}}
};
</script>

<style lang="scss" rel="stylesheet/sass" scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
