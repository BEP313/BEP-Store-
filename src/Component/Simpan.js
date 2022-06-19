import Navbar from './Navbar'
import Footers from './Footers'
import CEO from '../img/CEO.jpg'

export default function Example() {
    return (
        <>
        <Navbar/>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-3 py-20 mx-auto">
    <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

    <div class="flex items-center px-2 py-3">
    <img
                        className="h-8 w-8 rounded-full"
                        src={CEO}
                        alt=""
                      />
        
        <div class="mx-3">
            <p class="text-gray-600 dark:text-gray-200">Bagus Ellang Permadi Sukses di Simpan 
            <div class="flex ml-6 items-center">
             <a
                href="./Pengaturan"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Lanjutkan ke Pengaturan<span aria-hidden="true"> &rarr;</span>
              </a>
           </div>
           </p>
        </div>
    </div>
</div>
</div>
</section>
</>

)
 }