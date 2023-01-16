import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      
    <div id='gallery' className='max-w-[1240px] mx-auto'>
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        
        <form className='max-w-[600px] m-auto'>
            <div>
                <h1 className='text-2xl font-bold text-center pt-40 pb-10 '>Register Now </h1>
                <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Enter your Username' />
                <input className='border shadow-lg p-3 w-full my-2 ' type="email" placeholder='Enter your Email' />
                <input className='border shadow-lg p-3 w-full my-2' type="password" placeholder='Enter your password' />
                <input className='border shadow-lg p-3 w-full my-2 ' type="integer" placeholder='Contact Number' />
            </div>
            <center>
            <button className='border rounded-full shadow-lg p-3 mt-8 bg-red-600'>Submit</button>
            </center>
        </form>
    </div>
      {/* <h1 className='text-2xl font-bold text-center p-4'>About Us</h1>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  objectFit='cover'
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        ); */}
    {/* })} */}
    {/* </div> */}
    </div>
    </div>
  );
};

export default Slider;
