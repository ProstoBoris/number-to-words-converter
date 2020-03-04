import React, { Component } from 'react';
import './App.css';
import InputPage from './containers/InputPage';
import ResultPage from './components/ResultPage';

class App extends Component {
  state = {
    words: [],
    loading: false
  }

  onGetResult = (childData) => {
    this.setState({ ...this.state, words: [...childData] });
  }

  onLoadingUpdate = (loading) => {
    this.setState({ ...this.state, loading });
  }

  render() {
    return (
      <div className="App">
        <h2>Number to Words Converter</h2>
        <InputPage getResult={this.onGetResult} updateLoading={this.onLoadingUpdate} />
        <ResultPage words={this.state.words} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;