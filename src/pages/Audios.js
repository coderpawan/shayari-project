import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import Data from "../data/postData";
import ReactAudioPlayer from "react-audio-player";

const Audios = () => {
  const [visible, setVisible] = useState(9);
  const ShowMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <div>
      <Navbar />
      <div class="w-full bg-white md:p-12 p-4">
        <div class="header flex items-end justify-between mb-12">
          <select
            class="block w-44 relative bottom-14 md:bottom-0 md:w-52 text-gray-700 py-2 px-2 md:px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="animals"
          >
            <option value="" className="text-sm">
              Select a category
            </option>
            <option value="dog" className="text-sm">
              Love Shayari
            </option>
            <option value="cat" className="text-sm">
              Broken Shayari
            </option>
            <option value="hamster" className="text-sm">
              Dard Shayari
            </option>
            <option value="parrot" className="text-sm">
              Bewafa Shayari
            </option>
            <option value="spider" className="text-sm">
              Ghazal Shayari
            </option>
            <option value="goldfish" className="text-sm">
              lone Shayari
            </option>
          </select>

          <div class="text-end">
            <form class="flex flex-col md:flex-row w-[94%] md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div class=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  class=" rounded-lg border-solid ml-2 md:ml-0 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                class="flex-shrink-0 px-4 py-2 ml-4 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div class="title text-center">
          <p class="text-4xl font-bold text-gray-800 mb-12">Latest Shayaries</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {Data.slice(0, visible).map((item) => {
            return (
              <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <div class="w-full block h-full">
                  <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <div className="">
                      <ReactAudioPlayer
                        src={item.audio}
                        controls
                        className="w-full"
                      />
                    </div>

                    <p class="text-indigo-500 text-md font-medium mt-4">
                      {item.category}
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      {item.title}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                      {item.shayari_1}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                      {item.shayari_2}
                    </p>
                    <div class="flex items-center mt-4">
                      <div class="flex flex-col justify-between text-sm">
                        <p class="text-gray-800 dark:text-white">
                          By ~ {item.writter}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center py-2 bg-slate-400">
                    <AiOutlineHeart className="mt-[3px] text-2xl" />
                    <div className="mt-[3px] ml-2">10</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            onClick={ShowMore}
            class="bg-blue-500 hover:bg-blue-700 mt-12 justify-center text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            <BsPlusLg className="mr-14 relative top-3" />
            <div className="relative bottom-2 ml-5">More</div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Audios;
