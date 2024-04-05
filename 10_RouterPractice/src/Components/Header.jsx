import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className='bg-gray-400 flex flex-row h-20'>
            <ul className='flex flex-row gap-40 m-auto'>
                <li className='bg-black text-white p-2 border-white border-4 rounded-lg'>
                    <NavLink to="/"
                        className={({isActive}) => 
                       ` ${isActive?"text-red-300":"text-white"}`
                    }
                        
                    >
                    Home
                    </NavLink>
                </li >
                <li className='bg-black text-white p-2 border-white border-4 rounded-lg'>
                    <NavLink to="/About"
                    className={({isActive}) => 
                    ` ${isActive?"text-red-300":"text-white"}`
                 }
                    >
                    About
                    </NavLink>
                </li>
                <li className='bg-black text-white p-2 border-white border-4 rounded-lg'>
                    <NavLink to="/Github"
                    className={({isActive}) => 
                    ` ${isActive?"text-red-300":"text-white"}`
                 }
                    >
                    Github
                    </NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Header
