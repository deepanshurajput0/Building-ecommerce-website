import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from './../../public/images/logo.png'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [nav,setNav] = useState(true)
  const { currentUser } = useSelector((state)=>state.user)
  return (
    <div>
        <div className="navbar  bg-base-100 justify-between  ">
 <img className=' h-[30px] md:pl-20' src={Logo} alt="logo" />
  <div className=' md:hidden' onClick={()=>setNav(!nav)} >
    {
      nav ? <MdOutlineSegment size={30} /> : <RxCross2 size={30} />
    }
    
    
  </div>
  <ul  className=' gap-20 hidden md:flex ' >
    <li>
     <Link to={'/'} >Home</Link>
    </li>
    <li>
     <Link to={'/'} >Shop</Link>
    </li>
    <li>
     <Link to={'/'} >
     <AiOutlineShoppingCart size={30} />
     </Link>
    </li>
    <li>
     {
      !currentUser ?    <Link to={'/register'} >
      <button  className=' hover:bg-[#b6e107] hover:scale-105  w-[8rem] font-semibold rounded-3xl p-3  bg-[#b0c751]' >SignUp</button>
      </Link> : 
      <div className="avatar placeholder cursor-pointer">
      <div className="bg-neutral text-neutral-content w-12 rounded-full">
        <span className="text-xs">UI</span>
      </div>
    </div>
     }
    </li>
  </ul>
{
  !nav ?   <ul  className=' absolute z-40 bg-white flex-col top-12 w-full gap-20 md:hidden ' >
  <li>
   <Link to={'/'} >Home</Link>
  </li>
  <li>
   <Link to={'/'} >Shop</Link>
  </li>
  <li>
   <Link to={'/'} >
   <AiOutlineShoppingCart size={30} />
   </Link>
  </li>
  <li>
  {
      !currentUser ?    <Link to={'/register'} >
      <button  className=' hover:bg-[#b6e107] hover:scale-105  w-[8rem] font-semibold rounded-3xl p-3  bg-[#b0c751]' >SignUp</button>
      </Link> : 
      <div className="avatar placeholder cursor-pointer">
      <div className="bg-neutral text-neutral-content w-12 rounded-full">
        <span className="text-xs">UI</span>
      </div>
    </div>
     }
  </li>
</ul> : ''
}
</div>
    </div>
  )
}

export default Navbar


