import React from 'react';
import styled from 'styled-components'
import logo from '../Images/React_logo_wordmark.png';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();
    const logOut=()=>{
        localStorage.removeItem('auth');
        nav('/');
    }
  return (
   <Section>
    <div className='image'>
        <img src={logo} alt="logo" />
    </div>

    <nav>
        {
            localStorage.getItem('auth')!=null ? (
                <>
                <Link to='/home'>HOME</Link>
                <Link onClick={logOut} to='/'>LOGOUT</Link>
                </>
            ) : (
              
                <Link to='/'>LOGIN</Link>
            )
                
            
        }
    </nav>

    <nav>
            <a href="https://www.facebook.com/profile.php?id=100073492871987" target='value'><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/tskhovrebashvilijaba/?fbclid=IwAR0bE63Qt555uVUxStkeKQZb70gjfxf8tPPoyPVXRsSMUKDiVCi3j577-lo" target='value'><i className="fab fa-instagram"></i></a>
    </nav>
   
   </Section>
  )
}

export default Header

const Section = styled.header`
width: 100%;
max-width: 1250px;
background-color: #fff;
padding: 2rem 10%;
display: flex;
align-items: center;
margin: 0 auto;
justify-content: space-between;
    .image{
        width: 200px;
        height: auto;
        max-width: 300px;
        
        img{
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
    nav{
        display: flex;
        align-items: center;
        gap: 1rem;
        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        a{
            text-decoration: none;
            color: #54595F;
            font-size: 16px;
            font-weight: bold;
        }
    }
`
