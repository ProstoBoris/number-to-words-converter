import React, { Component } from 'react';
import { getAllWords } from '../DataProcessing';

class InputPage extends Component {
    state = { inputValue: '' };

    updateInputValue = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    submitNumbers = () => {
        if (this.props.updateLoading) this.props.updateLoading(true);
        getAllWords(this.state.inputValue).then(res => {
            this.sendData(res);
            if (this.props.updateLoading) this.props.updateLoading(false);
        });
    }

    sendData = (words) => {
        if (this.props.getResult) {
            this.props.getResult(words);
        }
    }

    clearInput = () => {
        this.setState({ inputValue: '' });
        this.sendData([]);
    }

    render() {
        return (
            <div className="container input-container">
                <div className="row">
                    <div className="col-sm-4 offset-sm-4">
                        <h4>Please enter a number:</h4>
                        <input type="number" min="0" max="99999"
                            className="form-control" value={this.state.inputValue}
                            onChange={this.updateInputValue} />
                        <button id="clearBtn" type="button" className="btn btn-secondary"
                            onClick={this.clearInput} disabled={this.state.inputValue === ''}>
                            Clear
                        </button>
                        <button id="submitBtn" type="button" className="btn btn-success"
                            onClick={this.submitNumbers} disabled={this.state.inputValue === ''}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputPage;