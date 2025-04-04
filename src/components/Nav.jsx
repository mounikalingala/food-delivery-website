import React, { useContext, useEffect, useState } from 'react'
import { IoFastFoodSharp, IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

import { food_items } from '../Food';
import { dataContext } from '../App';
import { useSelector } from 'react-redux';
const Nav = () => {


    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.toLowerCase().includes(input))
        setCate(newList)
    }, [input])

    let items = useSelector(state => state.cart)
    console.log(items)
    return (
        <div className='w-full h-[100px] flex flex-row justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] rounded-md bg-white flex justify-center items-center shadow-xl'>
                <IoFastFoodSharp className='w-[30px] h-[30px] text-orange-500 ' />
            </div>
            <form className='w-[45%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl'
                onSubmit={(e) => e.preventDefault()}>
                <IoSearch className='text-orange-500 w-[20px] h-[20px] ' />
                <input type='text' onChange={(e) => setInput(e.target.value)} value={input} className='w-[100%] outline-none text-[16px] md:text-[20px] ' placeholder='search items...' />
            </form>
            <div className='w-[60px] h-[60px] rounded-md bg-white flex justify-center items-center shadow-xl relative cursor-pointer'
                onClick={() => setShowCart(true)}>
                <span className='absolute top-0 right-2 text-orange-500 font-bold text-xl'>{items.length}</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-orange-500 ' />
            </div>
        </div>
    )
}

export default Nav