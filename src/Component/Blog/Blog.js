import React from 'react'
import './Blog.css';
import ocean from '../images/cc1.webp';
import deepsea from '../images/cc2.webp';
import carbon from '../images/cc3.webp';
import amazon from '../images/l1.webp';
import heatwave from '../images/l2.webp';
import coastal from '../images/center.webp';
import pandemic from '../images/pandamic.webp';
import getting from '../images/getting.webp';


const News = () => {
  return (
    <div className='news'>
        <h1 id='news'>Blogs</h1>

        <div className='box'>


            
            <div className='box1'>
            <a href='/Sign' >
                <img id='ocean' src={ocean}/>
                <h1 id='font' >Ocean Sewage Pollution Persists</h1>
                </a>
                
                </div>
        
       
        <div className='box1'>
        <a href='/Sign' >
                <img id='ocean' src={deepsea}/>
                <h1 id='font'>Deep-Sea Sharks Spotted Near Popular Resort Town</h1>
                </a>
                </div>

                <div className='box1'>
                <a href='/Sign' >
                <img id='ocean' src={carbon}/>
                <h1 id='font' >Carbon Tax Draft Plan Made Public</h1>
                </a>
                </div>

                <div className='box1'>
                <a href='/Sign' >
                <img id='ocean' src={amazon}/>
                <h1 id='font' >Amazon Activist Arrested in Capital City</h1>
                </a>
                </div>


                <div className='box1'>
                <a href='/Sign' >
                <img id='ocean' src={heatwave}/>
                <h1 id='font' >Heatwave or Unprecedented Highs</h1>
                </a>
                </div>
        
       
        <div className='box1'>
        <a href='/Sign' >
                <img id='ocean' src={coastal}/>
                <h1 id='font'>Coastal Cities to Be Inundated by 2050</h1>
                </a>
                </div>

                <div className='box1'>
                <a href='/Sign' >
                <img id='ocean' src={pandemic}/>
                <h1 id='font'>Pandemic a Potent Call for Urgent Change</h1>
                </a>
                </div>

                <div className='box1'>
                <a href='/Sign' >
                <img id='ocean' src={ocean}/>
                <h1 id='font'>Ocean Sewage Pollution Persists</h1>
                </a>
                </div>







        </div>

        <div className='Comment'>
                <h1> This is for comments</h1>
        </div>

    </div>
  )
}

export default News;