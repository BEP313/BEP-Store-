import react, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Component/Navbar'
import Footers from '../Component/Footers'

function Api (props) {
    
    const [users, setUsers] = useState([])
    const getUsers = async() => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    } catch(e) {
        console.log(e.message);
    }
}
   useEffect(() => {
    getUsers();
   },  []) 

   return (
    <>
    <div class="flex flex-col">
        <Navbar></Navbar>
        <p class="relative text-center  font-medium bg-green-600 rounded-md py-2 px-3">Menampilkan Data Pengguna dengan Api</p>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                         <thead class="bg-white border-b">
                            <tr>
                                <th scope="col" class="text-sm font-big text-gray-900 px-6 py-4 text-left">Name</th>
                                <th scope="col" class="text-sm font-big text-gray-900 px-6 py-4 text-left">Username</th>
                                <th scope="col" class="text-sm font-big text-gray-900 px-6 py-4 text-left">Email</th>
                                <th scope="col" class="text-sm font-big text-gray-900 px-6 py-4 text-left">Website</th>
                                <th scope="col" class="text-sm font-big text-gray-900 px-6 py-4 text-left">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return(
                                        <tr  key={index} class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.email}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.website}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <Footers></Footers>
    </>
    )
}

export default Api