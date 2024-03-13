import React from "react";
// import Header from './Header';
// import video from '../assests/background.mp4';
import "../css/home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 2100000); // 60000 milliseconds = 1 minute

    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <section className="w-full min-h-[2160px]   bg-blue-700 font-cooperBlack">
        <div className="">
          <h1 className="text-[50px] bg-red-600 pl-2 text-white font-cooperBlack font-semibold">
            Pizza
          </h1>
          <div className="flex gap-10 pl-2 pr-2">
            <div className="w-1/2">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text pt-7">Gluten Free</h2>
                  <div className="price-box ">
                    <div>
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Small
                      </i>
                      <p className="pizza-price ">////</p>
                    </div>

                    <div>
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Medium
                      </i>
                      <p className="pizza-price ">&#36;14.99</p>
                    </div>

                    <div>
                      <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                        Large
                      </i>
                      <p className="pizza-price ">////</p>
                    </div>

                    <div>
                      <i className="text-[22px]  font-cooperBlack text-[#FFD700] ">
                        XLarge
                      </i>
                      <p className="pizza-price ">////</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  {" "}
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

              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Hawaian</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;18.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Tomato sauce, pinapple cubes, cheese and ham
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
                  Tomato sauce, cheese, bacon, sausage, meetball, pepperoni
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
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;18.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  {" "}
                  BBQ sauce, chicken, cheese, green peppers, mushroom, tomatoes,
                  olives, onions.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Buffalo </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;18.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
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
                      <p className="pizza-price ">&#36;19.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;23.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;25.99</p>
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
                  Red sauce, cheese, pepproni, sausage, meatball, mushroom,
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
                  Alfredo sauce, chiken, brocoli, mushroom
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
                      <p className="pizza-price ">&#36;18.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Red sauce or marinara sauce, mozzarella cheese, basil, olive
                  oil and parmesan cheese
                </p>
              </div>
            </div>

            <div className="w-1/2 pr-2">
              <div className="flex justify-between items-center">
                <div className="">
                  <h2 className="pizza-name-text mt-8">NY Style Mergherita</h2>
                  <p className="discription-text"> </p>
                </div>

                <div className="price-box">
                  <div>
                    <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                      Small
                    </i>
                    <p className="pizza-price ">&#36;16.99</p>
                  </div>

                  <div>
                    <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                      Medium
                    </i>
                    <p className="pizza-price ">&#36;18.99</p>
                  </div>

                  <div>
                    <i className="text-[22px] text-[#FFD700] font-cooperBlack ">
                      Large
                    </i>
                    <p className="pizza-price ">&#36;20.99</p>
                  </div>

                  <div>
                    <i className="text-[22px]  font-cooperBlack text-[#FFD700] ">
                      XLarge
                    </i>
                    <p className="pizza-price ">&#36;22.99</p>
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
                  <h2 className="pizza-name-text">Cheese Lover </h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;18.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>

                    <div>
                      <p className="pizza-price ">&#36;22.99</p>
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
                  Salami, Olives, Green Pappers, Tomatoes, Mushrooms, Onions,
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
