import React from 'react';
import image from '../waterfall.jpg';

function Home() {
    return (
        <main>
            <img
            src={image}
            alt="waterfall"
            className="absolute object-cover w-full h-full"
            />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-54 px-8'>
                <h1 className='text-6xl text-gray-800 font-bold cursive leading-none lg:leading-snug home-name'>Hello, this is my main page</h1>
            </section>
        </main>
    )
}

export default Home;