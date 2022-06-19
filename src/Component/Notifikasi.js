import Navbar from './Navbar'
import BEPLOGO from '../img/BEPLOGO.webp'

export default function Example() {
    return (
        <>
        <Navbar/>
        <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
role="tablist">
  
  <li class="nav-item" role="presentation">
    <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      relative w-fit
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">Notifications
      <div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-700 text-white rounded-full z-10">1</div>
    </a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContent">
  <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
      Anda baru saja mengubah Photo profil.
    <a
    href="./Profil"
    className="font-medium text-indigo-600 hover:text-indigo-500">
    Cek Profil<span aria-hidden="true"> &#x21BA;</span>
    </a>
  </div>
  <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Selamat Anda mendapatkan Voucer Gratis Ongkir
  </div>
  <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
</div>
</>
   )
 }