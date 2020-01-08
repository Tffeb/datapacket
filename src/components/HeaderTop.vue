<template>
    <div class="container-fluid">
        <div class="row">
            <div class="btn" title="隐藏菜单" @click="hiddenaside">
                <div class="left-up"></div>
                <div class="right-up"></div>
                <div class="left-down"></div>
                <div class="right-down"></div>
                <span>菜单隐藏</span>
            </div>
            <div class="header-top">
                <h1>数据可视化展示平台</h1>        
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    data() {
        return{
            msg:'block'
        }
    },
    methods:{
        hiddenaside () {
            var aSpan = document.querySelector('.btn span');
            if(this.msg == 'block') {
                this.msg = 'none';
                aSpan.innerHTML = '显示菜单';
            }
            else {
                this.msg = 'block'
                aSpan.innerHTML = '隐藏菜单';
            }
            var _this = this;
            //发布消息
            pubsub.publish('hiddenLeft',_this.msg);
            pubsub.publish('hiddenRight',_this.msg);
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.row
    position relative
    .btn
        background-color #152536
        width 8%
        cursor pointer
        padding 0
        border 1px solid #00edff
        text-align center
        position relative
        margin 4%  5%
        .left-up
            width 12px
            height 12px
            background-image url(../../static/img/btn.png)
            background-size cover
            position absolute
            left -3px
            top -3px
        .right-up
            width 12px
            height 12px
            background-image url(../../static/img/btn.png)
            background-size cover
            position absolute
            right -3px
            top -3px
            transform rotate(90deg)
        .left-down
            width 12px
            height 12px
            background-image url(../../static/img/btn.png)
            background-size cover
            position absolute
            left -3px
            bottom -3px
            transform rotate(-90deg)
        .right-down
            width 12px
            height 12px
            background-image url(../../static/img/btn.png)
            background-size cover
            position absolute
            right -3px
            bottom -3px
            transform rotate(180deg)
        span
            line-height 40px
            color #00edff
    .header-top
        position absolute
        margin-left 50%
        transform translateX(-50%)
        width 50%
        height  87px
        background-image url(../../static/img/title_bg@2x.png)
        background-size 100% 100%
        text-align center
        h1 
            line-height 87px
            color #00edff
</style>