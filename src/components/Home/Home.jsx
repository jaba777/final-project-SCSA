import React,{useState} from 'react';
import Massive from '../Massive';
import styled from 'styled-components';
import img from '../../Images/phalm.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [express,setExpress]=useState(Massive);

  return (
    <Section>
      <div className='image'>
        <img src={img} alt="image" />
      </div>

      <div className='container'>
        <h1>Our Posts</h1>
        <div className='line'></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className='photo-container'>
         {
          express.map((item,index)=>{
            return(
              <div className='photo-box' key={index}>
                  <div className="img">
                    <img src={item.images} alt="" />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>

                  <Link to={`/post/${item.id}`}>LEARN MORE</Link>
              </div>
            )
          })
         }
        </div>
      </div>

    </Section>
  )
}

export default Home

const Section = styled.section`
  width: 95%;
  margin: 10px auto;
  .image{
    width: 100%;
    height: 500px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container{
    width: 80%;
    max-width: 95%;
    margin: 2rem auto;
    color:#54595F;
    h1,p{
      text-align: center;
    }
    .line{
      margin: 1rem auto;
      width: 30px;
      height: 3px;
      background-color: #BD8E04;
      border-radius: 1rem;
    }

    .photo-container{
      margin: 2rem auto;
      display: flex;
      justify-content: space-between;
      .photo-box{
        width: 300px;
        line-height: 1.5rem;
        .img{
          width: 100%;
          height: 200px;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p{
          text-align: left;
        }
        h3{
          margin-top: 3rem;
        }
        a{
          color: #BD8E04;
          text-decoration: none;
          font-size: 16px;
        }
      }
    }
    
  }
`
