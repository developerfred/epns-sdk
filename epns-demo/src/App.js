import logo from './logo.png';
import './App.css';

import { getDonations } from 'epns-sdk'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Ethereum Push Notification Service
        </h1>
        {getDonations}
      </header>
    </div>
  );
}

export default App;
