"use client"

import Image from 'next/image'
import { officers } from './meta'


export default function Home() {
  return (
    <main className="leading-relaxed p-28 w-screen bg-gray-100 flex min-h-screen flex-col items-center justify-center">
      <div className='gap-[2rem] flex flex-col'>
        <h1 className='text-7xl font-extrabold text-red-900 leading-[3rem]'>Lynbrook JSA</h1>
        <div className='leading-[3rem]'>
          <h2 className='leading-[3rem] text-4xl font-bold text-blue-900'>What is Lynbrook JSA</h2>
          <p className='leading-[3rem] text-2xl font-[500]'>
            Junior State of America is a nationwide organization boasting over 500,000 Members and Alumni.  Founded in 1934, JSA was created by and for young people interested in politics, the government, and contributing to their community.
          
            Lynbrook Politics is a chapter of JSA and it is the only politics club on campus and serves as a nonpartisan forum for students to express their opinions.  Lynbrook Politics is, more specifically, a member of NorCal JSA.

          </p>
        </div>
        <div>
          <h2 className='leading-[3rem] text-4xl font-bold text-blue-900 py-6'>Interested?</h2>
          <button 
            className='text-3xl font-semibold text-red-900 px-6 py-3 rounded-lg shadow-md' 
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfkjhjHdKTgpWMvdlRVuObkZFNAdKEz6kSjpcZ5mPgMCLlVvA/viewform?usp=sf_link ")}
          >Click Here!</button>
        </div>
        <h2 className='leading-[3rem] text-4xl font-bold text-blue-900'>Officers:</h2>
        <div>
          <div className='flex gap-3 flex-row'>
            {officers.map((officer) => (
              <div className=' w-[20vw] grid grid-rows-6 shadow-md rounded-[1rem] border-2'>
                <div className='row-span-3 h-auto'>
                  <img 
                    src={officer.image} 
                    alt={officer.name} 
                    className='aspect-video h-[40vh]'
                  />
                </div>
                <div className='row-span-3 px-6 py-5 font-semibold'>
                  <h2 className='leading-[3rem] text-3xl font-bold'>
                    {officer.name}
                  </h2>
                  <h2 className='leading-[3rem] text-blue-900 font-semibold text-[1.5rem]'>
                    {officer.position}
                  </h2>
                  <h2 className='text-2xl leading-[3rem]'>{officer.blurb}</h2>
                  <div>
                    {officer.socials.map((social) => {
                      if(social.name == 'Email') {
                        return (
                          <>
                          <a href={social.link}>
                            <div>{social.name}</div>
                          </a>
                        </>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-[0.75rem]'>
          <h2 className='text-4xl font-bold text-blue-900 leading-[3rem]'>Get Involved</h2>
          <h3 className='text-2xl font-[500] leading-[3rem]'>how to get involved</h3>
        </div>
      </div>
    </main>
  )
}
