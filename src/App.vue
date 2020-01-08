<template>
  <div id="app">
    <headerTop/>
    <div class="container-fluid">
      <div class="row">
        <Left/>
         <Content/>
        <Right/>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from './components/HeaderTop'
import Left from './components/Left'
import Content from './components/Content'
import Right from './components/Right'
export default {
  name: 'App',
  components:{
    headerTop,
    Left,
    Content,
    Right
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  background-image url(../static/img/tech_blue.jpg)
  background-size cover
  background-attachment fixed
</style>
