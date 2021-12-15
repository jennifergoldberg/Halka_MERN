import React, { useState } from 'react';
import userService from "../../utils/userService";
import { Button, Form } from 'semantic-ui-react'
import { useNavigate, Link } from "react-router-dom";
import LandingFrame from '../../components/LandingFrame';
import './Login.css'
import ButtonAnimated from '../../components/Button';

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()

    console.log(state)
    // try {
    //   // For requests that are sending over a photo, we must send formData
    //   await userService.signup(state) // after we get a response from the server

    //   props.handleSignUpOrLogin() // decodes our token in localstorage, and sets the users information in our App.js state
    //   navigate('/') // navigates to the home page route

    // } catch (err) {
    //   setError(err.message)
    // }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  textAlign: 'center'}} >
      <LandingFrame />
      <div id='login'>
        
        <Form className='login__form' onSubmit={handleSubmit} size="medium" style={{ textAlign: 'center', maxWidth: '500px', fontFamily: 'Roboto' }}>
          <h2 className='login__header' style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '1.5em', marginBottom: '30px', marginTop: '20px' }}>Log In</h2>
          <Form.Field>
            <input type='email' name="email" placeholder='Email' value={state.email} onChange={handleChange} required style={{ textAlign: 'center'}} />
          </Form.Field>
          <Form.Field >
            <input 
            type='password' 
            name="password" 
            placeholder='Password' zzvalue={state.password} onChange={handleChange} required style={{ textAlign: 'center'}} />
          </Form.Field>
          <Link to="/start">
            <ButtonAnimated type='submit' style={{ minWidth: '500px' }} text="Submit" icon="arrow right"></ButtonAnimated>
          </Link>
        </Form>
        <section style={{ fontSize: '18px', marginTop: '30px', marginBottom:'50px'}}>
          New to us? <Link to="/signup">Sign Up</Link>
        </section>
      </div>
    </div>
  )
}

export default Login;