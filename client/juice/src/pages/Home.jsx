import React from 'react'
import Juice from './../../public/images/juice.png'
import Products from './Products'
import { loadUserSuccess, loadUserStart, loadUserFail } from './../redux/user/userSlice'
import { useDispatch } from 'react-redux'
const Home = () => {
    const dispatch = useDispatch()
    const loadUser =async()=>{
        dispatch(loadUserStart())
       try {
        const res = await fetch('/api/v1/user/me')
        const data = await res.json()
        if(!res.ok){
          loadUserFail(data.message)
        }
        dispatch(loadUserSuccess(data.user))
       } catch (error) {
        dispatch(loadUserFail(error.message))
       }
    }
  return (
   <div>
       <div className=' bg-[#ffffffcc] md:flex md:justify-evenly md:items-center md:p-8' >
        <div className='md:w-[50%]' >
            <img className=' md:h-[600px] h-80' src={Juice} alt="juice" />
        </div>
        <div className=' mt-8 p-3 md:w-[50%]' >
            <h1 className=' md:text-5xl text-4xl font-bold' >Your <span className=' text-[#b0c751]' >Healthy</span> <br /> Life Starts Here With Us </h1>
            <p className=' mt-8' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt quia ut voluptatem, perspiciatis provident ex et soluta dolorem! Aliquam earum sunt sit impedit eius fugit omnis doloribus non corrupti modi. Dolorum, rerum alias. Sequi et quibusdam laborum 
            </p>
            <button  className=' hover:bg-[#b6e107] hover:scale-105  w-[8rem] font-semibold rounded-3xl p-3 mt-7 bg-[#b0c751]' >Shop Now</button>
        </div>
    </div>

<Products/>
   </div>

  )
}

export default Home


