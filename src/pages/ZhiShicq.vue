<template>
  <div id="center">
      <div class="title">
            <h4>2013—2018年度<span>{{titleHtml}}</span>知识产权类别构成（项）</h4>
      </div>
      <div id="center-body">
         
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
    mounted() {
        this.zhishicq()

        //订阅消息
        var _this = this
        pubsub.subscribe('titleChange',(msg,index) => {
            _this.titleHtml = index;
        })
    },
    methods:{
        zhishicq() {
            var myChart = echarts.init(document.getElementById('center-body'));
           $.get('/ZhiShicq',function(data) {
                var datajson = JSON.parse(data);
                var index = 1;
                var year = null;
                if(datajson.code === 0) {
                    var result = datajson.data[0];
                    
                    setInterval(function() {
                        if(index >= 7) {
                            index = 1;
                        }
                 year = datajson.data[0].data[0][index];
                        
            var option = {
                title : {
                    text: year + '年只是产权类别构成',
                    x:'left',
                    left:20,
                    textStyle:{
                        color:'#fff',
                        fontSize:18
                    },
                },
                color:['#FFF380','#F2B449','#ED5565','#564A54','#A4145A','#F08B48','#068C6F'],
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}项 "
                },
                legend: {
                    //orient: 'vertical',
                    left: 280,
                    textStyle:{
                        color:'#fff',
                        fontSize:14
                    },
                    data: [result.data[1][0],result.data[2][0],result.data[3][0],result.data[4][0],result.data[5][0],result.data[6][0],result.data[7][0]]
                },
                series : [
                    {
                       // name: '访问来源',
                        type: 'pie',
                        radius : '40%',
                        center: ['50%', '40%'],
                        data:[
                            {value:result.data[1][index], name:result.data[1][0]},
                            {value:result.data[2][index], name:result.data[2][0]},
                            {value:result.data[3][index], name:result.data[3][0]},
                            {value:result.data[4][index], name:result.data[4][0]},
                            {value:result.data[5][index], name:result.data[5][0]},
                            {value:result.data[6][index], name:result.data[6][0]},
                            {value:result.data[7][index], name:result.data[7][0]},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal:{ 
                                label:{ 
                                    show: true, 
                                    formatter: '{b} : {d}%' 
                                }, 
                                labelLine :{show:true} 
                            } 
                        }
                    }
                ]
            };
                         myChart.setOption(option);
                         index ++;
                    },1000)
                }
            })
        }
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
</style>
