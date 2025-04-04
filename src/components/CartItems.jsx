import React, { useState } from 'react'
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';

const CartItems = ({ name, id, price, image, qty }) => {
  const [increase, setIncrease] = useState()
  let dispatch = useDispatch()
  return (
    <div className='w-[100%] h-[120px]  p-2 shadow-lg flex justify-between'>
      <div className='w-[60%] h-full  flex gap-5 '>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
          <img src={image} alt='' className='object-cover ' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>
          <div className='text-lg text-gray-600 font-bold'>{name}</div>
          <div className='w-[110px] h-[50px] text-orange-500 border-2 text-xl border-orange-500 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg'>
            <button className='w-[30%] h-full hover:bg-slate-100 bg-white cursor-pointer flex justify-center items-center' >-</button>
            <span className='w-[40%] h-full  bg-slate-200 flex justify-center items-center'>{qty}</span>
            <button className='w-[30%] h-full hover:bg-slate-100 bg-white cursor-pointer flex justify-center items-center'>+</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end gap-10'>
        <span className='text-xl text-orange-500 font-semibold'>{price}</span>
        <RiDeleteBin6Line size={20} className='cursor-pointer' onClick={() => dispatch(RemoveItem(id))} />
      </div>
    </div>
  )
}

export default CartItems