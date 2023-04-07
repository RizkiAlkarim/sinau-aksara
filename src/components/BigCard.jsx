import React from 'react'

function BigCard({aksara, letter, onClick, isCardClicked}) {
  return (
    <div className={`absolute h-full inset-0 bg-white ${isCardClicked ? 'block' : 'hidden'}`} onClick={onClick}>
      <div
          className={`absolute z-10 mx-20 my-32 w-7/12 lg:w-5/12 xl:w-4/12 h-5/12 lg:h-6/12 xl:h-5/12 bg-white rounded-2xl border-4 border-red-600 ${isCardClicked ? 'block' : 'hidden'}`}
          
      >
          <div className=' flex flex-col justify-between pt-8 pb-7 '> 
              <h1 className='w-full mb-28 font-bold md:text-[10rem] text-7xl text-red-600 inline-block text-center align-middle'>ꦲ</h1>
              <h1 className={`md:font-bold font-thin md:text-6xl text-3xl text-center text-black`}>ha</h1>
          </div>
      </div>
    </div>
  )
}

export default BigCard