<template>
  <div id="center">
      <div class="title">
            <h4>2013—2018年度<span>{{titleHtml}}</span>技术交易总成交额（亿元）</h4>
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
    mounted () {
        this.chengjiao()
        //订阅消息
        var _this = this
        pubsub.subscribe('titleChange',(msg,index) => {
            _this.titleHtml = index;
        })
    },
    methods:{
        chengjiao () {
            var myChart = echarts.init(document.getElementById('center-body'));
            $.get('/chengjiao',function(data) {
               var datajson =  JSON.parse(data);
                if(datajson.code === 0) {
                    var result = datajson.data[0].data
                }
                var option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        textStyle:{
                        fontSize:14,
                        color:'#fff',
                    },
                        top:10,
                        right:80,
                        data:[result.suoyou[0],result.shuchu[0],result.shewai[0]]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['2013','2014','2015','2016','2017','2018'],
                            axisLine:{
                            lineStyle:{
                                color:'#fff',
                                width:1
                            }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:1
                         }
                        }
                        }
                    ],
                    series : [
                        {
                            name:result.suoyou[0],
                            type:'bar',
                            itemStyle : {  
                                    color:'#FFF380'  
                            },
                            data:result.suoyou.slice(1)
                        },
                        {
                            name:result.shuchu[0],
                            type:'bar',
                            itemStyle : {  
                                    color:'#A4145A'  
                            }, 
                            data:result.shuchu.slice(1)
                        },
                        {
                            name:result.shewai[0],
                            type:'bar',
                            itemStyle : {  
                                    color:'#068C6F'  
                            },
                            data:result.shewai.slice(1)
                        } 
                    ]
                };
               myChart.setOption(option);

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
