import { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

function Chart4({ currentImport, currentProduct }) {
  const chartRef1 = useRef();

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef1.current);


    fetch(`./data/percentage_top_5_data/${currentProduct}_percentage_top_5.json`)
      .then(res => res.json())
      .then(json => {
        console.log('json1', json[currentImport]);
        const myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
        const option = {
          backgroundColor: '#0e2147',
          grid: {
            left: '11%',
            top: '12%',
            right: '0%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: [{
            show: false,
          }],
          yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '16',
              }
            },
            data: json[currentImport].country.reverse()
          }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '16',
              }
            },
            data: new Array(json[currentImport].country.length).fill(0).map((item, i) => (i + 1).toString()).reverse(),
          }, {
            name: '分拨延误TOP 10',
            nameGap: '50',
            nameTextStyle: {
              color: '#ffffff',
              fontSize: '16',
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [],
          }],
          series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: json[currentImport].percentage.reverse(),
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
              }
            },
            z: 2
          }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: new Array(json[currentImport].country.length).fill(99.5),
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#0e2147',
                barBorderRadius: 5,
              }
            },
            z: 1
          }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: new Array(json[currentImport].country.length).fill(100),
            barWidth: 24,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 5,
              }
            },
            z: 0
          },
          {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: new Array(json[currentImport].country.length).fill(0),
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                opacity: 1,
              }
            },
            z: 2
          }
          ]
        };
        myChart.setOption(option);
      })
      .catch(err => console.log(err))


    // 绘制图表
  }, [currentImport, currentProduct])


  return (
    <div style={{ width: '1000px', height: '300px', margin: '0 5px' }} ref={chartRef1}></div>
  );
}

export default Chart4;
