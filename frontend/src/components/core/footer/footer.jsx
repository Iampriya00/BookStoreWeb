import React from "react";
import { data, contactInfo, dateHelper } from "@/utils/footData";
import styles from "@/components/core/footer/footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="grid grid-cols-4 gap-8 tab:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BookStore
              </span>
            </a>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Useful Links
            </h2>
            <ul className="font-medium text-black">
              {data.map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="hover:underline">
                    {link.items}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="font-medium text-black">
              {contactInfo.map((info, idx) => (
                <li key={idx} className={styles.contactList}>
                  <a href={info.path} className="flex hover:underline">
                    <span className={styles.icons}>
                      {React.createElement(info.icon)}
                    </span>
                    <p>{info.contact}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MYBOOK
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerCopy}>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {dateHelper()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            BookStore
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
