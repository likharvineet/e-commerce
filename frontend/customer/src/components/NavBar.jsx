import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaOpencart, FaRegUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
      <nav className="shadow-lg z-50">
        <div className="w-4/5 h-20 m-auto content-center">
          <div className="flex justify-between text-xl">
            <div className="text-2xl font-bold flex items-center">
              <Link to="/">E-Com</Link>
            </div>
            <div className="flex items-center">
              <ul className="flex justify-around gap-20">
                <li>
                  <Link to="/products">Product</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex ml-0 gap-5 items-center justify-center">
                <li className="">
                  <Link to="/wishlist">
                    <FaRegHeart />
                  </Link>
                </li>
                <li className="">
                  <Link to="/cart">
                    <FaOpencart />
                  </Link>
                </li>
                <li className="flex">
                  <Link className="p-3 bg-stone-300 rounded-full" to="/account">
                    <FaRegUser />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
