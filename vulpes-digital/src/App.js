import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to your Movie Portal</h1>
      </header>
    </div>
  );
}

export default App;
