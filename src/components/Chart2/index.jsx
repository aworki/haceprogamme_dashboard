import { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { chart2Name } from '../../common/constants';

function Chart1({ currentYear, currentProduct }) {
  const chartRef1 = useRef();

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef1.current);


    fetch(`./data/sankey_data/${currentYear}_${currentProduct}_sankey.json`)
      .then(res => res.json())
      .then(json => {
        myChart.setOption({
          grid: {
            top: 100
          },
          title: {
            text: chart2Name,
            x: "center",
            y: '-5',
            textStyle: {
              color: '#000',
              fontSize: '22',
              marginBottom: '10px'
            },
          },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'sankey',
              data: json.nodes,
              links: json.links,
              emphasis: {
                focus: 'adjacency'
              },
              lineStyle: {
                color: 'gradient',
                curveness: 0.5
              }
            }
          ]
        });
      })
      .catch(err => console.log(err))

    // 绘制图表
  }, [currentYear, currentProduct])


  return (
    <div style={{ width: '1200px', height: '450px', margin: '0 5px' }} ref={chartRef1}></div>
  );
}

export default Chart1;
