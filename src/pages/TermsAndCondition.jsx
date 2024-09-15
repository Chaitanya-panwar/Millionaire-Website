import React from 'react'
import { Sidebar } from '../components/Sidebar'

function TermsAndCondition() {
  return (
    <>
     <Sidebar/>
     
  <div class="bg-white text-black dark:bg-black dark:text-white">
      <div class="container mx-auto px-4 py-8">
   
        <div class='w-full flex'>
          <h1 class="text-3xl font-bold mb-4 text-orange-800">Terms & Conditions </h1>
        </div>
        <br />
        <p class="mb-4 text-base">
          Welcome to the website. Please read these terms of service carefully before using the website. By using the website, you agree to be bound by these terms of service. If you do not agree to these terms of service, you may not use the website. These terms of service govern your use of the website and all services provided by the website. If you do not agree to these terms of service, you may not use the website.
          </p>
          <br />
         
            <div class='pb-5 mx-3'>
            <h2 class='font-bold text-orange-700 dark:text-orange-300'>General</h2>
               
                <br /> 
                <ul>
                    <li class='list-disc'>
                        <p class="text-base">
                        Withdrawal will happen on Monday
                        </p>
                    </li>
                    <br />
                    <li class='list-disc'>
                        <p class="text-base">
                        You have to add atleast 2 members to start withdrawal.
                        </p>
                    </li>
                    <br />
                    <li class='list-disc'>
                        <p class="text-base">
                        Income will be added only if you have to do daily tasks.
                        </p>
                    </li>
                </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default TermsAndCondition