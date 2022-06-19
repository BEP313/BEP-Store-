/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Kacamata from '../img/Kacamata.jpg'
import Tas from '../img/Tas.jpg'
import Sepatu from '../img/Sepatu.jpg'
import Store from '../img/Store_.png'
import Jam from '../img/Jam.jpg'
import BajuPria from '../img/BajuPria.jpg'
import BajuWanita from '../img/BajuWanita.jpg'
import Navbar from '../Component/Navbar'
import Footers from '../Component/Footers'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <>

    <Navbar></Navbar>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-m mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="w-full h-full object-center object-cover">

          <img
          src= {Store}
          alt=""
          className="w-full h-full object-center object-cover"
          />
          
          
            <h1 className="text-4xl font font-extrabold tracking-tight text-pink-900 sm:text-6xl">
               <h2>Official Store</h2>
            </h1>
            <h5 className="text-3xl font font-extrabold tracking-tight text-red-500 sm:text-4xl">
            <h2>"Bagus Ellang Permadi"</h2>
            </h5>
            <p className="w-full h-full object-center object-cover text-gray-700">
            Mudah, nyaman,Banyak Promo dan bebas Biaya Layanan Transaksi. GRATIS!.
            </p>
          </div>
         

              <a
                href="./Category"
                className="mr-2 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
              <a
                href="./Login"
                className="mr-2 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Login
              </a>
              <a
                href="./Promo"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Promo
              </a>
            </div>
          </div>


          <div class="flex justify-center items-center space-x-2">
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-green-500
      " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

 <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://cf.shopee.co.id/file/ff1983cac6094a07e064f31c1790d343"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="./Category"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Pakaian
              </a>
              <span className="text-gray-600">— Promo </span>
            </p>
            <a
              href="./Category"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Pakaian
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="./Category"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://komerce.id/blog/wp-content/uploads/2021/11/daftar-produk-elektronik-terlaris.jpg"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="./Category"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Elektronik
              </a>
              <span className="text-gray-600">— Promo </span>
            </p>
            <a
              href="./Category"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Elektronik
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://lh3.googleusercontent.com/KmbesfTT-Sr0Csfah1moAAjuEXzs2Pl8cfW-HsSTDncHbFWxlW9Xq0AUqYwzBL_FtWlChduYsLmNjyL1C6dpVGrWA-8OJSqHYc2NCMEQgN8esy9alrZfjRhxesXYO_kiQ33ilXzQ"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="./Category"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Makanan
              </a>
              <span className="text-gray-600">— Promo </span>
            </p>
            <a
              href="./Category"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Makanan
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="./Category"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    
 
       

    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Official Store</h2>
      <h4 class="md:text-3xl text-2xl font-small title-font text-gray-600">BEP Store, Toko Online Terlengkap dan Terpercaya Dengan Beragam Produk Pilihan Serta Promo Menarik</h4>
    </div>
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <a
       href="https://play.google.com/store">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span class="title-font font-medium">Google Play</span>
        </span>
      </button>
      </a>
      <a
       href="https://www.apple.com/app-store/">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1">Download on the</span>
          <span class="title-font font-medium">App Store</span>
        </span>
      </button>
      </a>
    </div>
  </div>
</section>


        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          </div>
          
    <Footers></Footers>
    </>
    
  )
}
