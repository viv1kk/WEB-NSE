import { hydrateRoot } from 'react-dom/client';
import './App.css';
import ChooseIndex from './components/ChooseIndex';
import ChooseExpDate from './components/ChooseExpDate';
import ChooseStrikePrice from './components/ChooseStrikePrice';
import UnderlyingPrices from './components/UnderlyingPrice';
import LTP_SL_Target from './components/LTP_SL_Target';


function App() {
  const URL = "http://127.0.0.1:3001/"
  
  let indexNames = [];
  function getIndexNames()
  {
      const xhr = new XMLHttpRequest();

      xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4 && xhr.status == 200)
        {
          let resp = xhr.responseText;
          indexNames = JSON.parse(resp)
          console.log(indexNames)
        }
      })
      xhr.open('POST', URL, false)
      xhr.send(null)
  }
  getIndexNames()


  return (
    <div className='main-container'>
      <div className='select'>
          <ChooseIndex />
          <ChooseExpDate/>
          <ChooseStrikePrice/>
      </div>
      <div className='disp-info'>
          <UnderlyingPrices/>
          <LTP_SL_Target/>
      </div>
      <p>{indexNames[0]}</p>
    </div>
  );
}

export default App;
