import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate, Link } from "react-router-dom";
import userService from "../../utils/userService";
import LandingFrame from '../../components/LandingFrame';
import './SignUp.css'
import ButtonAnimated from '../../components/Button';



function SignUp(props) {

  const navigate = useNavigate(); // <- programtically navigate to a different route

  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
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
    try {
      // For requests that are sending over a photo, we must send formData
      await userService.signup(state) // after we get a response from the server

      props.handleSignUpOrLogin() // decodes our token in localstorage, and sets the users information in our App.js state
      navigate('/') // navigates to the home page route

    } catch (err) {
      setError("unseccessful")
    }
  }

  return (
    <>
      <div id='signup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <LandingFrame />
        <h2 className='signup__header' style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '1.5em', marginBottom: '30px', marginTop: '20px' }}>Create your account</h2>
        <Form className='signup__form' onSubmit={handleSubmit} size="medium" style={{ textAlign: 'center', maxWidth:'500px'}} >
          <Form.Field>
            <input type='text' name="username" placeholder='Username' value={state.username} onChange={handleChange} required style={{ textAlign: 'center' }} />
          </Form.Field>
          <Form.Field>
            <input type='email' name="email" placeholder='Email' value={state.email} onChange={handleChange} style={{ textAlign: 'center' }} />
          </Form.Field>
          <Form.Field>
            <input type='password' name="password" placeholder='Password' value={state.password} onChange={handleChange} required style={{ textAlign: 'center' }} />
          </Form.Field>
          <Link to="/start">
          <ButtonAnimated type='submit' text="Submit" icon="arrow right" style={{ minWidth: '500px' }} ></ButtonAnimated>
          </Link>
        </Form>
        <section style={{ fontSize: '18px', marginTop: '30px', marginBottom:'50px'}}>
          Already have an account? <Link to="/login">Login</Link>
        </section>
      </div>
    </>
  )
}

export default SignUp;