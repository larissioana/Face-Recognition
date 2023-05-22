import styled from "styled-components";
import React, {Component} from 'react';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: "",
            userMsg: "",
        }
    }

    onEmailChange = (event) => {
        this.setState({userMsg: ""});
        this.setState({signInEmail: event.target.value})
        
    };

    onPasswordChange = (event) => {
        this.setState({userMsg: ""});
        this.setState({signInPassword: event.target.value})
    };

    onSubmitSignIn = (e) => {
        e.preventDefault();
    
    fetch('https://shrouded-sands-71043.herokuapp.com/signin',{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })
    })
    .then(response => response.json())

    .then(user => {
        if(this.state.signInEmail && this.state.signInPassword === ""){
            this.setState({userMsg:'Please fill in the fields'})
        } else {
            this.setState({})
        }
        if(user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        } 
    
    })
   
    };

    render(){

    const {onRouteChange} = this.props;
    return (
        <Wrapper>
         <Form>
            <h2>Sign In</h2>
            <p className="account-text">Don't have an account?</p>
            <p onClick={() => onRouteChange('register')} className="register">Create an account here</p>
            <label htmlFor="email">Email</label>
            <input placeholder="Email" onChange={this.onEmailChange} type='email' required/>
            <label htmlFor="password">Password</label>
            <input placeholder="Password" onChange={this.onPasswordChange} type='password' required/>
            <button type="submit" onSubmit={this.onSubmitSignIn}>Sign in</button>
          
         </Form>
        </Wrapper>
    )
    };
};

export default Signin;

export const Wrapper = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   margin-bottom:4rem;
 `;

export const Form = styled.form`
    display:grid;
    width: 25rem;
    border:1px solid transparent;
    box-shadow: 2px 0px 5px  #7e7a7a;
    border-radius: .5rem;
    padding:2rem;

    h2{
        text-align: center;
        margin-bottom:2rem;
        font-size:clamp(1.8rem, 3vw, 2.5rem);
    }

    label{
        margin-bottom:.5rem;
        font-size:clamp(1rem, 2vw, 1.2rem);
       
        font-weight:bolder;
    }
    input{
        margin-bottom:1rem;
        background:none;
        border: 1px solid white;
        padding:.7rem;
        &:focus{
            background: black;
            color:white;
        }
        &::placeholder{
            color:#17181a;
        }
    }

    button{
        width:10rem;
        background:none;
        padding:.7rem;
        font-weight: bolder;
        border: 1px solid white;
        font-size:clamp(1rem, 2vw, 1.2rem);
        transition: transform .2s ease-in;
        &:hover{
            transform:scale(1.05);
        }
    }

    .register{
        margin-top: 1rem;
        margin-bottom:2rem;
        font-weight: bolder;
        cursor: pointer;
     }

     .account-text{
        font-size:1.1rem;
     }

    @media (max-width: 950px){
        margin-top:5rem;
    }
  @media (max-width:415px){
    width:18rem;
 }
`;
