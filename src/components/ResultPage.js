import React from 'react';
import Word from './Word';
import keypadImg from '../assets/keypad.png';

const resultPage = (props) => {

    let loading = (
        <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );

    return (
        <div>
            {props.words && !props.loading ?
                <div>
                    {props.words.length ?
                        <div className="container result-conrainer">
                            <h4>List of Words</h4>
                            <div className="row word-list">{
                                props.words.map((word, index) => {
                                    return <Word word={word} key={index} />
                                })
                            }</div>
                        </div> : (
                            <img className="img-fluid" // display keypad image when word list is not displayed
                                src={keypadImg}
                                alt="phone keypad" />
                        )}
                </div> : null}
            {props.loading ? loading : ''}
        </div>
    );
}

export default resultPage;