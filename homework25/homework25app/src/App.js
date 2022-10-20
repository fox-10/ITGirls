import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";



function App() {
  return (
    <div className="App">
      <h1>Donuts eaten per person</h1>
      <Chart
  chartType="PieChart"
  data={[['Name', 'Donuts eaten'],
  ['Michael' , 5],
  ['Elisa', 7],
  ['Robert', 3],
  ['John', 2],
  ['Jessica', 6],
  ['Aaron', 1],
  ['Margareth', 8]
  ]}
  // width="600px"
  height="600px"  
/>
    </div>
  );
}

export default App;
