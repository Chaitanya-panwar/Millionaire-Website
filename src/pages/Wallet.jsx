import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { IndianRupee } from "lucide-react";


function Wallet() {
    return (
        <>
            <Sidebar />
            <div className="flex flex-row justify-center  mt-10 mx-5">
                <div aria-label="add to slack" href="#" class="p-4 py-7    border  dark:bg-gray-800  bg-black rounded-2xl duration-300 border-yellow-600 shadow-xl shadow-yellow-600/30 dark:border-yellow-200">
                    <div class="flex justify-evenly align-middle space-x-4">
                        <span className="text-xl font-bold text-yellow-500">Total Balance:</span>
                        <div className="flex justify-evenly align-middle">
                            <IndianRupee className="size-6 text-yellow-500" />
                            <span class="text-xl font-bold text-yellow-500">10,000</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex justify-evenly align-middle mt-10">
                <button  class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-yellow-500">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-yellow-500"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span class="relative">Add  Fund</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
                <button  class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-yellow-500">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-yellow-500"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span class="relative">Withdrawal</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
            </div>
        </>
    )
}

export default Wallet