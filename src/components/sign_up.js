import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createAccount } from '../actions';

class SignUp extends Component {
    renderInputs(props){
        const error = props.meta.touched && props.meta.error
        return (
            <div className={`form-group ${props.className}`}>
                <label>{props.label}</label>
                <input {...props.input} type={props.type || 'text'} className={`form-control ${error ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">
                    {error}
                </div>
            </div>
        )
    }

    handleSignUp(values){
        console.log('Form Values:', values);

        this.props.createAccount(values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                <h1 className="text-center">Create Account</h1>
                <div className="row">
                    <Field className="col-6 offset-3" name="email" component={this.renderInputs} label="Email"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3"  name="password" component={this.renderInputs} label="Password"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3"  name="confirmPassword" component={this.renderInputs} label="Confirm Password"/>
                </div>
                <div className="row">
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-success">Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values){
    const { email, password, confirmPassword } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }
    if(!password){
        errors.pasword = "Please choose a password";
    }
    if(password !== confirmPassword){
        errors.confirmPassword = "Passwords do not match"
    }
    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, { createAccount:createAccount })(SignUp);