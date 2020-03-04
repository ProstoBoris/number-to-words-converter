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
        <header>
          <h2>Number to Words Converter</h2>
        </header>
        <p className="app-description">
          Please enter any number (max 5 digits) and press "Submit" button.
          The application will convert an entered number
          into a list of corresponding words in the style
          of <a href="https://en.wikipedia.org/wiki/Phoneword" target="_blank" rel="noopener noreferrer">Phonewords</a>.
          Use the image below as guidelines.
        </p>
        <InputPage getResult={this.onGetResult} updateLoading={this.onLoadingUpdate} />
        <ResultPage words={this.state.words} loading={this.state.loading} />
        <div className="footer">Created by Borys Vengerovskyi</div>
      </div>
    );
  }
}

export default App;