import { hydrateRoot } from 'react-dom/client';
import './App.css';
import ChooseIndex from './components/ChooseIndex';
import ChooseExpDate from './components/ChooseExpDate';
import ChooseStrikePrice from './components/ChooseStrikePrice';
import UnderlyingPrices from './components/UnderlyingPrice';
import LTP_SL_Target from './components/LTP_SL_Target';


function App() {
  return (
    <div className='main-container'>
      <div className='select'>
          <ChooseIndex/>
          <ChooseExpDate/>
          <ChooseStrikePrice/>
      </div>
      <div className='disp-info'>
          <UnderlyingPrices/>
          <LTP_SL_Target/>
      </div>
    </div>
  );
}

export default App;
