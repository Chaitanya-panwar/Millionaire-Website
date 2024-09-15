
import { Sidebar } from '../components/Sidebar'
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import Input from '../components/Input';
import { Loader } from 'lucide-react';
import { useState } from "react";
import axios from 'axios';





function Profile() {

    const { user, logout } = useAuthStore();
    const [instagram, setInstagram] = useState("");
    const [telegram, setTelegram] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
	

	const handleLogout = () => {
		logout();
	};
    

    const handleUpdate = async (x) =>{
        const item ={
            instagram:instagram,
            telegram: telegram,
            whatsapp: whatsapp
        }
        try {
			const response = await axios.put(`https://millionaire-project.onrender.com/api/auth/signup/`+x, item);
			
		} catch (error) {
			
			throw error;
		}
    }
    
   

    
    const { signup, error, isLoading } = useAuthStore();
    const [updateform, setUpdateForm] = useState(false)
	return (
        <>
        <Sidebar/>
        
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
		>
			<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-300 to-yellow-900 text-transparent bg-clip-text'>
				Personal Information
			</h2>

			<div className='space-y-6'>
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					
					<p className='text-gray-300'>Name:      {user.name}</p>
					<p className='text-gray-300'>Email:     {user.email}</p>
					<p className='text-gray-300'>Mobile No: {user.mobile}</p>
					<p className='text-gray-300'>Instagram: {user.instagram ? user.instagram: "Please Add your Instagram Account"}</p>
					<p className='text-gray-300'>Telegram:  {user.telegram ? user.telegram: "Please Add your Telegram Account"}</p>
					<p className='text-gray-300'>Whatsapp:  {user.whatsapp ? user.whatsapp: "Please Add your Whatsapp Number"}</p>
					
				</motion.div>

                {updateform==false?
                <motion.button 
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-800 text-white 
						font-bold rounded-lg shadow-lg hover:from-yellow-500
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
                        onClick={()=>setUpdateForm(true)}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Add More Information"}
					</motion.button>
                    :null}


              {updateform===true?
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<form onSubmit={handleUpdate(user._id)}>
                    <h3 className='text-xl font-semibold text-yellow-500 mb-3'>Please Enter All Fields</h3>
					<input className='w-full pl-10 pr-3 py-2 my-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
						value={instagram}
						onChange={(e) => setInstagram(e.target.value)}
						type='text'
						placeholder='Enter Your Instagram Account'
						
					/>
					<input className='w-full pl-10 pr-3 py-2 my-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
						value={telegram}
						onChange={(e) => setTelegram(e.target.value)}
						type='text'
						placeholder='Enter Your Telegram Account'
						
					/>
					<input className='w-full pl-10 pr-3 py-2 my-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
						value={whatsapp}
						onChange={(e) => setWhatsapp(e.target.value)}
						type='text'
						placeholder='Enter Your Whatsapp Number'
						
					/>
				
                <motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-800 text-white 
						font-bold rounded-lg shadow-lg hover:from-yellow-500
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
                       
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Add Information"}
					</motion.button>
					
					<motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-800 text-white 
						font-bold rounded-lg shadow-lg hover:from-yellow-500
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='button'
						disabled={isLoading}
                       onClick={()=>setUpdateForm(false)}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Cancel Changes"}
					</motion.button>
				
				</form>
				</motion.div>
				
			:null}
            
            </div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-800 text-white 
				font-bold rounded-lg shadow-lg hover:from-yellow-400 hover:to-yellow-800
				 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Logout
				</motion.button>
			</motion.div>
		</motion.div>

        {/* to get inst  */}
        
       
        </>
  )
}

export default Profile