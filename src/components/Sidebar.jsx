import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiArrowUpLeft, FiPlus, FiSettings, FiShoppingCart } from 'react-icons/fi'
import  logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import { BriefcaseBusiness, Handshake, House, Landmark, ListTodo, LogOut, NotebookText, ReceiptIndianRupee, User, WalletMinimal } from 'lucide-react'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>
     <div className='w-full h-20 bg-black flex flex-row justify-between align-middle'>
      
      <button
        onClick={toggleSidebar}
        className="p-3 m-5 border-2 border-yellow-600 rounded-xl"
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu className='text-yellow-600 '  />
      </button>
      <img className='mx-5' src={logo} alt="" />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40  backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-72 h-screen max-w-xs border-r-2 border-zinc-800 bg-black"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-yellow-600">
                <span className='text-yellow-600 text-2xl font-bold'>Welcome</span>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-yellow-600 rounded-xl"
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback className='text-2xl text-yellow-600' />
                </button>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, to, Icon } = item
                  return (
                    <li key={title}>
                      <Link
                        onClick={toggleSidebar}
                        to={to}
                        className="flex items-center justify-between gap-4 p-4 transition-all hover:bg-indigo-950 "
                      >
                     
                        <motion.span className='text-yellow-600 text-lg font-medium' {...framerText(idx)}>{title}</motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-2xl text-yellow-600" />
                        </motion.div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="flex items-center justify-between p-3 border-t-2 border-yellow-600">
                <span className='text-yellow-600 text-lg font-bold'>Log Out</span>
                <button
                  onClick={toggleSidebar}
                  className="p-2 border-2 border-yellow-600 rounded-xl"
                  aria-label="close sidebar"
                >
                  <LogOut className='text-lg text-yellow-600'  /> 
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const items = [
  { title: 'Dashboard', Icon: House , to: '/' },
  { title: 'Profile', Icon: User, to:'/profile' },
  { title: 'Account', Icon: Landmark, to: '#' },
  { title: 'Investment', Icon:ReceiptIndianRupee , to: '#' },
  { title: 'Statement', Icon: NotebookText, to: '#' },
  { title: 'Wallet', Icon: WalletMinimal, to: '/wallet' },
  { title: 'Business Plan', Icon: BriefcaseBusiness, to: '#' },
  { title: 'Task', Icon: ListTodo, to: '#' },
  { title: 'Terms & Conditions', Icon: Handshake, to: '/termsandcondition' },
]

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1,
  },
}