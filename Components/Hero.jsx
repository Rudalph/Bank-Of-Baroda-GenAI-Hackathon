import React from 'react'

export function Hero() {
  return (
    <div className="relative w-full bg-white pt-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-[#162B75] md:text-4xl lg:text-6xl">
            Elevating banking excellence with peak performance and passionate service.
          </h1>
          <div className="mt-8">
            <button
              type="button"
              className="rounded-md bg-[#F86E23] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f7a173] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Explore More 
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="/Zenith-AI.png"
            alt="Zenith-AI"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero;