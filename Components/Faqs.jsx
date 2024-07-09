import React from 'react'

export function Faqs() {
    return (
        <section className="px-2 mt-10">
            <div className="mx-auto max-w-7xl py-10">
                <div>
                    <div className="max-w-2xl">
                        <h1 className="text-2xl font-bold text-[#162B75]">Frequently Asked Questions</h1>
                        <p className="mt-4 text-sm leading-6 font-semibold tracking-wide text-gray-500">
                            Below are some general questions that will help you navigate and make the most of our AI-powered banking system.
                        </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

                        <div className="rounded-md border border-black/30 p-6">
                            <dt className="text-lg font-bold leading-6 text-[#75757A]">
                                How do I use the document generator?
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                Fill in your personal details in the pop-up, such as Name, Age, Date of Birth, and Account Number.
                                Then, simply specify which form you want to generate, and our system will handle it for you.
                            </dd>
                        </div>

                        <div className="rounded-md border border-black/30 p-6">
                            <dt className="text-lg font-bold leading-6 text-[#75757A]">
                                How do I use the document simplifier?
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                Just upload any complex bank document you don't understand, and click "Summarize."
                                Our system will generate an easy-to-understand summary and allow you to chat with the document you've uploaded.
                            </dd>
                        </div>

                        <div className="rounded-md border border-black/30 p-6">
                            <dt className="text-lg font-bold leading-6 text-[#75757A]">
                                How do I use the chatbot?
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                Ask any questions you have about banking or any frauds you've encountered.
                                Our chatbot is available 24/7 to assist you and provide solutions, covering everything from banking to legal matters.
                            </dd>
                        </div>

                        <div className="rounded-md border border-black/30 p-6">
                            <dt className="text-lg font-bold leading-6 text-[#75757A]">
                                How do I use the advisor?
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                Submit the requested data in the form periodically to let our AI-powered system understand your spending patterns.
                                This will enable us to assist you with proper plans for optimizing your financial conditions.
                            </dd>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
