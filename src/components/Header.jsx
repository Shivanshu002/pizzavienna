import React from 'react'
import headerImage from '../assests/pizzaHeader.webp';
import { BsTelephoneForward } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Navbar from './Navbar';



const Header = () => {
    return (

        <>
            <section className='font-roboto'>
                <div className='max-w-[1900px] h-[450px] '>
                    <div style={{ backgroundImage: `url('${headerImage}')` }} className='w-full h-full bg-cover object-cover'>
                        <div className='bg-black/60 w-full h-full  flex flex-col gap-9 items-center '>
                            <div className='mt-6'>
                                <Navbar />
                            </div>
                            <div className=' w-[1000px] h-fit border-b flex justify-between items-center mt-[100px]'>
                                <h1 className='text-[30px] text-white indent-2 font-semibold'>Welcome to Pizza Vienna</h1>
                                <a href='https://pizzavienna.com/order'><button className=' md:hidden w-[170px] p-1.5 bg-blue-700/55 hover:bg-blue-900/90 rounded-[8px] shadow-inner shadow-blue-600 text-[18px] font-medium text-white'>Order now</button></a>
                                <h2 className='text-[30px] text-white indent-2 font-semibold'>Best place in Vienna VA</h2>
                            </div>
                            <div className='bg-blue-700/55 w-[850px] h-fit rounded-[10px] shadow-inner shadow-blue-900 p-4 flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <CiLocationOn className='text-[30px] text-white indent-2 font-semibold' />
                                    <h1 className='text-[30px] text-white indent-2 font-semibold hover:underline'>
                                        <a href='https://www.google.com/maps/place/Glyndon+Plaza,+235+Maple+Ave+E,+Vienna,+VA+22180,+USA/@38.9041378,-77.2608213,17z/data=!3m1!4b1!4m6!3m5!1s0x89b64bb65ee2c1df:0x4e7deccdc5619f1b!8m2!3d38.9041378!4d-77.2608213!16s%2Fg%2F11b8yk8bgc?entry=ttu'>
                                            235 Maple Ave E, Vienna, VA 22180</a></h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsTelephoneForward className='text-[30px] text-white indent-2 font-semibold' />
                                    <a href='tel:+17033190002' className='text-[30px]  text-white indent-2 font-semibold hover:underline'>(703) 319-0002</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Header