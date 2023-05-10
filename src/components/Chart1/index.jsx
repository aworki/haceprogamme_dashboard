import { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { chart1Name } from '../../common/constants';

function Chart1({ currentYear, currentProduct }) {
  const chartRef1 = useRef();

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef1.current);


    fetch(`./data/export_data/${currentYear}_${currentProduct}_export.json`)
      .then(res => res.json())
      .then(json => {
        var xData = json.country
        //这里放的是国家名称，即json.country可以直接用

        let option = {
          backgroundColor: "transparent",
          "title": {
            text: chart1Name,
            x: "center",
            textStyle: {
              color: '#000',
              fontSize: '22',
            },

          },
          "tooltip": {
            "trigger": "axis",
            "axisPointer": {
              "type": "shadow",
              textStyle: {
                color: "#fff"
              }

            },
          },
          "grid": {
            "borderWidth": 0,
            "top": 110,
            "bottom": 95,
            textStyle: {
              color: "#fff"
            }
          },
          "legend": {
            x: '4%',
            top: '8%',
            textStyle: {
              color: '#90979c',
            },
            "data": ['Export']
          },


          "calculable": true,
          "xAxis": [{
            "type": "category",
            "axisLine": {
              lineStyle: {
                color: '#90979c'
              }
            },
            "splitLine": {
              "show": false
            },
            "axisTick": {
              "show": false
            },
            "splitArea": {
              "show": false
            },
            "axisLabel": {
              "interval": 0,

            },
            "data": xData,
          }],
          "yAxis": [{
            "type": "value",
            "splitLine": {
              "show": false
            },
            "axisLine": {
              lineStyle: {
                color: '#90979c'
              }
            },
            "axisTick": {
              "show": false
            },
            "axisLabel": {
              "interval": 0,

            },
            "splitArea": {
              "show": false
            },

          }],
          "dataZoom": [{
            "show": true,
            "height": 30,
            "xAxisIndex": [
              0
            ],
            bottom: 30,
            "start": 10,
            "end": 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: "#d3dee5",

            },
            textStyle: {
              color: "#fff"
            },
            borderColor: "#90979c"


          }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
          }],
          "series": [{
            "name": "Export Quantity",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
              "normal": {
                "color": "rgba(255,144,128,1)",
                "label": {
                  "show": true,
                  "textStyle": {
                    "color": "#fff"
                  },
                  "position": "inside",
                  formatter: function (p) {
                    return p.value > 0 ? (p.value) : '';
                  }
                }
              }
            },
            "data": json.quantity,  //这里放的是y轴的数据，即json.quantity
          },
          ]
        }
        myChart.setOption(option);
      })
      .catch(err => console.log(err))

    // 绘制图表
  }, [currentYear, currentProduct])


  return (
    <div style={{ width: '1500px', height: '300px', margin: '0 5px' }} ref={chartRef1}></div>
  );
}

export default Chart1;
