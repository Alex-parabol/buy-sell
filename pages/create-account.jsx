import React from 'react'
import Layout from '../components/layout/Layout'
import { css } from '@emotion/react';
import {Form, Field, InputSubmit, Error} from '../components/ui/form'
// validation
import useValidation from '../hooks/useValidation';
import CreateAccountValidation from '../validation/validationCreateAccount';
//firebase
import firebase from '../firebase/firebase'; //we import the index.jsç
require('firebase/auth')


export default function CreateAccount() {

  const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
  }

  const {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit
  } = useValidation(INITIAL_STATE, CreateAccountValidation, createAccount);

  const {name, email, password } = values;

  async function createAccount (){
      try {
        await firebase.register(name, email,password);
      } catch (error) {
        console.error('There has been an error', error);
      }
  }

  
    return (
      <div>
        <Layout>
          <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Create Account</h1>
            <Form onSubmit={handleSubmit} >
              <Field>
                <label htmlFor="name">Name</label>
                  <input 
                    type="text"
                    id='name'
                    placeholder='Your name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                  />
              </Field>
              {errors.name ? <Error>{errors.name} </Error> : null }
              <Field>
                <label htmlFor="email">Email</label>
                  <input 
                    type="email"
                    id='email'
                    placeholder='Your email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                  />
              </Field>
              {errors.email ? <Error>{errors.email} </Error> : null }
              <Field>
                <label htmlFor="password">Password</label>
                  <input 
                    type="password"
                    id='password'
                    placeholder='Your Password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                  />
              </Field>
              {errors.password ? <Error>{errors.password} </Error> : null }
              <InputSubmit 
                type="submit"
                value='Create Account'
              />
            </Form>
          </>
         </Layout>
      </div>
      
    )
  }