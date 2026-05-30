"use client";
import React from 'react'
import { LayoutDashboard, BookOpen,GraduationCap ,Trophy, Settings, Users,} from "lucide-react";
import { motion } from 'framer-motion';
const Sidebar = () => {
  return (
    <aside className='flex min-h-screen border-r flex-col p-3  w-64 border-blue-500 shadow-md bg-[#0a0a0a]  shadow-blue-400 '>
      <div className="rounded-xl bg-blue-500/20 p-2 flex gap-4">
          <GraduationCap className="text-blue-400" size={28} />
          <h1 className="text-2xl font-bold text-white">LearnGrow</h1>
      </div>

        <nav className='h-full w-full rounded-lg mt-5 p-3 bg-[#0a0a0a] '>
            <ul className=" md:space-y-5 space-y-2">
                <motion.li  whileHover={{ x: 5,scale: 1.02 , border: '1px solid #3b82f6' }} className='text-sm text-gray-400    rounded-2xl hover:text-white py-3 px-4 border-transparent   border  w-full flex items-center gap-3' ><button><LayoutDashboard /></button>Dashboard</motion.li>
                <motion.li  whileHover={{ x: 5,scale: 1.02, border: '1px solid #3b82f6'  }} className='text-sm text-gray-400    rounded-2xl hover:text-white py-3 px-4 border-transparent   border  w-full flex items-center gap-3' ><button><BookOpen /></button>Courses</motion.li>
                <motion.li  whileHover={{x: 5, scale: 1.02, border: '1px solid #3b82f6' }}  className='text-sm text-gray-400    rounded-2xl hover:text-white py-3 px-4 border-transparent    border w-full flex items-center gap-3' ><button><Trophy /></button>Achievements</motion.li>
                <motion.li  whileHover={{ x: 5, scale: 1.02 , border: '1px solid #3b82f6' }}  className='text-sm text-gray-400  rounded-2xl hover:text-white py-3 px-4 border-transparent  border  w-full flex items-center gap-3' ><button><Users/></button>Users</motion.li>
                <motion.li  whileHover={{ x: 5, scale: 1.02 , border: '1px solid #3b82f6'  }}  className='text-sm text-gray-400  rounded-2xl hover:text-white py-3 px-4 border-transparent  border w-full flex items-center gap-3' ><button><Settings/></button>Settings</motion.li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar