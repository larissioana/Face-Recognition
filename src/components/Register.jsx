import {Wrapper, Form} from './Signin';
import React, {Component} from 'react';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            userMsg: ""
        }
    }
    onNameChange = (event) => {
        this.setState({userMsg: ""})
        this.setState({name: event.target.value})
    };

    onEmailChange = (event) => {
        this.setState({userMsg: ""})
        this.setState({email: event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({userMsg: ""})
        this.setState({password: event.target.value})
    };

    onSubmitSignIn = (e) => {
        e.preventDefault();
  
        if(this.state.email && this.state.name && this.state.password === ""){
            this.setState({userMsg: "Please fill in the fields"})
        } else {
            this.setState({userMsg: ""})
        }
        fetch('https://shrouded-sands-71043.herokuapp.com/register',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
       
        };

    render(){
   
    return (
        <Wrapper>
         <Form>
            <h2>Register</h2>
            <label htmlFor="name">Name</label>
            <input placeholder='Name - Surname' type='text' required onChange={this.onNameChange} />
            <label htmlFor="email">Email</label>
            <input required placeholder='Email' type='email'  onChange={this.onEmailChange} />
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type='password' required onChange={this.onPasswordChange}/>
            <button type='submit' onSubmit={this.onSubmitSignIn}>Register</button>
         </Form>
        </Wrapper>
    )
    }
};

export default Register;

