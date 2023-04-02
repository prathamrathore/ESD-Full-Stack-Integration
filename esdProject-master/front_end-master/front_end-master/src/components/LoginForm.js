import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button'
import {Form} from "react-bootstrap";
const LoginForm = ({ startLogin }) => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    const credentials = {
      email, password
    }

    startLogin(credentials)

    setEmail('')
    setPassword('')
  }

  return (

    <div className="LoginForm">
    <Form style={{width: "20%", marginLeft: "40%", marginRight: "30%", marginTop: "0%"}} onSubmit={handleLogin} id='login-form'>
      {/*<input*/}
      {/*  type='email'*/}
      {/*  placeholder='Email'*/}
      {/*  value={email}*/}
      {/*  onChange={event => setEmail(event.target.value)}*/}
      {/*  id='email'*/}
      {/*  required*/}
      {/*/>*/}
      <br/>
      <br/>
      {/*<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">*/}
      {/*  <Form.Label>Email address</Form.Label>*/}
      {/*  <Form.Control type="email" placeholder="username" value={email}/>*/}
      {/*</Form.Group>*/}
        
      {/*<input*/}
      {/*  type='password'*/}
      {/*  placeholder='Password'*/}
      {/*  value={password}*/}
      {/*  onChange={event => setPassword(event.target.value)}*/}
      {/*  id='password'*/}
      {/*  required*/}
      {/*/>*/}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control componentClass="input" type="email" placeholder="username" value={email} onChange={event => setEmail(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control componentClass="input" type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)}/>
      </Form.Group>
        <br/>
      <Button type='submit' id='login-submit'>LOGIN</Button>
    </Form>
    </div>
  )
}

export default LoginForm
