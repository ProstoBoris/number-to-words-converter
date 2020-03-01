import React from 'react';

const resultPage = (props) => {
    return (
        <div>
            <h4>List of Words</h4>
            <div>{props.words}</div>
        </div>
    );
}

export default resultPage;