'use client'

import { geistMono } from "@/config/font"
import { useUIStore } from "@/store"
import Link from "next/link"
import clsx from "clsx";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu)

    return (
        <>
            <nav className="flex px-5 justify-between items-center w-full">
                {/* logo */}
                <div>
                    <Link
                        href="/">
                        <span className={`${geistMono.className} antialiased font-bold`}>Teslink</span>
                        <span> | shop</span>
                    </Link>
                </div>

                {/* center menu */}
                <div className="hidden sm:block ">

                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kid">Niños</Link>

                </div>

                {/* search, cart. menu */}
                <div className="flex items-center">

                    <Link href="/search" className="mx-2">
                        < IoSearchOutline className="w-5 h-5" />
                    </Link>

                    <Link href="/cart" className="mx-2">
                        <div className="relative ">
                            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-600 text-white">3</span>
                            <IoCartOutline className="h-5 w-5" />
                        </div>
                    </Link>

                    <button
                        onClick={openSideMenu} 
                        className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                        >
                            Menú
                    </button>
                </div>

            </nav>
        </>
    )
}
