import React from "react";
import { Button } from "../../ui/button";
import { FaRegUser } from "react-icons/fa6";
import data from "@/utils/navData";
import styles from "@/components/core/navbar/navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navHead}>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BookStore
          </span>
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {data.map((x, idx) => (
              <li key={idx}>
                <a
                  href={x.path}
                  className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  {x.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Button>Request demo</Button>
          <FaRegUser />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
