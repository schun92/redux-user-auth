import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { accountSignIn } from '../actions';
import { renderInputs } from '../helpers';

class SignIn extends Component {

    handleSignIn(values){
        console.log('Form Values:', values);

        this.props.accountSignIn(values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                <h1 className="text-center">Sign In</h1>
                <div className="row">
                    <Field className="col-6 offset-3" name="email" component={renderInputs} label="Email"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3"  name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row">
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-success">Sign In</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values){
    const { email, password } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }
    if(!password){
        errors.pasword = "Please choose a password";
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignIn);

export default connect(null, { accountSignIn: accountSignIn })(SignIn);