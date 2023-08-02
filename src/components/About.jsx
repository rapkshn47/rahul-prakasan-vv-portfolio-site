import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-16'>
            I've successfully earned a Computer Science master's from Central University of Kerala, equipping me with HTML, CSS, JavaScript, and React skills for dynamic web development. My talents extend to design, using Photoshop for diverse visuals like brochures, logos, posters, and templates, enriching my work.
            </p>
            <br />
            <p className='text-xl'>Active in communities, I contribute to knowledge exchanges, fostering collaboration and insightful dialogues. A standout project with Kerala Startup Mission (KSUM) saw me designing badges, ID cards, posters, and banners, showcasing my tech-design fusion. Eager to merge skills, I anticipate impactful contributions in technology and design, bridging innovation and aesthetics.</p>
        </div>

    </div>
  )
}

export default About