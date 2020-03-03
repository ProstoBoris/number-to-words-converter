import React from 'react';
import Word from './Word';
import keypadImg from '../assets/keypad.png';

const resultPage = (props) => {
    return (props.words ?
        <div>
            {props.words.length ?
                <div className="container">
                    <h4>List of Words</h4>
                    <div className="row">{
                        props.words.map((word, index) => {
                            return <Word word={word} key={index} />
                        })
                    }</div>
                </div> : <img src={keypadImg} alt="phone keypad" />}
        </div> : null
    );
}

export default resultPage;