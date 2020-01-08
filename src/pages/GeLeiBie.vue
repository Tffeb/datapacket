<template>
  <div id="center">
      <div class="title">
            <h4>2013—2018年度<span>{{titleHtml}}</span>各类别成交金额（亿元）</h4>
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
                    var result = datajson.data[3].data
                }
                var option = {
                    legend: {
                        textStyle:{
                        fontSize:14,
                        color:'#fff',
                    },
                        top:10,
                        right:80
                    },
                    tooltip: {
                        trigger: 'axis',
                         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    dataset: {
                       source: result
                            
                    },
                    xAxis: [
                        {
                        type: 'category', gridIndex: 0,
                        axisLine:{
                            lineStyle:{
                                color:'#fff',
                                width:1
                            }
                            }
                        }
                    ],
                    yAxis: [
                    {
                        gridIndex: 0,
                        axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:1
                         }
                        }
                    }
                    ],
                    grid: {
                        left: '5%',
                        right: '6%',
                        bottom: '5%',
                        containLabel: true
                     },
                    series: [
                        // These series are in the first grid.
                        {
                            type: 'bar', seriesLayoutBy: 'row',
                            itemStyle : {  
                                    color:'#FFF380'  
                            }  
                        },  
                        {
                            type: 'bar', seriesLayoutBy: 'row',
                            itemStyle : {  
                                    color:'#F2B449'  
                            } 
                        },
                        {
                            type: 'bar', seriesLayoutBy: 'row',
                            itemStyle : {  
                                    color:'#068C6F'  
                            } 
                        },
                        {
                            type: 'bar', seriesLayoutBy: 'row',
                            itemStyle : {  
                                    color:'#F08B48' 
                            } 
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
