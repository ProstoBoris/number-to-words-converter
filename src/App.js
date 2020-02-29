import React from 'react';
import './App.css';
import InputPage from './containers/InputPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <div className="App">
      <h2>Number to Words Converter</h2>
      <InputPage />
      <ResultPage />
    </div>
  );
}

export default App;