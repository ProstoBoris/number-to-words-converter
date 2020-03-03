import React, { Component } from 'react';
import './App.css';
import InputPage from './containers/InputPage';
import ResultPage from './components/ResultPage';

class App extends Component {
  state = {
    words: []
  }

  onGetResult = (childData) => {
    this.setState({ words: [...childData] });
  }

  render() {
    return (
      <div className="App">
        <h2>Number to Words Converter</h2>
        <InputPage getResult={this.onGetResult} />
        <ResultPage words={this.state.words} />
      </div>
    );
  }
}

export default App;