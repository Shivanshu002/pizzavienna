import React from 'react'
import logo from '../assests/pizza vienna logo.jpg';
import { SiYelp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const Navbar = () => {
    return (

        <>
            <section className='flex items-center justify-between font-roboto'>
                <div className='w-[1250px] h-[70px] bg-red-700/75 rounded-[10px] flex items-center justify-between pr-5 pl-3 p-2'>
                    <div>
                        {/* <img src={logo} className='w-[60px] h-[60px] ' /> */}
                    </div>
                    <ul className='flex items-center gap-4 text-white font-medium text-[25px]'>
                        <li>Home</li>
                        <li>Menu</li>
                        <li><a href='https://www.toasttab.com/pizzavienna/rewardsSignup?utm_source=undefined&utm_content=home&utm_medium=toast_sites&utm_term=nav&utm_campaign=rewards'>  Rewards </a></li>
                        <li><a href="https://www.toasttab.com/pizzavienna/giftcards?utm_source=undefined&utm_content=home&utm_medium=toast_sites&utm_term=nav&utm_campaign=giftcards">  Gift card</a></li>
                        <li>Blogs</li>
                        <li><a href='https://www.toasttab.com/pizzavienna/marketing-signup?utm_source=undefined&utm_content=home&utm_medium=toast_sites&utm_term=nav'> Email Updates</a></li>
                    </ul>

                    <a href='https://order.toasttab.com/online/pizzavienna'><button className=' w-[170px] p-1.5 bg-blue-700/55 hover:bg-blue-900/90 rounded-[8px] shadow-inner shadow-blue-600 text-[18px] font-medium text-white'>Order Online</button></a>


                </div>
            </section>


            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-0px] duration-300'>
                        <a className='flex justify-end gap-8 items-center  text-[20px] w-full text-gray-300 bg-blue-700/55 p-2 ' href='https://www.yelp.com/biz/pizza-vienna-vienna'>
                            Yelp<SiYelp size={25} />

                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-end gap-7 items-center bg-red-700/75 pl-[10px] text-[20px] w-full text-gray-300 p-2 bg-[#333333] ' href='https://www.facebook.com/pizzavienna235'>
                            Facebook<FaFacebookF size={25} />

                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-end gap-7 items-center bg-blue-700/55 pl-[10px] text-[20px] w-full text-gray-300 bg-[#6fc2b0] p-2 ' href='https://www.instagram.com/pizza_vienna/'>
                            Instagram<FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-end gap-7 bg-red-700/75 items-center pl-[20px] text-[20px] w-full text-gray-300 bg-[#565f69] p-2 ' href='#'>
                            TikTok<FaTiktok size={25} />
                        </a>
                    </li>
                </ul>

            </div>

        </>
    )
}

export default Navbar