import React from 'react'

export function Footer() {
  return (
    <section className="overflow-hidden py-12 bg-[#f4f4f4] bottom-0 w-full">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img
                    src="/Zenith_AI_logo.png"
                    alt = "BOB logo"
                    width = "90"
                    height = "66"
                    className="mr-1"
                />
                <span className="ml-4 text-lg font-bold text-[#F86E23]">Zenith-AI</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">Elevating banking excellence with peak performance and passionate service.</p>
                <p className="text-sm text-[#75757A]">
                  &copy; Copyright 2024. All Rights Reserved by Zenith-AI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-base font-bold uppercase">
                About Us
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Overview
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    History
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Awards
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-base font-bold uppercase w-full">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    RBI Kehta Hai
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Doorstep Banking
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-base font-bold uppercase">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-[#75757A]" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer;