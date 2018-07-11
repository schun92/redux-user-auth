import React from 'react';

export default props => {
        return(
        <ul className="nav nav-tabs justify-content-center">
            {props.children}
        </ul>
    );
}

