import { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import worldJSON from '../../data/world.json';
import processData from './processData';

function Chart1({ currentYear, currentProduct }) {
  const chartRef1 = useRef();


  useEffect(() => {
    echarts.registerMap('world', worldJSON);
  }, [])

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef1.current);


    fetch(`./data/globalmap_data/${currentYear}_${currentProduct}_globalmap.json`)
      .then(res => res.json())
      .then(json => {
        // map数据复杂 去js文件里处理
        const option = processData(json)
        myChart.clear();
        myChart.setOption(option);
      })
      .catch(err => console.log(err))

    // 绘制图表
  }, [currentYear, currentProduct])


  return (
    <div style={{ width: '800px', height: '300px', flex: 1, margin: '0 5px' }} ref={chartRef1}></div>
  );
}

export default Chart1;
