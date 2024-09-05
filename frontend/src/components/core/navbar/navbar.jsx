import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import data from "@/utils/navData";
import styles from "@/components/core/navbar/navbar.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa"; // Import the search icon

function Navbar() {
  return (
    <nav className={styles.navHead}>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl py-5 mx-auto">
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
              <li key={idx} className="relative">
                {x.subcategories ? (
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <span className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                            {x.item}
                          </span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2 top-full">
                          <ul className="bg-white border border-gray-200 rounded-lg shadow-lg">
                            {x.subcategories.map((subCategory, subIdx) => (
                              <li key={subIdx} className="p-2">
                                <a
                                  href={subCategory.path}
                                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                                >
                                  {subCategory.item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  <a
                    href={x.path}
                    className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    {x.item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <Input type="text" placeholder="Search..." className="mr-5" />
          <FaSearch className="w-5 h-5 text-gray-800 dark:text-white" />{" "}
          {/* Corrected Search Icon */}
        </div>
        <div className="flex items-center space-x-4">
          <div className="mr-5 text-3xl">
            <FaUserAlt />
          </div>
          <div className="text-3xl">
            <FaCartShopping />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
