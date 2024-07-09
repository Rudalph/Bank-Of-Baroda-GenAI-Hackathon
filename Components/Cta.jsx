import React from 'react'

export default function Cta() {
  return (
    <section className='mt-10'>
      <div className="px-2 lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-[#162B75] sm:text-4xl lg:text-4xl">
              Get full access to Platform
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 font-semibold">
              Subscribe to Zenith - AI and get access to all features of of AI powered system. We belive in 
              Elevating banking excellence with peak performance and passionate service.
            </p>

            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    type="email"
                    placeholder="Email"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-[#F86E23] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://indiaeducationdiary.in/wp-content/uploads/2024/06/image003.jpg"
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}
