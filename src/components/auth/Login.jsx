import React, { Component } from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase'; // when we deal with authentication, we have to bring in firebase connect, not firestore connect.

class Login extends Component {

    state = {
        email:'',
        password:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {firebase} = this.props;
        const { email,password } = this.state;

        firebase.login({
            email : email,
            password : password
        }).catch(err => alert('Invalid Login Credentials'))
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value})

    

    render() {
        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fas fa-lock"></i> Login
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit} >
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text"
                                    className="form-control" 
                                    name="email" 
                                    required
                                    value={this.state.email} 
                                    onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">password</label>
                                    <input type="password"
                                    className="form-control" 
                                    name="password" 
                                    required
                                    value={this.state.password} 
                                    onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit" 
                                value="Login" 
                                className="btn btn-primary btn-block"/>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


Login.propTypes = {
    firebase:PropTypes.object.isRequired
}

export default firebaseConnect()(Login);