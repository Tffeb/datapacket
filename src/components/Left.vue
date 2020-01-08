<template>
<div id="left">
  <section class="left">
    <div class="left-right"></div>
    <div class="left-content"> 
        <h6>数据统计</h6>
    <div class="left-list">
        <ul>
            <li class="list">
                <div class="list-title">
                    <i></i>
                    <span>技术交易规模排名</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to="/Center"><li class="active">各省交易额排名</li></router-link>
                    <router-link to="/HuBei"><li>湖北省内各市排名</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-ios"></i>
                    <span>技术交易规模</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to="/ChengJiao"><li>成交金额分析</li></router-link>
                    <router-link to="/HeTong"><li>合同数量分析</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-danwei"></i>
                    <span>技术合同类别分析</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to="/JineZhanbi"><li>各类别成交金额占比</li></router-link>
                    <router-link to="/GeLeiBie"><li>各类别成交金额</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-guanli"></i>
                    <span>知识产权构成</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to="/ZhiShicq"><li>知识产权类别构成</li></router-link>
                    <router-link to="/ZhuanLilb"><li>专利类别构成</li></router-link>
                    <router-link to="/LeiXinggc"><li>（涉知）类型构成</li></router-link>
                    <router-link to="/LingYucj"><li>（涉知）领域成交额</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-android"></i>
                    <span>技术要素领域分析</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to=""><li>各技术领域成交额占比</li></router-link>
                    <router-link to=""><li>各领域成交额</li></router-link> 
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-bianji"></i>
                    <span>科技计划项目构成</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to=""><li>科技计划项目构成</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-project"></i>
                    <span>技术交易主体构成</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to=""><li>技术交易主体构成</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i class="iconfont icon-qianbao"></i>
                    <span>技术交易区域分布</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to=""><li>买方视角的区域成交分布</li></router-link>
                    <router-link to=""><li>卖方视角的区域成交分布</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i  class="iconfont icon-Research"></i>
                    <span>技术交易流向分布</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to=""><li>湖北省-其他省</li></router-link>
                    <router-link to=""><li>湖北省-国外</li></router-link>
                </ul>
            </li>
            <li class="list">
                <div class="list-title">
                    <i  class="iconfont icon-Research"></i>
                    <span>高等院校突出领域</span>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <ul>
                    <router-link to=""><li>领域成交额情况</li></router-link>
                    <router-link to=""><li>成交额占比情况</li></router-link>
                </ul>
            </li>
        </ul>
    </div>
    </div>
  </section>
  </div>
</template>

<script>
    $(function() {
        $('.list').click(function() {
            if($('.list ul').eq($(this).index()).css("display") == 'block') {
                $('.list ul').eq($(this).index()).hide(300)
                $('.icon-xiajiantou').eq($(this).index()).animate({},10,function() {
                    $(this).css({'transform':'rotate(0)',"transition":".3s"})
                })
            }
            else {
                $('.icon-xiajiantou').eq($(this).index()).parent().parent()
                .siblings().children().children('.icon-xiajiantou')
                .animate({},10,function() {
                    $(this).css({'transform':'rotate(0)',"transition":".3s"})
                })
                $('.icon-xiajiantou').eq($(this).index()).animate({},10,function() {
                    $(this).css({'transform':'rotate(180deg)',"transition":".3s"})
                })
                $('.list ul').eq($(this).index()).show(300).parent().siblings().children('ul').hide(300);
            }
        })
         $('.list ul li').click(function(event) {
            $(this).parent().parent('.list ul').hide(300).show(300)
             $(this).addClass('active')
             $(this).parent().siblings().children('li').removeClass('active')
             $(this).parent().parent().parent().siblings().children('ul')
             .children().children('li').removeClass('active')
            event.stopPropagation()
         })
    })
import pubsub from 'pubsub-js';
export default {
    mounted () {
        //订阅消息
        pubsub.subscribe('hiddenLeft',(msg,index) => {
            document.querySelector('.left').style.display = index;
        })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#left
    position absolute
    width 17%
    left 2%
    z-index 10
    .left
        width 100%
        position relative
        .left-right
            width 75%
            height  574px
            z-index 0
            position absolute 
            background-image url(../../static/img/right_pattern@2x.png)
            background-size 100% 100%
            left 38%
            top -20px
        .left-content
            position relative
            width 100%
            border 1px solid #00edff
            h6
                color #00edff
                text-align center
            .left-list
                height 505px
                font-size 0.8em
                overflow auto
                border-bottom: 2px solid #00edff;
                border-top: 2px solid #00edff;
                border-image: linear-gradient(-90deg,rgba(0,237,255,0),rgba(0,237,255,0) 10%,#00edff 50%,rgba(0,237,255,0)) 2% stretch;
                ul
                    margin-bottom 0
                    .list
                        cursor pointer
                        background-color #001529
                        .list-title
                            height 56px
                            line-height 56px
                            margin-left 10%
                            i
                                ~ i
                                    float right
                                    margin-right 20px
                                    font-size 10px
                            span 
                                color #fff
                        ul
                            display none
                            li
                                color #fff
                                height 56px
                                line-height 56px
                                padding-left 15%
                                &.active
                                    background-color #3967b2 !important
                                    color rgb(255, 208, 75)
</style>