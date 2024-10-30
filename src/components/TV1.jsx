import React from "react";
// import Header from './Header';
// import video from '../assests/background.mp4';
import "../css/home.css";
import { useEffect, useRef } from "react";
import pizaIcon from '../assests/pizza-7318779_640.png';


const Home = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    let angle = 0;
    const rotateImage = () => {
      if (imageRef.current) {
        angle = (angle + 1) % 360;
        imageRef.current.style.transform = `rotate(${angle}deg)`;
      }
      requestAnimationFrame(rotateImage);
    };
    rotateImage();
  }, []);




  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 300000); // 1000 milliseconds = 1 secend
    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, );
  



  return (
    <>
      <section className="w-full min-h-[2160px]   bg-blue-950 font-cooperBlack">
        <div className="">
          <div className="bg-red-600">
            <h1 className="flex items-center text-[50px]  pl-2 text-white ">
              Pizza
              <img style={{ width: '3.5%' }} ref={imageRef} src={pizaIcon} alt="pizzavienna" className="ml-[40px]" />
            </h1>
          </div>
          <div className="flex gap-10 pl-2 pr-2">

            <div className="w-1/2">

              <div>

                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text pt-7"></h2>
                  <div className="price-box ">
                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Small
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700] ">10"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack">4 slices</p>

                    </div>

                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Medium
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700] ">12"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack ">6 slices</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[20px] text-[#FFD700] font-cooperBlack ">
                        Large
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700] ">14"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack ">8 slices</p>
                    </div>

                    <div className="flex flex-col justify-center items-center pr-3">
                      <i className="text-[20px]  font-cooperBlack text-[#FFD700] ">
                        XLarge
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700] ">16"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack">10 slices</p>
                    </div>
                  </div>
                </div>

              </div>




              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Gluten Free</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">///</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;11.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">///</p>
                    </div>

                    <div>
                      <p className="pizza-price ">///</p>
                    </div>
                  </div>
                </div>

                <p className="discription-text">
                  Only medium size. Pick your own toppings
                </p>
              </div>





              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Cheese</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;10.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;11.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;12.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;14.99</p>
                    </div>
                  </div>
                </div>

                <p className="discription-text">
                  Wood-Fired brick oven, daily prepared fresh dough and sauce in
                  house
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Pepperoni</h2>

                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;13.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;14.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;17.99</p>
                    </div>
                  </div>

                </div>
                <p className="discription-text">
                  Fresh dough, red sauce, pepperoni, sauce
                </p>
              </div>

              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Hawaian</h2>

                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>

                </div>
                <p className="discription-text">
                  Tomato sauce, pineapple cubes, cheese and ham
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Meat Lover </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Tomato sauce, cheese, bacon, sausage, meatball, pepperoni
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Veggie Lover </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Tomato sauce, cheese, green peppers, mushroom, tomatoes,
                  olives, onions, spinach
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">BBQ </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  {" "}
                  BBQ sauce, chicken & cheese
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Buffalo </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Buffalo sauce, cheese, fried chicken.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Steak </h2>

                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;17.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  White sauce, mushroom, onions, green pepper, steak, cheese
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Deluxe</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Red sauce, cheese, pepperoni, sausage, meatball, mushroom,
                  green pepper, onions
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Chicken Alfredo</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Alfredo sauce, chicken, broccoli, mushroom
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Margherita</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Red sauce or marinara sauce, mozzarella cheese, basil, olive
                  oil and parmesan cheese
                </p>
              </div>
            </div>



            {/* secend half */}


            <div className="w-1/2 pr-2">

              <div>

                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text pt-7"></h2>
                  <div className="price-box ">
                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Small
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700]">10"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack">4 slices</p>

                    </div>

                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Medium
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700] ">12"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack">6 slices</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Large
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700]">14"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack">8 slices</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mr-5">
                      <i className="text-[22px]  font-cooperBlack text-[#FFD700] ">
                        XLarge
                      </i>
                      <p className="font-semibold text-[20px] text-[#FFD700]">16"</p>
                      <p className="text-[20px] text-[#FFD700] font-cooperBlack ">10 slices</p>
                    </div>
                  </div>
                </div>

              </div>



              <div className="flex justify-between items-center">
                <div className="">
                  <h2 className="pizza-name-text mt-8">NY Style Margherita</h2>
                  <p className="discription-text"> Red sauce, pesto sauce, mozzarella cheese, olive oil, parmesan cheese</p>
                </div>

                <div className="price-box">
                  <div>

                    <p className="pizza-price ">&#36;16.99</p>
                  </div>

                  <div>

                    <p className="pizza-price ">&#36;20.99</p>
                  </div>

                  <div>

                    <p className="pizza-price ">&#36;22.99</p>
                  </div>

                  <div>

                    <p className="pizza-price ">&#36;24.99</p>
                  </div>
                </div>

              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Veggie Alfredo</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Alfredo sauce, broccoli, mushroom, spinach, diced tomato,
                  scallion
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Chicken Bacon Ranch</h2>

                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Crispy chicken, bacon, ranch dressing & mozzarella cheese.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Kurdish</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Mushroom, roasted red pepper, eggplant, spinach, mozzarella
                  cheese and red sauce
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Cheese Lovers </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  American cheese, yellow cheddar, parmesan, mozzarella and
                  provolone cheese
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Vienna Pizza </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Pepperoni, bacon, and pineapple
                </p>
              </div>

              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Vienna Eggplant </h2>

                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">Red sauce, eggplant </p>
              </div> */}

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Parmigiana Eggplant </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Marinara sauce, eggplant, basil, parmesan, ricotta &
                  mozzarella chesse
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Greek </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Tzatziki sauce, eggplant, basil, spinach, onion, tomato,
                  black, olives, feta, cheese
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Chicken Tikka Kebab</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;24.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Masala marinated chicken, green pepper, onion
                </p>
              </div>

              <div className="w-full p-2 mt-4 mb-3 bg-red-600 rounded-[5px]">
                <p className="text-[17px] font-cooperBlack text-white">
                  <span className="discription-text">
                    Each Topping &#36;2.55 Extra:{" "}
                  </span>
                  Pepperoni, Italian Sausage, Beef Meatballs, Bacon, Ham,
                  Salami, Olives, Green Peppers, Tomatoes, Mushrooms, Onions,
                  Spinach, Broccoli, Pineapple, Jalapeno, Peppers, Eggplants,
                  Banana Peppers, Roasted Red Peppers, Fresh Garlic, Extra
                  Cheese
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
