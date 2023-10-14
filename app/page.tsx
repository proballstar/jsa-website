import Image from 'next/image'
import { officers } from './meta'
import { off } from 'process'



export default function Home() {
  return (
    <main className="w-screen bg-gray-100 flex min-h-screen flex-col items-center justify-center">
      <div className='gap-[2rem] flex flex-col'>
        <h1 className='text-7xl font-extrabold text-red-900'>Lynbrook JSA</h1>
        <div>
          <h2 className='text-4xl font-bold text-blue-900'>What We Do</h2>
          <p className='text-2xl font-[500]'>Summary: </p>
        </div>
        <h2 className='text-4xl font-bold text-blue-900'>Officers:</h2>
        <div>
          <div className='flex gap-3 flex-row'>
            {officers.map((officer) => (
              <div className=' w-[20vw] h-[40vh] grid grid-rows-6 shadow-md rounded-[1rem] border-2'>
                <div className='row-span-3'>
                  <img 
                    src={officer.image} 
                    alt={officer.name} 
                    className='aspect-auto'
                  />
                </div>
                <div className='row-span-3 px-6 py-5 font-semibold'>
                  <h2 className='text-3xl font-bold'>
                    {officer.name}
                  </h2>
                  <h2 className='text-blue-900 font-semibold text-[1.5rem]'>
                    {officer.position}
                  </h2>
                  <h2 className='text-2xl'>{officer.blurb}</h2>
                  <div>
                    {officer.socials.map((social) => {
                      let code = ""
                      if(social.name == "Instagram") {code = "IG"}
                      return (
                        <>
                          <a href={social.link}>
                            <div>{code}</div>
                          </a>
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-[0.75rem]'>
          <h2 className='text-4xl font-bold text-blue-900'>Get Involved</h2>
          <h3 className='text-2xl font-[500]'>how to get involved</h3>
        </div>
      </div>
    </main>
  )
}
