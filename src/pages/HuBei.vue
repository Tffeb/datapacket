<template>
  <div id="center">
      <div class="title">
            <h4>2013-2018年度{{titleHtml}}内各市技术交易额排名</h4>
      </div>
      <div id="center-body">
          <h1>hahhahh</h1>        
      </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    data () {
        return{
            titleHtml:'湖北省'
        }
    },
    mounted () {
        //订阅消息
        var _this = this
        pubsub.subscribe('titleChange',(msg,index) => {
            _this.titleHtml = index;
        })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
   #center
        width 100%
        height 100%
        position relative
        .title
            text-align center
            line-height 40px
            border-bottom: 2px solid #00edff;
            border-image: linear-gradient(-90deg,rgba(0,237,255,0),rgba(0,237,255,0) 10%,#00edff 50%,rgba(0,237,255,0)) 2% stretch;
            h4 
                color #00edff
        #center-body
            width 100%
            height 630px
            border-left 1px solid #00edff
            border-right 1px solid #00edff
            position relative
            h1
                position absolute
                top 50%
                left 50%
                transform translate(-50%,-50%)
                color #ffffff
                font-size 50px   
</style>
