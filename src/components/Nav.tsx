"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const link = usePathname();
  return (
    <div className='bg-sky-100 p-5 shadow-lg rounded-lg mb-10 mt-5 flex items-center gap-2'>
      <Link href={"/"} className={`text-xs px-2 py-1 rounded-full font-bold text-gray-700 ${link === '/' ? 'bg-teal-200': ''}`}>Home</Link>
      <Link href={"/first-atom"} className={`text-xs px-2 py-1 rounded-full font-bold text-gray-700 ${link === '/first-atom' ? 'bg-teal-200': ''}`}>First Atom</Link>
      <Link href={"/persisting-state-value"} className={`text-xs px-2 py-1 rounded-full font-bold text-gray-700 ${link === '/persisting-state-value' ? 'bg-teal-200': ''}`}>Persisting State Value</Link>
      <Link href={"/todo"} className={`text-xs px-2 py-1 rounded-full font-bold text-gray-700 ${link === '/todo' ? 'bg-teal-200': ''}`}>Todo</Link>
    </div>
  )
}

export default Nav