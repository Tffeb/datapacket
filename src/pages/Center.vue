<template>
  <div id="content">
      <div class="title">
            <h4>2015-2018年度各省技术交易额排名</h4>
      </div>
      <div class="center-body">
          <div class="leftyear">
          <div class="leftcontent">
              <div class="topjiantou">
              <i class="iconfont icon-xiajiantou"></i>
              </div>
              <div class="line"></div>
              <ul>
                  <li><span class="point"></span><span>2018</span></li>
                  <li><span class="point"></span><span>2017</span></li>
                  <li><span class="point"></span><span>2016</span></li>
                  <li><span class="point light"></span><span>2015</span></li>
              </ul>
              <i class="iconfont icon-xiajiantou"></i>
              <i class="iconfont icon-weibiaoti--"></i>
              <i class="iconfont icon-zanting"></i>
          </div>
          
          </div>
          <div class="center-content" >
                <div id="map"></div>
                <div class="liaoning city"><span>{{msg.liaoning}}</span><div class="pro"></div><span class="province liao">辽宁省</span></div>
                <div class="beijing city"><span>{{msg.beijing}}</span><div class="pro"></div><span class="province">北京市</span></div>
                <div class="tianjin city"><span>{{msg.tianjin}}</span><div class="pro"></div><span class="province">天津市</span></div>
                <div class="sichuan city"><span>{{msg.sichuan}}</span><div class="pro"></div><span class="province">四川省</span></div>
                <div class="shandong city"><span>{{msg.shandong}}</span><div class="pro"></div><span class="province">山东省</span></div>
                <div class="shanxi city"><span>{{msg.shanxi}}</span><div class="pro"></div><span class="province">陕西省</span></div>
                <div class="hubei city"><span>{{msg.hubei}}</span><div class="pro"></div><span class="province">湖北省</span></div>
                <div class="guangdong city"><span>{{msg.guangdong}}</span><div class="pro"></div><span class="province">广东省</span></div>
                <div class="shanghai city"><span>{{msg.shanghai}}</span><div class="pro"></div><span class="province">上海市</span></div>
                <div class="jiangsu city"><span>{{msg.jiangsu}}</span><div class="pro"></div><span class="province">江苏省</span></div>
                <div class="zejiang city"><span>{{msg.zejiang}}</span><div class="pro"></div><span class="province zhe">浙江省</span></div>
          </div>
      </div>
  </div>
</template>

<script>
import {jiaoyie} from '../api'
export default {
    data () {
        return{
            msg1:[],
            msg:[],
            loading:false
        }
    },
    created () {
        this.jiaoyi();
        
  },
  mounted () {
      this.move();
      this.ditu();
  },
  updated () {
      
      //数据的实时更新
      this.jiaoyie()
  },
  methods:{
      ditu() {
          //绘制地图   
    var R = Raphael("map", 580, 550);//将地图载入到id为map的div中，并设置区域为580x550px大小。
    paintMap(R);   
    var textAttr = {   
        "fill": "#fff",   
        "font-size": "12px",   
        "cursor": "pointer"   
    };       
    for (var state in china) {   
        //china[state]['text'].toFront().attrs.text
        china[state]['path'].color = Raphael.getColor(0);         
        (function (st, state) {   
            //获取当前图形的中心坐标   
            var xx = st.getBBox().x + (st.getBBox().width / 2);   
            var yy = st.getBBox().y + (st.getBBox().height / 2);   
               
            //写入文字   
            china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr);   
               
            st[0].onmouseover = function () {//鼠标滑向   
                st.animate({fill: "rgba(56,155,183,1)", stroke: "#86E2F3"}, 100);     
            };   
            st[0].onmouseout = function () {//鼠标离开  

                st.animate({fill:"rgba(56,155,183,0.5)", stroke: "#86E2F3"}, 100);   
                china[state]['text'].toFront();     
            };   
                       
         })(china[state]['path'], state);   
    }  
      },

      //从返回的promise对象中拿到mock数据
      jiaoyi() {
          var _this = this
          this.loading = true
          new jiaoyie().then(result => {
              _this.loading = false
        if(result.code === 0) {
             _this.msg1 = result.data;
             _this.msg = result.data;
        }
    })
  },

  move() {
      //年度效果
    var aSpan = document.querySelectorAll('.leftcontent>ul .point');
   var time = null;
   var that = this;
   function change(i) {
   // var _that = that;
     var k = i;
     clearInterval(time);
     time = setInterval(function() {
         for(var j = 0;j < 4;j ++) {
         aSpan[j].className = 'point';
        }
        if(k < 0) {
            k = 3;
        }
        //实时切换msg数据
         that.msg = that.msg1[k];
        aSpan[k].className = 'point light';
        k --;
    },1400)
    
   }
   change(3)
   //暂停功能
    var weibiaoti = document.querySelector('.icon-weibiaoti--');
    var zanting = document.querySelector('.icon-zanting');
    weibiaoti.onclick = function() {
        zanting.style.display = 'block';
        this.style.display = 'none'
        change(3)
    }
    zanting.onclick = function() {
        clearInterval(time)
        weibiaoti.style.display = 'block';
        this.style.display = 'none';
    }
    //年度点击功能
    for(var i = 0;i < 4;i++) {
         aSpan[i].index = i;
        aSpan[i].onclick = function() {
        for(var i = 0;i < 4;i ++) {
            aSpan[i].className = 'point';
        }
        weibiaoti.style.display = 'none';
        zanting.style.display = 'block';
        this.className = 'point light';
        clearInterval(time);
        change(this.index)
    }
    }
    
  },

  jiaoyie() {
       //交易额柱状图
     var aDiv = document.querySelectorAll('.city .pro');
     var oLiao = document.querySelector('.liao');
     var oZhe = document.querySelector('.zhe');
        for(var i = 0;i < aDiv.length;i ++) {  
            aDiv[i].index = i;
            aDiv[i].style.height = 0
            if(aDiv[0].parentNode.firstChild.innerHTML == "") {
                oLiao.innerHTML = ''
            }
            else {
                oLiao.innerHTML = '辽宁省'
            }
            if(aDiv[10].parentNode.firstChild.innerHTML == '') {
                oZhe.innerHTML = ''
            }
            else {
                oZhe.innerHTML = '浙江省'
            }
           // console.log(typeof(aDiv[10].parentNode.firstChild.innerHTML))
            aDiv[i].style.height = parseInt(aDiv[i].parentNode.firstChild.innerHTML)/30 + 'px';
    }
  }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #content
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
        .center-body
            width 100%
            height 630px
            border-left 1px solid #00edff
            border-right 1px solid #00edff
            position relative
            .leftyear
                position absolute
                top 70px
                left 30px
                .leftcontent
                    width 100px
                    height 450px
                    position relative
                    z-index 5
                    .line
                        height 400px
                        border-left 2px solid #304654
                        margin-left 11px
                    .topjiantou
                        transform rotateX(-180deg)
                    .icon-xiajiantou
                        font-size 1.5em
                        color #fff
                    .icon-weibiaoti--
                    .icon-zanting
                        position absolute 
                        font-size 1.5em
                        bottom -55px
                        left 1px
                        color #fff
                    .icon-weibiaoti--
                        display none
                    ul
                        position absolute 
                        top 25px
                        left 8px
                        li 
                            width 100px
                            height 132px
                            .point 
                                display inline-block 
                                width 10px
                                height 10px
                                background-color #fff 
                                margin-right 20px
                                border-radius 50%
                            .point:hover 
                                background-color #C23531
                            .light 
                                background-color #C23531
                                width 15px
                                height 15px
                                margin-left -3px
                                box-shadow 0 2px 20px #C23531
                            span
                                cursor pointer 
                                color #fff
                            span:hover
                                color #C23531
                                text-decoration none
            .center-content
                width 580px
                height  600px
                margin 0 auto
                padding-top 60px
                position relative
                .city
                    width 60px
                    position absolute
                    text-align center   
                .sichuan
                    left 254px
                    bottom 217px
                .shanxi
                    left 312px
                    bottom 290px
                .hubei
                    left 358px
                    bottom 235px
                .guangdong
                    left 380px
                    bottom 131px
                .zejiang
                    left 443px
                    bottom 223px
                .shanghai
                    left 454px
                    bottom 249px
                .jiangsu
                    left 426px
                    bottom 269px
                .shandong
                    left 414px
                    bottom 306px
                .tianjin
                    left 396px
                    bottom 345px
                .beijing
                    left 386px
                    bottom 354px
                .liaoning
                    left 439px
                    bottom 370px
                span
                    color #fff
                .pro
                    width 7px
                    background-color #F75D5D
                    margin 0 auto
                .province
                    font-size 0.5em
                         
                
</style>
