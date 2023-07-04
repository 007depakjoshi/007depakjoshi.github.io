"use client"
import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill, BsLinkedin, BsMailbox, BsMailbox2 } from 'react-icons/bs';
import devloper from '../../public/man-one.png';
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='Deepak Joshi Portfolio was made for demonstartion of his skills and showcase of project'></meta>
      </Head>
      <main className='bg-white px-8 dark:bg-gray-400'>
        <section>
          <nav className='p-10 mb-10 flex justify-between'>
            <h1 className='text-xl font-burtons text-violet-500 dark:text-black'>Deepak Joshi</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl text-violet-500 dark:text-black' /></li>
              <li className='px-4 text-violet-500 dark:text-black'><a href=''>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-3xl text-red-500 uppercase'>Deepak Joshi</h2>
            <h4 className='text-violet-500 dark:text-white'>Full Stack Developer</h4>
            <p className='text-md- py-2 leading-8 text-gray-800'>Freelancer providing services for programming and design content needs. Join me down below and let get cracking !</p>
          </div>
          <div className='flex justify-center text-3xl py-4 gap-5'>
            <BsLinkedin />
            <BsMailbox2 />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-red-400 rounded-full w-80 h-80 m-10 overflow-hidden'>
            <Image src={devloper} layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
        <div> 
          <h3 className='text-3xl py-1'> Service I Offer</h3>
        </div>
        </section>
      </main>
    </div>
  )
}
