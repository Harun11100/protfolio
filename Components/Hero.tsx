import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      
      <Spotlight className='-top-40 -left-10
      md:-left-32 md:-top-20 h-screen ' fill='white'/>
      <Spotlight className='top-10 left-full h-[80vh]
     w-[50vw] ' fill='purple'/>
      <Spotlight className='-top-27 left-80
      h-[80vh] w-[50vh]' fill='blue'/>
      
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.1]  flex items-center justify-center absolute top-0 left-0">
     
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"/>
      
    </div>
    <div className=' flex justify-center relative my-20 z-10' >
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-s text-center text-blue-100 max-w-80 '>
                Welcome to My Portfolio
            </h2>
            <TextGenerateEffect 
            className='text-center text-[40px] 
            md:text-5xl lg:text-6xl'
            words='Crafting IT Solutions and Enhancing Productivity'/>
            
            <TextGenerateEffect 
            className='text-center text-white text-[15px] 
            md:text-xl lg:text-3xl'
            words=' Hi there ! I am Md Harun Or Rashid, a specialize in creating dynamic web applications and optimizing business processes with advanced tools.'/>
            
          
        
            <a href='#about'>
            <MagicButton 
            title='Show my work ' position='right' icon={<FaLocationArrow/>}  otherClasses=''  />
            </a>        
      </div>
    </div>
      </div>    
  )
}

export default Hero 