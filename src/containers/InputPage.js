import React, { Component } from 'react';
import { getAllWords } from '../DataProcessing';

class InputPage extends Component {
    state = { inputValue: '' };

    updateInputValue = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    submitNumbers = () => {
        const words = getAllWords(this.state.inputValue);
        this.sendData(words);
    }

    sendData = (words) => {
        this.props.getResult(words);
    }

    clearInput = () => {
        this.setState({ inputValue: '' });
        this.sendData([]);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 offset-sm-4">
                        <h4>Please enter a number:</h4>
                        <input type="number"
                            className="form-control" value={this.state.inputValue}
                            onChange={this.updateInputValue} />
                        <button type="button" className="btn btn-secondary"
                            onClick={this.clearInput}>
                            Clear
                        </button>
                        <button type="button" className="btn btn-success"
                            onClick={this.submitNumbers}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputPage;