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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group col-sm-4 offset-sm-4">
                        <h4>Please enter a number:</h4>
                        <input type="number" className="form-control" />
                        <button type="button" className="btn btn-secondary">Clear</button>
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputPage;