import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {useNavigate, Link } from "react-router-dom";
import LandingFrame from '../../components/LandingFrame';
import './SignUp.css'

function SignUp() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: ""
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

  const SignUpForm = (
    <div id='signup'>
      <h2 className='signup__header'>Create your account</h2>
      <Form className='signup__form' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input type='text' name="username" placeholder='Username' value={state.username}onChange={handleChange} required />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type='email' name="email" placeholder='Email' value={state.email} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name="password" placeholder='Password' value={state.password} onChange={handleChange} required />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      <section>
          Already have an account? <Link to="/login">Login</Link>
      </section>
    </div>
  )

  return (
    <LandingFrame {...SignUpForm} />
  )
}

export default SignUp;