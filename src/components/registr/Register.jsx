import React,{ useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register = ({addInfo,api}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword]= useState('');
    let usenav = useNavigate();

    const [incorrect, setIncorrect]= useState('');

    const emailChangeHandler=(e)=>{
        setEmail(e.target.value);
    }

    const passwordChangeHandler=(e)=>{
        setPassword(e.target.value);
    }

    const repeatPasswordChangeHandler=(e)=>{
        setRepeatPassword(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        if(email !== '' && password!== '' && repeatPassword === password){
            const express = {
                "id": Math.random(),
                "name": "",
                "username": "",
                "email": email,
                "address": {
                  "street": "",
                  "suite": "",
                  "city": "",
                  "zipcode": password,
                  "geo": {
                    "lat": "",
                    "lng": ""
                  }
                },
                "phone": "",
                "website": "",
                "company": {
                  "name": "",
                  "catchPhrase": "",
                  "bs": ""
                }
            }
            
            //usenav('/');
            addInfo(express);

        } else{
            setIncorrect( <p>please write correct password</p> )
        }

    }

    
    


  return (
    <Section>
      <h1>Enter your Email and Password</h1>
      <form onSubmit={submitHandler}>
      <div className='Username'>
            <label htmlFor="username">UserName </label>
            <input type="email" id='username' onChange={emailChangeHandler} />
       </div>

          <div className='password'>
            <label htmlFor="password">Password </label>
            <input type="password" id='password' onChange={passwordChangeHandler} />
          </div>

          <div className='password'>
            <label htmlFor="password">Repeat your password </label>
            <input type="password" id='password' onChange={repeatPasswordChangeHandler} />
          </div>
          {incorrect}
          <div className='button'>
            <button type='submit'>SUBMIT</button>
          </div>
      </form>
    </Section>
  )
}

export default Register

const Section = styled.section`
    padding: 0.5rem 1rem;
    margin: 2rem auto;
    width: 500px;
    max-width: 95%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    h1{
        color: #54595F;
        text-align: center;
        font-size: 25px;
    }
    form{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        .Username,.password{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            input{
                width: 100%;
                padding: 0.2rem 0.5rem;
                &:focus{
                  outline: none;
                }
            }
        }
        p{
            color: red;
        }

        .button{
            display: flex;
            justify-content: right;
            margin-top: 1rem;
            button{
                border: none;
                background-color: #D2A215;
                font-size: 10px;
                padding: 0.5rem 1rem;
                font-weight: bold;
                color: #fff;
                cursor: pointer;
            }
        }
    }
`
