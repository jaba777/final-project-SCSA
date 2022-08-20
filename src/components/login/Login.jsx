import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import image from '../../Images/phone.webp';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({apiAddHandler,api}) => {


  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [error,setError]=useState();
  

  const usernav=useNavigate();

  const emailChangehandler=(event)=>{
    setEmail(event.target.value);
  }

  const passwordChangehandler=(event)=>{
    setPassword(event.target.value);
  }

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((item)=> apiAddHandler(item))


  },[api]);

  useEffect(()=>{
    if(localStorage.getItem('auth')!==null){
      usernav('/home');
    }
  },[usernav])

  const logInHandler=(event)=>{
    event.preventDefault();

    api.map((item)=>{
      if(item.email === email && item.address.zipcode === password){
        localStorage.setItem('auth', true);
        usernav('/home')
      } else{
        setError(<p>please write correct email or password</p>)
        return;
      }
    })


  }

  

  return (
    <Section>
      <div className='inputs'>
        <form onSubmit={logInHandler}>
          <div className='Username'>
            <label htmlFor="username">UserName</label>
            <input type="email" id='username' onChange={emailChangehandler} />
          </div>

          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={passwordChangehandler} />
          </div>
           {error}
          <div className='button'>
            <button type='submit'>LOG IN</button>
          </div>

        </form>
      </div>


      <div className='phone'>

        <div className="image">
          <img src={image} alt="phone-img" />
        </div>
        <div className="icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

    </Section>
  )
}

export default Login

const Section = styled.section`
  width: 60%;
  max-width: 95%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .inputs{
    width: 40%;
    form{
      width: 100%;
      display: flex;
      flex-direction: column;
      line-height: 2.2rem;
      p{
        font-size: 12px;
        color: red;
      }
      
      .Username,.password{
        display: flex;
        flex-direction: column;
        input{
          padding: 0.2rem 0.5rem;
          width: 100%;
          border: none;
          &:focus{
            outline: none;
          }
        }
      }
      a{
        text-decoration: none;
        text-align: right;
        font-size: 12px;
        color: #2873ce;
      }
      .button{
        text-align: right;
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
  }

  .phone{
    width: 40%;
    .image{
      width: 100%;
      height: auto;
      img{
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    .icons{
      margin: 1rem;
      display: flex;
      justify-content: right;
      gap: 0.5rem;
      a{
        font-size: 13px;
        color: #54595F;
      }
    }
  }


`
