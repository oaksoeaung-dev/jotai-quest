"use client";
import React from 'react'
import DecreaseBtn from './DecreaseBtn'
import IncreaseBtn from './IncreaseBtn'
import { globalCountState } from '../state/Count';
import { useAtom } from 'jotai';

const Counter = () => {
  const [count, ] = useAtom(globalCountState);
  return (
    <div className="max-w-40 max-h-10 flex h-10 rounded-lg overflow-hidden">
      <DecreaseBtn />
      <div className="bg-gray-200 w-full h-full flex items-center justify-center">{count}</div>
      <IncreaseBtn />
    </div>
  )
}

export default Counter