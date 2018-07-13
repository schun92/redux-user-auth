import React from 'react';
import auth from '../hoc/auth';

const MovieQuote = props => {
    return (
        <div>
            <h1 className="text-center">Movie Quote</h1>
            <h4>Just keep swimming...</h4>
        </div>
    )
}

export default auth(MovieQuote);