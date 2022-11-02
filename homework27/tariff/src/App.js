import React from 'react';
import './App.css';
import Tariff from './Tariff/Tariff'


    const allTariffs = [
      {
          name: "Безлимитный 300",
          price: "300",
          speed: "до 10 Мбит/сек",
          tariff: 'blue',
      },
      {
          name: "Безлимитный 450",
          price: "450",
          speed: "до 50 Мбит/сек",
          tariff: 'green',
      },
      {
          name: "Безлимитный 550",
          price: "550",
          speed: "до 100 Мбит/сек",
          tariff: 'red',
      },
      {
          name: "Безлимитный 1000",
          price: "1000",
          speed: "до 200 Мбит/сек",
          tariff: 'black',
      }
    ]

function App() {
  
  return (
    <div className="App">
      {
          allTariffs.map((oneTariff) =>
            <Tariff name={oneTariff.name}
              price={oneTariff.price}
              speed={oneTariff.speed}
              tariff={oneTariff.tariff} />
          )
        }
    </div>
  );
}

export default App;
