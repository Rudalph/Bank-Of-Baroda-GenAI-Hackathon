'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import { ImHome } from "react-icons/im";
import Image from 'next/image';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Generator',
        href: '/Generator',
    },
    {
        name: 'Simplifier',
        href: '/Simplifier',
    },
    {
        name: 'Chat-Bot',
        href: '/Chat',
    },
    {
        name: 'Advisor',
        href: '/',
    },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="fixed top-0 z-50 w-full bg-white pt-5">
            <div className="mx-auto flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span>
                        <Image
                            src={"/Zenith_AI_logo.png"}
                            height={70}
                            width={70}
                        />
                    </span>
                    <span className="font-bold text-lg text-[#F86E23]">Zenith-AI</span>
                </div>
                <div className="hidden lg:block mr-20">
                    <ul className="flex justify-center align-middle items-center space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className=" text-sm font-bold text-[#75757A]"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <button
                        type="button"
                        className="rounded-md bg-[#F86E23] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <ImHome size={20} />
                    </button>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <Image
                                                src={"/Zenith_AI_logo.png"}
                                                height={70}
                                                width={70}
                                            />
                                        </span>
                                        <span className="font-bold text-[#F86E23]">Zenith-AI</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-[#F86E23]">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <hr className="border-[#E8E8E8] my-2" />
        </div>
    )
}


