import '../css/home.css';
import video from '../assests/background.mp4';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import cake from '.././assests/pngwing.com (7).png';

const M1 = () => {



    return (
        <>

            <section className='w-full min-h-[2160px]   bg-blue-700 font-cooperBlack'>
                <div className=''>
                    <div className='flex gap-[20px] bg-red-600'>
                        <h1 className='w-1/4 text-[50px] text-white font-cooperBlack font-semibold'>Sides</h1>
                        <h1 className='w-1/4 text-[50px] text-white font-cooperBlack font-semibold'>Subs</h1>
                        <h1 className='w-1/4 text-[50px] text-white font-cooperBlack font-semibold'>Desserts</h1>
                        <h1 className='w-1/4 text-[50px] text-white font-cooperBlack font-semibold'>Salad</h1>
                    </div>
                    <div className='flex gap-[20px] pr-2 pl-2'>

                        <div className='w-1/4'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Onion Rings</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>French Fries</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;4.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Fried Mushroom</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Mozzarella Sticks</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Jalapeno Poppers</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Chicken Tenders</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Chicken Tenders</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Mac and Cheese Bites</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Garlic Knots</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;2.25</p>
                                    </div>
                                </div>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Garlic Bread with Cheese</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;9.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Garlic parm sauce, mozzarella cheese</p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Garlic Bread </h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;9.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Garlic parm sauce</p>

                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Side Eggplant </h2>
                                    <p className='discription-text'>with Marinara Sauce and Parmesan Cheese</p>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;9.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Side Meatball </h2>
                                    <p className='discription-text'>with Marinara Sauce and Parmesan Cheese</p>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;9.99</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* subs */}
                        <div className='w-1/4'>
                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text pt-7'>Cheese Steak</h2>
                                    <div className='price-box'>
                                        <div>
                                            <i className='text-[18px] text-[#FFD700] font-cooperBlack '>8 inches</i>
                                            <p className='pizza-price '>&#36;8.99</p>
                                        </div>
                                        <div>
                                            <i className='text-[18px] text-[#FFD700] font-cooperBlack '>12 inches</i>
                                            <p className='pizza-price '>&#36;12.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Beef Steak, onions, pappers, mayo, spring mix, provolone cheese and mushrooms</p>

                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Chicken Steak</h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;9.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Chicken breast slice, onions, pappers, mayo, spring mix, provolone cheese and mushrooms</p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Chicken Parm</h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;8.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Breaded chicken, marinara sauce, provolone cheese</p>

                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Meatball Parm</h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;8.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Meatball, marinara sauce, mozzarella cheese</p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Italian Cold Cut</h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;7.99</p>
                                        <p className='pizza-price '>&#36;7.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Ham, Salami, Provolone cheese, oregano, parmesan, house italian dressing</p>

                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Chicken Gyro</h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;8.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Pita, Tzatziki sauce, tomatoes, chicken, feta cheese, lettuce and onions</p>

                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Beef Gyro </h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;8.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Pita, Tzatziki sauce, tomatoes, chicken, feta cheese, lettuce and onions</p>

                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Philly Steak  </h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;8.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Steak slice, onions, peppers, mushrooms, american and provolone cheese</p>

                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Eggplant Parmigiana</h2>
                                    <div className='price-box'>
                                        <p className='pizza-price '>&#36;8.99</p>
                                        <p className='pizza-price '>&#36;12.99</p>
                                    </div>
                                </div>
                                <p className='discription-text'>Eggplant with marinara sauce, parmesan and mozzarella cheese</p>

                            </div>

                        </div>



                        {/* desserts */}

                        <div className='w-1/4'>


                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Chocolate Chip Cookies</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;2.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Cheesecake</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;4.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Carrot Cake</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;5.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Oreo Cake</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;4.99</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='pizza-name-text'>Chocolate Cake</h2>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <p className='pizza-price '>&#36;4.99</p>
                                    </div>
                                </div>
                            </div>


                            {/* <div className=" mt-10">
                                    <img className='' src={cake} alt="cake" />
                                </div> */}


                            {/* Pasta*/}
                            <div>
                                <h1 className=' text-[50px] bg-red-600 text-white font-cooperBlack font-semibold pl-1 rounded-[5px]'>Pasta</h1>

                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h2 className='pizza-name-text'>Chicken Fettuccine</h2>
                                        <div className='price-box'>
                                            <div>
                                                <p className='pizza-price '>&#36;14.99</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='discription-text'>Pasta, grilled chicken, alfredo sauce,  parmesan</p>
                                </div>

                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h2 className='pizza-name-text'>Spaghetti Meatball</h2>
                                        <div className='price-box'>
                                            <div>
                                                <p className='pizza-price '>&#36;14.99</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='discription-text'>Pasta, Meatballs, Marinara, Paremesan </p>
                                </div>

                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h2 className='pizza-name-text'>Ziti</h2>
                                        <div className='price-box'>
                                            <div>
                                                <p className='pizza-price '>&#36;14.99</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p className='discription-text'>Crispy chicken, American, provolone and mozzarella cheese </p> */}
                                </div>

                            </div>

                            {/* Wraps*/}

                            <div >
                                <h1 className=' text-[50px] text-white font-cooperBlack font-semibold pl-1 rounded-[5px] bg-red-600'>Wraps</h1>

                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h2 className='pizza-name-text'>Chicken Caesar</h2>
                                        <div className='price-box'>
                                            <div>
                                                <p className='pizza-price '>&#36;10.99</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='discription-text'>Wrap, Lettuce, Grilled chicken, Parmesan, Onions, Dressing </p>
                                </div>

                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h2 className='pizza-name-text'>Grill Chicken</h2>
                                        <div className='price-box'>
                                            <div>
                                                <p className='pizza-price '>&#36;10.99</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='discription-text'>Wrap, Lettuce, Grilled chicken, Tomatoes, Onions, Cheese and Mayo </p>
                                </div>

                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h2 className='pizza-name-text'>Buffalo Chicken</h2>
                                        <div className='price-box'>
                                            <div>
                                                <p className='pizza-price '>&#36;10.99</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='discription-text'>Wrap, Grilled chicken, Tomatoes, Onions, Blue cheese, Cheese, Lettuce </p>
                                </div>

                            </div>


                        </div>

                        {/* salad and  */}
                        <div className='w-1/4'>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Caesar</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;7.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Lettuce, dressing, croutons, parmesan </p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Chicken Caesar</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;7.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Chiken, Lettuce, Dressing, Croutons, Parmesan </p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Garden</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;8.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Lettuce, Cucumber, Green papper, Carrot, Tomato, Onions, Istalian vinigrette </p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>Greek</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;9.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Lettuce, Green papper, Carrot, Tomato, Onions, Banana papper, Feta cheese, Olives, Greek dressing </p>
                            </div>

                            <div >
                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>House Chef</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;9.99</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='discription-text'>Spring mix, Croutons, Tomatoes, Lettuce, Cucumber, Carrots, Green papper</p>

                            </div>



                            <div >
                                <h1 className=' text-[50px] text-white font-cooperBlack font-semibold pl-1 rounded-[5px] bg-red-600'>Wings</h1>

                                <p className='discription-text '>Hot, Medium, BBQ, Garlic Parmigiana </p>

                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>5 PCS</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;9.99</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>10 PCS</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;16.99</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>20 PCS</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;29.99</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <h2 className='pizza-name-text'>30 PCS</h2>
                                    <div className='price-box'>
                                        <div>
                                            <p className='pizza-price '>&#36;41.99</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='text-white text-[27px] underline'>BONE-IN,  BONELESS</h2>

                            </div>

                        </div>


                    </div>
                </div>




            </section>

        </>
    )
}

export default M1