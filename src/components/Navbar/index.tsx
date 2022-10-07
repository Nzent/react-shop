import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <nav className="shadow-md sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-lg">
      <div className="p-2 flex flex-row justify-between items-center ">
        {/* left */}
        <div className="basis-1/3">
          <div className="flex justify-start items-center">
            <div>
              <box-icon
                name="shopping-bag"
                size="md"
                color="#10b981"
              ></box-icon>
            </div>
            <div className="text-2xl text-emerald-500 font-pacifico font-medium">
              OneHouse
            </div>
          </div>
        </div>
        {/* mid */}
        <div className="basis-1/3">
          <div className="flex flex-row justify-center items-center space-x-4 text-xl">
            <Link
              to={"/"}
              className="hover:text-emerald-500/80 text-emerald-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="hover:text-emerald-500/80 text-emerald-500 cursor-pointer"
            >
              About
            </Link>
            <Link
              to={"/store"}
              className="hover:text-emerald-500/80 text-emerald-500 cursor-pointer"
            >
              Store
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="basis-1/3">
          <div className="flex justify-end items-center">
            <div className="border border-emerald-500 flex justify-center items-center rounded-full p-2 cursor-pointer relative w-10 h-10">
              <box-icon
                name="cart-alt"
                type="solid"
                color="#10b981"
                size="sm"
              ></box-icon>
              {/* cart counter */}
              <span className="absolute -bottom-1 -left-1 text-xs bg-white border border-emerald-500 text-emerald-500 rounded-full h-6 w-6 flex justify-center items-center">
                12
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
