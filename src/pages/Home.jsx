import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../category'
import Card from '../components/Card'
import { food_items } from '../Food'
import { dataContext } from '../App'
import { RxCross2 } from "react-icons/rx";
import CartItems from '../components/CartItems'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


function Home() {
    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
    const filter = ((category) => {
        if (category === "All") {
            setCate(food_items)
        } else {
            let newList = food_items.filter((item) => (item.food_category === category))
            setCate(newList)
        }

    })

    let items = useSelector(state => state.cart)

    let subTotal = items.reduce((total, item) => total + item.qty * item.price, 0)

    let deliveryFee = 20

    let taxes = subTotal * (0.5 / 100)

    let total = Math.floor(subTotal + deliveryFee + taxes)

    return (
        <div className='w-full min-h-screen bg-slate-200 p-0 bg-cover'>
            <Nav />
            {!input ? <div className=' flex flex-wrap justify-center gap-6 w-[100%]'>
                {Categories.map((item) => {
                    return <div key={item.id} className='flex flex-col items-center justify-center w-[140px] h-[150px] text-[20px] gap-2 text-semibold bg-white rounded-md shadow-xl hover:bg-orange-100 cursor-pointer transition duration-500'
                        onClick={() => filter(item.name)}>
                        {item.icon}
                        {item.name}
                    </div>
                })}
            </div> : null}

            <div className='w-full flex flex-row flex-wrap gap-5 justify-center pt-8 pb-8'>
                {cate.length > 1 ?
                    cate && cate.map(item => (
                        <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
                    )) : <div className='mt-20 text-2xl text-gray-600 text-center font-semibold'> No dish found</div>}
            </div>
            <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white p-6 transition-all duration-500 items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"} `}>
                <header className='w-[100%] flex justify-between items-center  '>
                    <span className='font-semibold text-m  text-orange-500'> Order Items </span>
                    <RxCross2 size={20} className='font-bold  text-orange-500 cursor-pointer hover:text-gray-600'
                        onClick={() => setShowCart(false)} />
                </header>
                {items.length > 0 ?
                    <>
                        <div className='w-full mt-9 flex flex-col gap-8'>
                            {items.map((item) => (
                                <CartItems name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                            ))}
                        </div>
                        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 '>
                            <div className='w-full flex justify-between items-center '>
                                <span className='text-gray-600 font-semibold'>Subtotal</span>
                                <span className='text-orange-500 font-semibold text-md '>Rs {subTotal}/-</span>
                            </div>
                            <div className='w-full flex justify-between items-center '>
                                <span className='text-gray-600 font-semibold'>Delivery Fee</span>
                                <span className='text-orange-500 font-semibold text-md '>Rs {deliveryFee}/-</span>
                            </div>
                            <div className='w-full flex justify-between items-center '>
                                <span className='text-gray-600 font-semibold'>Taxes</span>
                                <span className='text-orange-500 font-semibold text-md '>Rs {taxes}/-</span>
                            </div>
                        </div>
                        <div className='w-full text-xl flex justify-between items-center p-8'>
                            <span className=' text-gray-600 font-semibold'>Total</span>
                            <span className='text-orange-500 font-semibold text-md '>Rs {total}/-</span>
                        </div>
                        <button className='bg-orange-300 w-[80%] p-3 rounded-md cursor-pointer  hover:bg-orange-200 text-white transition-all ' onClick={() => { toast.success("Order Placed...") }} >Place Order</button>
                    </> : <div className='mt-20 text-2xl text-gray-600 text-center font-semibold'>Your cart is empty</div>}
            </div>
        </div>
    )
}

export default Home



