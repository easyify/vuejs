<template>
  <div class="hello">
   <div class="wrapper">
        <img class="logo" src="../static/images/logo.png" width="100%" alt="">
        <div class="demo">
          <p>A compilation tools for FE, built with webpack4.x,</p>
          <p> compile faster and smart, make work easier.</p>
          <div class="links">
            <a href="https://github.com/webkong/easyify" class="github">Github</a>
            <a href="https://easyify.webkong.cn" class="document">Document</a>
            <a href="https://github.com/webkong/easyify-cli" class="cli">Easyify-cli</a>
            <a href="https://github.com/easyify?tab=repositories" class="templates">Easyify-templates</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" charset="utf-8">
export default {
  name: 'hello',
}
</script>

<style lang="scss" rel="stylesheet/sass" scoped="scoped">
@import '../assets/scss/reset.scss';
.wrapper{
    width: 100%;
    margin: 0 auto;
    text-align: center
}
.logo{
    width: 400px;   
}
.links{
    a {
        color: #18a380;
        padding: 5px;
    }
}
</style>
