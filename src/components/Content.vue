<template>
  <div class="center">
      <div class="borderup"></div>
      <div class="borderdown"></div>
      <div class="center-left"></div>
      <div class="center-right"></div>
      <div class="center-bottoml"></div>
      <div class="center-bottomr"></div>
      <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .center
        width 60%
        height 700px
        background-color: rgba(13,28,43,.3)
        border-radius 40px
        position relative 
        margin-top -3%
        left 50%
        transform translateX(-50%)
        .borderup
            position absolute 
            width 92%
            top 0
            left 50%
            transform translateX(-50%)
            border-top 1px solid #00edff
        .borderdown
            position absolute 
            width 92%
            bottom 0
            left 50%
            transform translateX(-50%)
            border-bottom 1px solid #00edff
        .center-left
        .center-right
        .center-bottoml
        .center-bottomr
            width 40px
            height 40px
            position absolute 
        .center-left
            background-image url(../../static/img/three.png)   
            background-size 100% 100%
            left 0
            top 0
        .center-right
            background-image url(../../static/img/one.png)   
            background-size 100% 100%
            right 0
            top 0
        .center-bottoml
            background-image url(../../static/img/four.png)   
            background-size 100% 100%
            bottom 0
            left 0
        .center-bottomr
            background-image url(../../static/img/two.png)  
            background-size 100% 100%
            right 0
            bottom 0
        .title
            text-align center
            line-height 40px
            border-bottom: 2px solid #00edff;
            border-image: linear-gradient(-90deg,rgba(0,237,255,0),rgba(0,237,255,0) 10%,#00edff 50%,rgba(0,237,255,0)) 2% stretch;
            h4 
                color #00edff
        .center-body
            width 100%
            height 630px
            border-left 1px solid #00edff
            border-right 1px solid #00edff
            position relative
</style>