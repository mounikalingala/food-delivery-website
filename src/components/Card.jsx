import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Card = ({ name, image, id, type, price }) => {
    let dispatch = useDispatch()
    return (
        <div className='w-[300px] h-[400px] bg-white p-4 flex flex-col gap-3 rounded-lg shadow-xl hover:border-2 border-orange-300 '>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg '>
                <img src={image} alt="image" className='object-cover' />
            </div>
            <div className='text-xl font-bold'>{name}</div>
            <div className='flex justify-between items-center'>
                <div className='text-orange-500 font-semibold text-lg'>{price}/-</div>
                <div className='flex justify-center items-center text-orange-500 font-semibold text-lg gap-2'>
                    {type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />}
                    <span>{type}</span>
                </div>

            </div>
            <button className='bg-orange-300 w-full p-3 rounded-md cursor-pointer  hover:bg-orange-200 text-white transition-all '
                onClick={() => dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 }))}>Add to dish</button>
        </div>
    )
}

export default Card