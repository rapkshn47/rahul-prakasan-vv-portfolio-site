import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-16'>
            I hold a Master's degree in Computer Science from Central University of Kerala, equipping me with strong skills in HTML, CSS, JavaScript, and React for building dynamic websites. I'm also a proficient designer, using Photoshop to create visuals like brochures, logos, posters, and templates, which adds a creative touch to my work.
            </p>
            <br />
            <p className='text-xl'>I'm an active contributor in various communities, fostering collaboration and insightful discussions. Notably, I collaborated with Kerala Startup Mission (KSUM) on a project, designing badges, ID cards, posters, and banners that beautifully blend technology and design.</p>
            <br />
            <p className='text-xl'>What sets me apart is my genuine passion for both designing and coding. This makes web development the perfect fit for me, allowing me to merge innovation and aesthetics seamlessly. It's not just a job; it's a fulfilling way to bring my creative and technical talents together.</p>
        </div>

    </div>
  )
}

export default About