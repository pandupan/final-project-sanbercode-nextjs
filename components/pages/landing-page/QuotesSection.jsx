/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { useRef } from 'react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';

const imageSlider = [
  {
    id:1,
    imageUrl:'https://images.unsplash.com/photo-1499752228123-488eb1d280dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    section:'~Babe Ruth', 
    subsection:"'Don't let the fear of striking out keep you from playing the game.'",
  },
  {
    id:2,
    imageUrl:'https://images.unsplash.com/photo-1541110729715-84eeda8be2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    section:'~Ralph Waldo Emerson',
    subsection:"'The only person you are destined to become is the person you decide to be.'",
  },
  {
    id:3,
    imageUrl:'https://images.unsplash.com/photo-1498598457418-36ef20772bb9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    section:'~Mahatma Gandhi',
    subsection:"'Be the change that you wish to see in the world.'",
  },
  {
    id:4,
    imageUrl:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    section:'~Lao Tzu',
    subsection:'"The journey of a thousand miles begins with a single step."',
  },
  {
    id:4,
    imageUrl:'https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    section:'~Audrey Hepburn',
    subsection:"'The most important thing is to enjoy your life - to be happy - it's all that matters.'",
  },
]

const QuotesSection = () => {
  const swiperRef = useRef(null);
  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };
  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div id='quote' className="relative flex justify-center items-center w-full h-[450px] sm:h-[650px] mb-20 z-[1] bg-white">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      // pagination={{ clickable: true }}
      ref={swiperRef}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      navigation={true}
      className="w-full h-full"
    >
      {imageSlider.map((item,id)=>(
        <SwiperSlide key={item.id}>
          <div className="container absolute inset-0 flex items-center xl:px-20 text-white z-20">
            <div className='sm:space-y-4'>

              <motion.h3 
                className='hidden md:block text-2xl font-normal'
                  initial={{ 
                    opacity: 0,
                    y : id % 2 === 1 ? -100 : 0,
                    x : id % 2 === 1 ? 0 :100 
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0, 
                    x:0 
                  }}
                  transition={{
                    duration: 0.8
                  }}
              >
                {item.subsection}
              </motion.h3>
              <div className='space-y-2 sm:space-y-6'>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl xl:6xl font-black font-montserrat"
                    initial={{ 
                      opacity: 0,
                      y : id % 2 === 1 ? -100 : 0,
                      x : id % 2 === 1 ? 0 :100 
                    }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0, 
                      x:0 
                    }}
                    transition={{
                      duration: 0.8
                    }}
                  >
                    <AnimatePresence>
                      {item.section.split('').map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, rotate: 30 }} 
                          whileInView={{ opacity: 1, rotate: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                          }}
                          style={{ display: 'inline-block', transformOrigin: 'center' }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                </motion.h1>
              </div>
            </div>
          </div>
          <div className='hidden w-full h-full absolute md:flex justify-between items-center z-[19]'>
            <button onClick={slidePrev} className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 ml-4 p-1">
              <BsArrowLeft size={15}/>
            </button>
            <button onClick={slideNext} className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 mr-4 p-1">
              <BsArrowRight size={15}/>
            </button>
          </div>
          <div
            className='absolute inset-0 z-[2] bg-cover'
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
          />
        </SwiperSlide>
      ))}
      
    </Swiper>
  </div>
  )
}

export default QuotesSection
