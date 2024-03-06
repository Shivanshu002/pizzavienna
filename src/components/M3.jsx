import React from 'react'
import '../css/home.css';
import video from '../assests/background.mp4';

const M3 = () => {
    return (
        <>

            <section className='relative'>
                <section className='relative font-cooperBlack'>
                    <div className='w-full h-full object-cover absolute inset-0 bg-blue-700'>
                        {/* <source src={video} type='video/mp4' /> */}
                    </div>
                    <div className='w-full h-screen bg-opacity-50  relative z-10 pl-4 pr-4'>
                        <div className='flex gap-[20px]'>
                            <h1 className='w-1/4 text-[55px] text-white font-cooperBlack font-semibold'>Pasta</h1>
                            <h1 className='w-1/4 text-[55px] text-white font-cooperBlack font-semibold'>Salad</h1>
                            <h1 className='w-1/4 text-[55px] text-white font-cooperBlack font-semibold'>Wraps</h1>
                            <h1 className='w-1/4 text-[55px] text-white font-cooperBlack font-semibold'>Wings</h1>
                        </div>


                        <div className='flex gap-[10px]'>

                            {/* Pasta*/}
                            <div className='w-1/4'>

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

                            {/* salad */}

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




                            </div>

                            {/* Wraps*/}

                            <div className='w-1/4'>

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


                            {/* Wings */}

                            <div className='w-1/4'>

                                <div >
                                    <p className='discription-text'>Hot, Medium, BBQ, Garlic Parmigiana </p>

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
                                    <h2 className='text-white text-[27px] underline'>BONE-IN , BONELESS</h2>

                                </div>

                            </div>

                        </div>
                    </div>

                </section>

            </section>



        </>
    )
}

export default M3