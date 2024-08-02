import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Discover & Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptopia is a platform that provides AI-powered prompts for writers, artists, and creators. 
            <br className='max-md:hidden'/>
            Our prompts are generated using the latest AI technology to help you overcome writer's block and spark creativity.
        </p>
        <Feed/>
    </section>
  )
}

export default Home;