<template>
<div id="right">
  <section class="right">
    <div class="right-left"></div>
    <div class="right-content">
      <h6>省市地区</h6>
    <div class="right-list">
        <ul>
            <li class="on">湖北省</li>
            <li>武汉市</li>
            <li>仙桃市</li>
            <li>十堰市</li>
            <li>咸宁市</li>
            <li>天门市</li>
            <li>孝感市</li>
            <li>宜昌市</li>
            <li>恩施土家族苗族自治区</li> 
            <li>潜江市</li>
            <li>神农架林区</li>
            <li>荆州市</li>
            <li>荆门市</li>
            <li>襄阳市</li>
            <li>鄂州市</li>
            <li>随州市</li>
            <li>黄冈市</li>
            <li>黄石市</li>  
        </ul>
    </div>
    </div>
  </section>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  data () {
    return{
      msghtml:''
    }
  },
    mounted () {
      //订阅消息
        pubsub.subscribe('hiddenRight',(msg,index) => {
            document.querySelector('.right').style.display = index;
        })
        this.clickChange()
    },
    methods:{
      //点击切换标题
      clickChange() {
        var _this = this
        $('.right-list li').click(function() {
          $(this).siblings().removeClass('on')
          $(this).addClass('on')
          _this.msghtml = $(this).html()
          pubsub.publish('titleChange',_this.msghtml)
        })
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#right
  position absolute
  width 16%
  right 3%
  z-index 10
  .right
        width 100%
        position relative
        .right-left
            width 75%
            height  574px
            z-index 0
            position absolute 
            background-image url(../../static/img/left_pattern@2x.png)
            background-size 100% 100%
            left -14%
            top -20px
        .right-content
            position relative
            width 100%
            border 1px solid #00edff
            h6
                color #00edff
                text-align center
            .right-list
                border-bottom: 2px solid #00edff;
                border-top: 2px solid #00edff;
                border-image: linear-gradient(-90deg,rgba(0,237,255,0),rgba(0,237,255,0) 10%,#00edff 50%,rgba(0,237,255,0)) 2% stretch;
                height 505px
                font-size 0.8em
                overflow auto
                ul
                  background-color #001529
                  margin-bottom 0
                  li
                    cursor pointer
                    border-bottom 1px solid rgba(0,224,255,.45)
                    color #fff
                    height 56px
                    line-height 56px
                    padding-left 15%
                    &.on
                      color rgb(255, 208, 75)
                      background-color #3967B2
</style>