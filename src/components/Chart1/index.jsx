import { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

function Chart1({ currentYear, currentProduct }) {
  const chartRef1 = useRef();

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef1.current);


    fetch(`./data/export_data/${currentYear}_${currentProduct}_export.json`)
      .then(res => res.json())
      .then(json => {
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: json.country
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: json.quantity,
              type: 'bar'
            }
          ]
        });
      })
      .catch(err => console.log(err))

    // 绘制图表
  }, [currentYear, currentProduct])


  return (
    <div style={{ width: '1000px', height: '300px', margin: '0 5px' }} ref={chartRef1}></div>
  );
}

export default Chart1;
