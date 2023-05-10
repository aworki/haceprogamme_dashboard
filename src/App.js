import './App.css';
import { Button, Select } from 'antd';
import 'antd/dist/reset.css';
import { useState, useRef } from 'react'
import Chart1 from './components/Chart1';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Chart4 from './components/Chart4';
import Chart5 from './components/Chart5';

import countries from './data/countries_label.json'
// console.log(countries.length); 去重之后是215

function App() {
  // 一个值对应一个筛选框哈
  const [currentYear, setCurrentYear] = useState('2019'); // year
  const [currentExport, setCurrentExport] = useState('China'); // export country
  const [currentImport, setCurrentImport] = useState('USA'); // import country
  const [currentProduct, setCurrentProduct] = useState('8411'); // Product Name



  const [currentYear1, setCurrentYear1] = useState('2019'); // year
  const [currentExport1, setCurrentExport1] = useState('China'); // export country
  const [currentImport1, setCurrentImport1] = useState('USA'); // import country
  const [currentProduct1, setCurrentProduct1] = useState('8411'); // Product Name

  // 第一排
  const _currentYear = useRef('2019');
  const _currentExport = useRef('China');
  const _currentImport = useRef('USA');
  const _currentProduct = useRef('8411');


  // 第二排
  const _currentYear1 = useRef('2019');
  const _currentExport1 = useRef('China');
  const _currentImport1 = useRef('USA');
  const _currentProduct1 = useRef('8411');

  console.log(currentYear, currentExport, currentImport, currentProduct);
  return (
    <div className="App">
      {/* 筛选框 1 year*/}
      <Select
        defaultValue="2019"
        style={{ width: 200 }}
        onChange={(e) => { _currentYear.current = e }}
        options={new Array(23).fill(0).map((item, i) => {
          return {
            value: `${2000 + i}`, label: `${2000 + i}`
          }
        })}
      />
      {/* 筛选框 2 export country default china*/}
      <Select
        defaultValue="China"
        style={{ width: 200 }}
        onChange={(e) => { _currentExport.current = e }}
        options={countries}
      />

      {/* 筛选框 3 import country default USA*/}
      <Select
        defaultValue="USA"
        style={{ width: 200 }}
        onChange={(e) => { _currentImport.current = e }}
        options={countries}
      />

      {/* 筛选框 4*/}
      <Select
        defaultValue="8411"
        style={{ width: 200 }}
        onChange={(e) => { _currentProduct.current = e }}
        options={[
          { value: '8411', label: '8411_clothes' },
        ]}
      />
      <Button type="primary" onClick={() => {
        setCurrentYear(_currentYear.current);
        setCurrentExport(_currentExport.current);
        setCurrentImport(_currentImport.current);
        setCurrentProduct(_currentProduct.current);
      }}>submit</Button>
      <div style={{ display: 'flex', marginBottom: '30px', marginTop: "5px" }}>
        {/* 图表1 柱状*/}
        <Chart1 currentYear={currentYear} currentProduct={currentProduct} />
        {/* 图表4 横向柱状*/}
        <Chart4 currentImport={currentImport} currentProduct={currentProduct} />
        {/* 图表4 扇形*/}
        <Chart5 currentExport={currentExport} currentImport={currentImport} currentProduct={currentProduct} />
      </div>



      {/* 第二排筛选框 */}
      {/* 筛选框 1 year*/}
      <Select
        defaultValue="2019"
        style={{ width: 200 }}
        onChange={(e) => { _currentYear1.current = e }}
        options={new Array(23).fill(0).map((item, i) => {
          return {
            value: `${2000 + i}`, label: `${2000 + i}`
          }
        })}
      />
      {/* 筛选框 2 export country default china*/}
      <Select
        defaultValue="China"
        style={{ width: 200 }}
        onChange={(e) => { _currentExport1.current = e }}
        options={countries}
      />

      {/* 筛选框 3 import country default USA*/}
      <Select
        defaultValue="USA"
        style={{ width: 200 }}
        onChange={(e) => { _currentImport1.current = e }}
        options={countries}
      />

      {/* 筛选框 4*/}
      <Select
        defaultValue="8411"
        style={{ width: 200 }}
        onChange={(e) => { _currentProduct1.current = e }}
        options={[
          { value: '8411', label: '8411_clothes' },
        ]}
      />
      <Button type="primary" onClick={() => {
        setCurrentYear1(_currentYear1.current);
        setCurrentExport1(_currentExport1.current);
        setCurrentImport1(_currentImport1.current);
        setCurrentProduct1(_currentProduct1.current);
      }}>submit</Button>

      <div style={{ display: 'flex', marginTop: "5px" }}>
        {/* 图表2 桑基*/}
        <Chart2 currentYear={currentYear1} currentProduct={currentProduct1} />
        {/* 图表3 地图*/}
        <Chart3 currentYear={currentYear1} currentProduct={currentProduct1} />
      </div>

    </div>
  );
}

export default App;
