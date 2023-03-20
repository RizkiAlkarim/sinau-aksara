import React from 'react'
import Header from '../components/Header'

function About() {
  return (
    <div className='h-screen'>
        <Header />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center mb-10'>
                <h1 className='font-bold text-3xl text-red-600'>About</h1>
            </div>
            <div className='w-full mx-auto px-5'>
                <p className='indent-5'>
                    <span className='font-bold'>Sinau aksara </span>
                    is a platform to learn javanese character for you who want to start learning javanese language.</p>
            </div>
        </div>
    </div>
  )
}

export default About