import { useState } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as IconCheck } from "assets/images/check.svg";

import { ReactComponent as LogoGoogle } from "assets/images/logo-google.svg";
import { ReactComponent as LogoDropBox } from "assets/images/logo-dropbox.svg";
import { ReactComponent as LogoFacebook } from "assets/images/logo-facebook.svg";
import { ReactComponent as LogoSpotify } from "assets/images/logo-spotify.svg";
import { ReactComponent as LogoMicrosoft } from "assets/images/logo-microsoft.svg";

const pricingList = [
  {
    backgroundColor: "bg-blue-50",
    type: "starter",
    price: "125.00",
    buttonName: "Go Starter",
    services: [
      "2 Bank Account",
      "Priority 24/7 Support",
      "APIs Payment Gateway",
      "$0 Fee Withdrawl",
    ],
  },
  {
    backgroundColor: "bg-yellow-400",
    type: "platinum",
    price: "575.00",
    buttonName: "Take Platinum",
    services: [
      "Unlimited Bank Account",
      "Priority 24/7 Support",
      "APIs Payment Gateway",
      "$0 Fee Withdrawl",
      "Multiple Card",
    ],
  },
];

AOS.init();

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header
        className="body-font container mx-auto"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
          <div className="flex items-center justify-between w-full md:w-40 mb-4 font-medium text-gray-900 md:mb-0 bg-white">
            <a href="/">
              <Logo />
            </a>
            <button
              className="bg-gray-200 inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white transition-all duration-300"
              onClick={() => setIsActive(!isActive)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={[!isActive ? "block" : "hidden", "h-6 w-6"].join(
                  " "
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={[isActive ? "block" : "hidden", "h-6 w-6"].join(" ")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav
            className={[
              isActive
                ? "flex translate-y-0"
                : "-translate-y-96 md:translate-y-0 hidden md:flex",
              "flex-col md:flex-row flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto transform transition-all duration-300",
            ].join(" ")}
          >
            <a
              href="/"
              className="my-2.5 md:my-0 md:px-2.5 text-550 hover:text-gray-900 text-lg"
            >
              Features
            </a>
            <a
              href="/"
              className="my-2.5 md:my-0 md:px-2.5 text-550 hover:text-gray-900 text-lg"
            >
              Stories
            </a>
            <a
              href="/"
              className="my-2.5 md:my-0 md:px-2.5 font-medium text-gray-900 text-lg"
            >
              Pricing
            </a>
            <a
              href="/"
              className="my-2.5 md:my-0 md:px-2.5 text-550 hover:text-gray-900 text-lg"
            >
              Products
            </a>
          </nav>
          <button
            className={[
              isActive
                ? "translate-y-0"
                : "-translate-y-96 md:translate-y-0 hidden",
              "items-center transform px-12 py-3 text-gray-900 transition-all duration-300 ease-in-out bg-emerald-500 border-2 border-transparent rounded-md lg:inline-flex lg:mt-px hover:border-gray-900 hover:bg-emerald-600 hover:text-white focus:ring focus:outline-none",
            ].join(" ")}
          >
            Sign In
          </button>
        </div>
      </header>

      <main>
        <h1
          className="text-4xl font-medium text-gray-900 text-center mt-24"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Our Services Has
          <br /> Friendly Packages
        </h1>
        <p
          className="text-lg text-550 text-center mt-5"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Choose plans that might better for your company
        </p>

        <section className="body-font mt-16">
          <div className="container px-8 pt-8 mx-auto lg:px-48">
            <div className="flex flex-wrap">
              {pricingList.map((pricing, index) => (
                <div
                  className="px-8 py-6 mx-auto lg:px-10 lg:w-1/2 md:w-full"
                  key={pricing.type}
                  data-aos="fade-up"
                  data-aos-delay={`${300 + 100 * index}`}
                >
                  <div
                    className={[
                      "h-full px-9 py-10 border-2 border-gray-900 rounded-xl",
                      pricing.backgroundColor,
                    ].join(" ")}
                  >
                    <div className="text-center border-b-2 border-gray-900">
                      <h3 className="tracking-widest uppercase text-2xl">
                        {pricing.type}
                      </h3>
                      <h2 className="flex items-end justify-center mt-4 mb-6 text-3xl font-medium leading-none text-left text-gray-900 lg:text-5xl">
                        ${pricing.price}
                        <span className="ml-1 text-lg font-normal text-gray-600">
                          / year
                        </span>
                      </h2>
                    </div>
                    <ul className="mt-8">
                      {pricing.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center mb-5 text-gray-900"
                        >
                          <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-3 text-white bg-gray-900 rounded-full">
                            <IconCheck />
                          </span>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <button className="items-end w-full px-8 py-2 mt-8 font-medium text-black transition duration-300 ease-in-out transform bg-white border-2 border-black rounded-md focus:shadow-outline focus:outline-none hover:scale-105">
                      {pricing.buttonName}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <LogoMicrosoft className="hidden" />
        <section className="mx-auto bg-blueGray-50 mt-36">
          <div className="container px-5 py-12 mx-auto lg:px-24">
            <div
              className="flex flex-col w-full mb-12 text-center"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h1 className="mb-6 text-lg font-medium text-550">
                More than 10K+ companies trusted us
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-16 mt-8 mb-28 text-center lg:grid-cols-5">
              <div
                className="flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <LogoGoogle />
              </div>
              <div
                className="flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <LogoDropBox />
              </div>
              <div
                className="flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <LogoFacebook />
              </div>
              <div
                className="flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <LogoSpotify />
              </div>
              <div
                className="flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <LogoMicrosoft />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
