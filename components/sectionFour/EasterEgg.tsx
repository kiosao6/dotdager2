'use client'


import React, { useState } from 'react';

export const EasterEgg = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      {
        showGame == false && (
          <button className='mx-auto w-fit flex mt-12 uppercase border h-fit px-8 rounded-full py-4 border-neutral-700 justify-center' onClick={() => setShowGame(true)}>Click me</button>
        )
      }
      {
        showGame && (
          <div className='mt-12'>
            <iframe
              src="https://tbot.xyz/lumber/"
              title="Minijuego"
              width="100%"
              height="600px"
              allowFullScreen
            ></iframe>
          </div>
        )
      }


    </>
  );
};



