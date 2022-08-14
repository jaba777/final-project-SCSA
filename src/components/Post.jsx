import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Massive from './Massive';
import styled from 'styled-components';

const Post = () => {

    const {id} = useParams();
    const mass=Massive;
    const [express,setExpress]=useState({});
  
  useEffect(()=>{
    let finder = mass.find((x)=> x.id == id);

    setExpress(finder);

  },[express])
   

  return (
    <Section>
      <div className='banner'></div>

      <div className='box'>
        <div className="image">
          <img src={express.images} alt={express.title} />
        </div>
        <h3>{express.title}</h3>

        <p>{express.Description}</p>
      </div>
    </Section>
  )
}

export default Post

const Section = styled.section`
.banner{
  width: 90%;
  max-width: 95%;
  background-color: #756B78;
  height: 300px;
  margin: 0 auto;
}
  .box{
    width: 400px;
    max-width: 50%;
    margin: 1rem auto;
    color: #54595F;
    padding: 0.3rem 0.5rem;
    position: absolute;
    top: 25rem;
    left: 50%;
    transform: translate(-50%, -50%);
    
    
    .image{
      width: 100%;
      height: 300px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    h3{
      font-size: 25px;
      margin: 1rem 0;
    }
    p{
      font-size: 16px;
    }
  }
`
