import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";


function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
     setToggle(true);
  }
  const hideSideMenu = () =>{
    setToggle(false);
  }

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search"
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New"
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help"
    },
    {
      icon: <MdOutlineAssignmentInd />,
      name: "Sign In"
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart",
      sup: "2"
    }
  ]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} 
    style={{
      opacity: toggle ? 1 : 0,
      visibility: toggle ? "visible" : "hidden",
      zIndex: 999999999
    }}> 

    <div onClick={(e) => {
      e.stopPropagation();
    }}className='w-[500px] bg-white h-full absolute duration-[600ms]'
     style={{
      left: toggle ? '0%' : '-100%'
    }}>
     </div>

    </div>

    <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
      <div className='max-w-[1200px] mx-auto flex items-center'>

      <div className='w-[100px]'>
      <img src="images/logo.png" className='w-full' alt=""/>
      </div>

      <div className=''>
        <span className='font-bold mr-2 border-b-[3px] border-[black]'>Badangpet</span>
         Hyderabad, Telangana, India. <RxCaretDown onClick={showSideMenu} className='text-lg inline
          font-bold text-[0.9rem] text-[#fc8019] cursor-pointer'/>
      </div>
      {/* 46 mins upto CaretDown creation. */}

      <nav className='ml-auto flex items-center gap-10 font-semibold text-[18px]'>
     {
      links.map(
        (link, index) => {
          return <li key={index} className='flex items-center gap-2 hover:text-[#fc8019]'>
            {link.icon}
            {link.name}
           <sup>{link.sup}</sup> 
          </li>
        }
      )
     }
       </nav>
       {/* upto one hour */}
       </div>
       </header>
    </>
    
  )
}

export default Header
 