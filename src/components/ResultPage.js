import React from 'react';
import Word from './Word';

const resultPage = (props) => {
    return (
        <div>
            <h4>List of Words</h4>
            <div className="row">{
                props.words.map((word, index) => {
                    return <Word word={word} key={index} />
                })
            }</div>
        </div>
    );
}

export default resultPage;