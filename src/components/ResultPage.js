import React from 'react';
import Word from './Word';
import keypadImg from '../assets/keypad.png';

const resultPage = (props) => {

    let loading = (
        <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );

    const getStyle = () => {
        if (props.loading) {
            return {
                display: props.loading ? 'none' : 'block'
            }
        }
    }

    return (props.words ?
        <div>
            {props.words.length ?
                <div className="container result-conrainer">
                    <h4>List of Words</h4>
                    <div className="row" style={getStyle()}>{
                        props.words.map((word, index) => {
                            return <Word word={word} key={index} />
                        })
                    }</div>
                </div> : (<img className="img-fluid"
                    src={keypadImg}
                    style={getStyle()}
                    alt="phone keypad" />)}
            {props.loading ? loading : ''}
        </div> : null
    );
}

export default resultPage;