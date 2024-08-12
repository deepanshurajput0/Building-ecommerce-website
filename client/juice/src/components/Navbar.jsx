import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from './../../public/images/logo.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutFail, logoutStart, logoutSuccess } from './../redux/user/userSlice'
import toast from 'react-hot-toast';
const Navbar = () => {
  const [nav,setNav] = useState(true)
  const { currentUser } = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const logout=async()=>{
    dispatch(logoutStart())
    try {
      const res = await fetch('/api/v1/user/logout')
      const data = await res.json()
      if(res.ok){
        dispatch(logoutSuccess(data.message))
        toast.success(data.message)
      }else{
        dispatch(logoutFail(data))
      }
    } catch (error) {
      dispatch(logoutFail(error.message))
    }
  }
  return (
    <div>
        <div className="navbar  bg-base-100 justify-between  ">
 <img className=' h-[30px] md:pl-20' src={Logo} alt="logo" />
  <div className=' md:hidden' onClick={()=>setNav(!nav)} >
    {
      nav ? <MdOutlineSegment size={30} /> : <RxCross2 size={30} />
    }
    
    
  </div>
  <ul  className=' gap-20 hidden md:flex  md:pr-12' >
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
      <details className="dropdown dropdown-end">
      <summary className="btn rounded-[80%]  w-12  m-1">
         <span className=' text-2xl font-semibold' >{currentUser?.firstName[0]}</span>
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><Link to={'/profile'} >My Profile</Link></li>
        <li onClick={logout} ><a>Logout</a></li>
      </ul>
    </details>
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
        <span className="text-xs">{currentUser?.firstName[0]}</span>
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


