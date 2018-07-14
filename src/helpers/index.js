import React from 'react';

export function renderInputs(props) {
    const error = props.meta.touched && props.meta.error
    return (
        <div className={`form-group ${props.className}`}>
            <label>{props.label}</label>
            <input {...props.input} type={props.type || 'text'} className={`form-control ${error ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    );
}