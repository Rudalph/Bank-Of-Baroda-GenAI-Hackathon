import React from 'react'

export default function Hero() {
  return (
    <div className="relative w-full bg-white mt-10">
      <div className="mx-auto w-full lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
            <p className="text-xs font-medium md:text-sm">
            Zenith - AI simplifies your banking experience
              <span className="ml-2 cursor-pointer font-bold text-[#162B75]">Read More &rarr;</span>
            </p>
          </div>
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-[#F86E23] md:text-4xl lg:text-6xl">
            Zenith - AI
          </h1>
          <p className="mt-8 max-w-3xl text-xl font-bold text-[#162B75]">
          Elevating banking excellence with peak performance and passionate service.
          </p>
        
        </div>
        <div className="rounded-lg p-4">
        <div style={{ position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginTop: '10px' }}>
      <iframe
        src={`https://www.youtube.com/embed/xRaIJWlhZOA?autoplay=0&mute=0`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

     
        </div>
      </div>
     
    </div>
  )
}
