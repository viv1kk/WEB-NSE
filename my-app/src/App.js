import { hydrateRoot } from 'react-dom/client';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <div className='select'>
        {
        // select index
        }
        <label htmlFor='index'>Choose Index :</label>
        <select name="index" id="index">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        {
        // select expiry dates
        }
        <label htmlFor='exp-date'>Choose Index :</label>
        <select name="exp-date" id="exp-date">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        {
        // select strike price
        }
        <label htmlFor='strike-price'>Choose Index :</label>
        <select name="strike-price" id="strike-price">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div>
        Underlying Price : <span id = 'underlying-price'>@</span>
      </div>
      <div>
      Underlying Price : <span id = 'underlying-price'>@</span>
      Underlying Price : <span id = 'underlying-price'>@</span>
      Underlying Price : <span id = 'underlying-price'>@</span>
      </div>
    </div>
  );
}

export default App;
