<template>
  <div id="center">
      <div class="title">
            <h4>2013—2018年度<span>{{titleHtml}}</span>各类别成交金额占比</h4>
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
        this.getChart()

        //订阅消息
        var _this = this
        pubsub.subscribe('titleChange',(msg,index) => {
            _this.titleHtml = index;
        })
    },
    methods:{
        getChart() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('center-body'));
        $.get('/chengjiao',function(data) {
             var datajson =  JSON.parse(data);
                if(datajson.code === 0) {
                    var result = datajson.data[2].data
                }
                //将数据化为百分比的值
                var fw = [],zr = [],zx = [],kf = [];
                for(var i = 0;i<result.fuwu.length;i++) {
                    fw.push(Math.round(result.fuwu[i]*10000)/100)
                }
                for(var i = 0;i<result.zhuanrang.length;i++) {
                    zr.push(Math.round(result.zhuanrang[i]*10000)/100)
                }
                for(var i = 0;i<result.zixun.length;i++) {
                    zx.push(Math.round(result.zixun[i]*10000)/100)
                }
                for(var i = 0;i<result.kaifa.length;i++) {
                    kf.push(Math.round(result.kaifa[i]*10000)/100)
                }
            // 指定图表的配置项和数据
        var option = {
                title:{
                    color:'#fff'
                },
                tooltip: {
                    show:true,
                    trigger: 'axis',
                    formatter: '{b0}年<br />{a0}:{c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />'
                },
                legend: {
                    data:['技术服务','技术转让','技术咨询','技术开发'],
                    textStyle:{
                        fontSize:14,
                        color:'#fff',
                    },
                    top:10,
                    right:70
                },
                grid: {
                    left: '5%',
                    right: '6%',
                    bottom: '5%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2013','2014','2015','2016','2017','2018'],
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:1
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    //splitNumber:9,
                    //max:80,
                    axisLabel: {  
                            show: true,  
                            interval: 'auto',  
                            formatter: '{value}'  
                            },
                    splitLine:{
                        color:'#fff'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            width:1
                        }
                    }
                },
                series: [
                    {
                        name:'技术服务',
                        type:'line',
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#F1E87E'  
                                }  
                            }  
                        },  
                        data:fw
                    },
                    {
                        name:'技术转让',
                        type:'line',
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#F2B449'  
                                }  
                            }  
                        }, 
                        data:zr
                    },
                    {
                        name:'技术咨询',
                        type:'line',
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#058370'  
                                }  
                            }  
                        }, 
                        data:zx
                    },
                    {
                        name:'技术开发',
                        type:'line',
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#F08B48'  
                                }  
                            }  
                        }, 
                        data:kf
                    },
                ]
            };
        // 使用刚指定的配置项和数据显示图表。
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
