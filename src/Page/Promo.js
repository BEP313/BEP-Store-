import Navbar from '../Component/Navbar'
import BajuPromo from '../img/BajuPromo.webp'
import SepatuPromo from '../img/SepatuPromo.webp'
import JamPromo from '../img/JamPromo.jpg'

export default function Example() {
    return (
<>
<Navbar/>

<div class="py-16 bg-purple-400">
    <div  class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 class="text-4xl text-gray-700 font-bold md:text-5xl">Beli sekarang dan dapatkan Promo <span class="text-blue-500">30% Pertama</span></h1>
                <p class="text-lg">Jadilah orang pertama yang mendapatkan Potongan Harga</p>
                <div class="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <a
                     href ="/Category" 
                     class="w-full py-3 px-6 text-center rounded-xl transition bg-blue-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                     >
                     <span class="block text-white font-semibold">
                        Mulai Belanja
                     </span>
                    </a>
                    
                    <a
                    href="../" title="more about" class="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
                    >
                        <span class="block text-gray-600 font-semibold">
                            Tentang BEP Store
                        </span>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">

        <div class="col-span-2 row-span-4">
        <img
            src={BajuPromo}
            class="rounded-full" 
            width="640" 
            height="960"
            alt=""
            loading="lazy"
        />
        </div>

        <div class="col-span-2 row-span-2">
        <img
            src={JamPromo}
            class="w-full h-full object-cover object-top rounded-xl" width="640" height="640" 
            alt="" 
            loading="lazy"
        />
        </div>
                <div class="col-span-3 row-span-3">

        <img
            src={SepatuPromo}
            class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" 
            alt="" 
            loading="lazy"
              
        />
              
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}
