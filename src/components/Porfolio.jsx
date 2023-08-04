import React from 'react'

import bmiCalculator from '../assets/portfolio/bmiCalculator.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Porfolio = () => {
  const portfolios = [
    {
      id: 1,
      src : bmiCalculator,
      demoURL : "https://main--gleeful-genie-ff411f.netlify.app/",
      codeURL : "https://github.com/rapkshn47/BMI-calculator"
    },
    {
      id: 2,
      src : reactParallax,
      demoURL : ""
    },
    {
      id: 3,
      src : navbar,
      demoURL : "https://github.com",
      codeURL : ""
    },
    {
      id: 4,
      src : reactSmooth,
      demoURL : "",
      codeURL : ""
    },
    {
      id: 5,
      src : installNode,
      demoURL : "",
      codeURL : ""
    },
    {
      id: 6,
      src : reactWeather,
      demoURL : "",
      codeURL : ""
    },
  ]

  const redirectURL = (url)=>{
    window.location.href = url
  }

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            {/* -----------Structure for Card-------------------- */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {
                portfolios.map(({id,src, demoURL, codeURL}) => (
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-100 hover:scale-105'/>
                  <div className='flex justify-center items-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={()=>redirectURL(demoURL)}>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={()=>redirectURL(codeURL)}>Code</button>
                  </div>
                </div>

                ))
              }
            </div>
            {/* ------------------------------------------------- */}
        </div>
    </div>
  )
}

export default Porfolio