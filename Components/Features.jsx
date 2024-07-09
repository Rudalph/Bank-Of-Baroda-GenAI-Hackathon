import React from 'react'
import { FileText, SwatchBook, MessagesSquare, Handshake } from 'lucide-react'

export function Feature() {
  return (
    <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8 mt-10 bg-[#FCE0D3] w-full">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-bold uppercase tracking-widest text-black">
            features of Zenith-AI
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-[#162B75] sm:text-4xl lg:text-5xl">
          What Features Do We Provide ?
        </h2>
        <p className="mt-10 text-base font-semibold leading-relaxed text-gray-600">
        Zenith-AI offers four key features designed to simplify the banking experience for our customers. 
        Our AI-powered system ensures an easy and seamless banking journey.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FileText className="h-14 w-14 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-bold text-[#162B75]">Forms Generator</h3>
          <p className="mt-4 text-sm text-gray-600 text-justify">
          Customers can automatically generate bank forms like account openings or fixed deposit forms. These forms are prefilled with their details like name, account no, DOB etc. automatically. Customers can then edit these forms as needed and download them instantly. 
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <SwatchBook className="h-14 w-14 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-bold text-[#162B75]">Document Simplifier</h3>
          <p className="mt-4 text-sm text-gray-600 text-justify">
          Complex banking documents like loan agreements, terms and conditions, and credit card statements are difficult to understand those will be simplified into easy-to-understand language, and users will be able to interact and chat with specific parts of these documents for better clarity.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <MessagesSquare className="h-14 w-14 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-bold text-[#162B75]">Chat Assistance</h3>
          <p className="mt-4 text-sm text-gray-600 text-justify">
          A humanized chatbot designed to assist customers by answering queries ranging from simple banking questions to complex bank fraud legal issues. This chatbot will be trained using data from BOB's FAQ website and other authentic, relevant datasets to ensure accurate and reliable responses.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Handshake className="h-14 w-14 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-bold text-[#162B75]">Financial Advisor</h3>
          <p className="mt-4 text-sm text-gray-600 text-justify">
          Periodically, customers will fill out a form detailing their spending on household activities like education, food, and electricity. Based on the spending patterns, an AI system will recommend banking schemes and methods to help the customers optimize their finances and gain benefits.
          </p>
        </div>
      </div>
    </div>
  )
}
