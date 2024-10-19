import { useEffect } from "react";
import "../css/home.css";
// import video from '../assests/background.mp4';

const M2 = () => {
 
  return (
    <>
      <section className="w-full min-h-[2160px]  bg-blue-700 font-cooperBlack">
        <div className=" ">
          <div className="flex gap-[20px] bg-red-600 pl-2 pr-2">
            <h1 className="w-1/4 text-[50px] text-white font-cooperBlack font-semibold">
              Strombolis Rolls 16"
            </h1>
            <h1 className="w-1/4 text-[50px] text-white font-cooperBlack font-semibold">
              Calzone
            </h1>
            <h1 className="w-1/4 text-[50px] text-white font-cooperBlack font-semibold">
              Sandwiches
            </h1>
            <h1 className="w-1/4 text-[50px] text-white font-cooperBlack font-semibold">
              Pizza by Slice
            </h1>
          </div>

          <div className="flex gap-[10px] pl-2 pr-2">
            {/* strombolies */}
            <div className="w-1/4">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Pepperoni Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;12.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Pepperoni, American & Provolone cheese, Marinara sauce on side{" "}
                </p>
              </div>

              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Hawaiian Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;17.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Ham, Pineapple, American, Provolone & Mozzarella Cheese{" "}
                </p>
              </div> */}

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Veggie Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;19.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Mushrooms, Tomatoes, Green Peppers, Onions, Olives, Roasted
                  Peppers, American, Provolone & Mozzarella Cheese
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Meat Lovers Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Pepperoni, Sausage, Bacon, Meatballs, American, Provolone &
                  Mozzarella Cheese
                </p>
              </div>

              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Deluxe Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;20.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Mushrooms, Green Peppers, Onions, Meatballs, Sausage,
                  Pepperoni, American, Provolone & Mozzarella Cheese{" "}
                </p>
              </div> */}

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Sausage Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;12.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Italian beef sausage, America, provolone and mozzarella cheese{" "}
                </p>
              </div>

              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Chicken Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Crispy chicken, American, provolone and mozzarella cheese{" "}
                </p>
              </div> */}

              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">BBQ Chicken Roll</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;15.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  BBQ chicken, American, provolone and mozzarella cheese
                </p>
              </div> */}

            </div>

            {/* calozone */}

            <div className="w-1/4">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Cheese Calzone</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;13.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Ricotta, Mozzarella & Provolone
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">BBQ Chicken</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  BBQ Sauce, Ricotta Cheese, Mozzarella & Provolone
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Buffalo Chicken</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Buffalo Sauce, Ricotta Cheese,
                  Provolone & Mozzarella Cheese
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Deluxe Calzone</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Pepperoni, Sausage, Meat balls, Mushrooms, Green pepper,
                  Onion, Ricotta, Provolone & Mozzarella Cheese.{" "}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Meat lover calzone</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;16.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Pepperoni, sausage, meat balls, bacon, American, Ricotta,
                  mozzarella and provolone cheese.{" "}
                </p>
              </div>

              <div className="w-full ml-0 m-7 p-2 bg-red-600 rounded-[5px]">
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

            {/* Sandwiches & burger*/}

            <div className="w-1/4">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Chicken Sandwich</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;5.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Chicken Patty, chipotle sauce, lettuce, tomato, onion, pickle{" "}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Fish Sandwich</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;5.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Fish Patty, tartar sauce, lettuce, tomato, onion, pickle{" "}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Cheese Burger</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;5.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Beef Patty, mayo, lettuce, tomato, onion, pickle{" "}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="pizza-name-text">Combo</h2>
                  <div className="price-box">
                    <div>
                      <p className="pizza-price ">&#36;10.99</p>
                    </div>
                  </div>
                </div>
                <p className="discription-text">
                  Fries and a can of soda with a sandwich or a burger{" "}
                </p>
              </div>
            </div>

            <div className="w-1/4">
              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Cheese</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;3.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Pepperoni</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;4.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Sausage</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;4.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">BBQ</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Meat Lover</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Buffalo</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Chicken Alfredo</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Steak</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Deluxe</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Veggie Alfredo</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Greek</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Veggie Lover</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Hawaiian</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="pizza-name-text">Vienna Eggplant</h2>
                <div className="price-box">
                  <div>
                    <p className="pizza-price ">&#36;5.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default M2;
