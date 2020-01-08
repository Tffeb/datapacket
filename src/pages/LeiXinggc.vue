<template>
  <div id="center">
      <div class="title">
            <h4>2013—2018年度<span>{{titleHtml}}</span>涉及知识产权的技术合同各类型成交金额构成（%</h4>
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
                //var index = 1;
               // var year = null;
                if(datajson.code === 0) {
                    var result = datajson.data[2];
                 var idx = 1;
               var option = {
                    
                    timeline : {
                        axisType: 'category',
                        // realtime: false,
                        // loop: false,
                        autoPlay: true,
                        //currentIndex: 1,
                        playInterval: 2000,
                        bottom:60,
                        data : [
                            result.data[0][1], result.data[0][2], result.data[0][3], result.data[0][4], result.data[0][5],result.data[0][6]
                        ],
                        tooltip: {
                        formatter: '{b}',
                            },
                        label : {
                             formatter : function(s) {
                            return (new Date(s)).getFullYear();
                            },
                            normal:{
                                color:'#fff',
                            }
                        }
                    },
                    options : [
                        {
                            title : {
                                text: result.data[0][1] + '构成占比及成交金额',
                                left:20,
                                top:10,
                                textStyle:{
                                    fontSize:18,
                                    color:'#fff',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{b} : {c}亿元"
                            },
                            color:['#FFF380','#F2B449','#068C6F','#F08B48'],
                            legend: {
                                data:[result.data[1][0],result.data[2][0],result.data[3][0],result.data[4][0]],
                                textStyle:{
                                    fontSize:14,
                                    color:'#fff',
                                },
                                top:10,
                                right:20
                            },
                            series : [
                                {
                                    type:'pie',
                                    center: ['50%', '45%'],
                                    radius: '40%',
                                    data:[
                                        {value: result.data[1][1],  name:result.data[1][0]},
                                        {value: result.data[2][1],  name:result.data[2][0]},
                                        {value: result.data[3][1],  name:result.data[3][0]},
                                        {value: result.data[4][1],  name:result.data[4][0]}
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
                        },
                        {
                            title : {
                                    text: result.data[0][2] + '构成占比及成交金额'
                                    },
                            series : [
                                {
                                    type:'pie',
                                    data:[
                                        {value: result.data[1][2],  name:result.data[1][0]},
                                        {value: result.data[2][2],  name:result.data[2][0]},
                                        {value: result.data[3][2],  name:result.data[3][0]},
                                        {value: result.data[4][2],  name:result.data[4][0]}
                                    ]
                                }
                            ]
                        },
                        {
                            title : {
                                    text: result.data[0][3] + '构成占比及成交金额'
                                    },
                            series : [
                                {
                                    type:'pie',
                                    data:[
                                        {value: result.data[1][3],  name:result.data[1][0]},
                                        {value: result.data[2][3],  name:result.data[2][0]},
                                        {value: result.data[3][3],  name:result.data[3][0]},
                                        {value: result.data[4][3],  name:result.data[4][0]}
                                    ]
                                }
                            ]
                        },
                        {
                            title : {
                                    text: result.data[0][4] + '构成占比及成交金额'
                                    },
                            series : [
                                {
                                    type:'pie',
                                    data:[
                                        {value: result.data[1][4],  name:result.data[1][0]},
                                        {value: result.data[2][4],  name:result.data[2][0]},
                                        {value: result.data[3][4],  name:result.data[3][0]},
                                        {value: result.data[4][4],  name:result.data[4][0]}
                                    ]
                                }
                            ]
                        },
                        {
                            title : {
                                    text: result.data[0][5] + '构成占比及成交金额'
                                    },
                            series : [
                                {
                                    
                                    type:'pie',
                                    data:[
                                        {value: result.data[1][5],  name:result.data[1][0]},
                                        {value: result.data[2][5],  name:result.data[2][0]},
                                        {value: result.data[3][5],  name:result.data[3][0]},
                                        {value: result.data[4][5],  name:result.data[4][0]}
                                    ]
                                }
                            ]
                        },
                        {
                            title : {
                                    text: result.data[0][6] + '构成占比及成交金额'
                                    },
                            series : [
                                {
                                    
                                    type:'pie',
                                    data:[
                                        {value: result.data[1][6],  name:result.data[1][0]},
                                        {value: result.data[2][6],  name:result.data[2][0]},
                                        {value: result.data[3][6],  name:result.data[3][0]},
                                        {value: result.data[4][6],  name:result.data[4][0]}
                                    ]
                                }
                            ]
                        }
                    ]
                };
                         myChart.setOption(option);
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
