import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import {useNavigate, Link } from "react-router-dom";
import LandingFrame from '../../components/LandingFrame';
import './Login.css'

function Login() {
  const [state, setState] = useState({
    username: "",
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
    <>
    <LandingFrame />
    <div id='login'>
      <h2 className='login__header'>Create your account</h2>
      <Form className='login__form' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input type='text' name="username" placeholder='Username' value={state.username}onChange={handleChange} required />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name="password" placeholder='Password' value={state.password} onChange={handleChange} required />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      <section>
          New to us? <Link to="/signup">Sign Up</Link>
      </section>
    </div>
    </>
  )
}

export default Login;