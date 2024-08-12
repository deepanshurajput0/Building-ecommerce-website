import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFail, getProductsSuccess, getProductsStart } from './../redux/user/productSlice'
import { useEffect } from 'react'
import Skeleton from './Skeleton'
import { IoMdSearch } from "react-icons/io";
import toast from 'react-hot-toast'
import Loader from '../components/Loader'

const Shop = () => {
    const { products, loading } = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    const [search,setSearch] = useState('')
    const [minPrice,setMinPrice] = useState(0)
    console.log(minPrice)
    const getProducts =async(e)=>{
   
     try {
       dispatch(getProductsStart())
       const res = await fetch(`/api/v1/juice/getjuice?search=${search}&minPrice=${minPrice}`,{
         method:'GET'
       })
       const data = await res.json()
       if(!res.ok){
         dispatch(getProductsFail(data.message))
         toast.error(data.message)
       }else{
         dispatch(getProductsSuccess(data))
       }
       
     } catch (error) {
       dispatch(getProductsFail(error.message))
       toast.error(error.message)
     }
   }
   useEffect(()=>{
      getProducts()
   },[search,minPrice])
  return (
    <div>
 
 {
  loading ? <Loader/> : <>
     {/* <h1 className=' text-5xl font-bold text-center mt-5' >All Juices</h1> */}
  <div className=' flex p-5' >
  <div className=' space-y-4' >
  <div className=' flex justify-center items-center gap-4' >
    <input
     type="text" 
    placeholder="Type here"
    onChange={(e)=>setSearch(e.target.value)}
    value={search}
    className="input input-bordered 
    w-full max-w-xs" />
    <div className=' bg-[#b0c751] p-2 rounded-xl cursor-pointer' >
      <IoMdSearch size={30} />
    </div>
       
    </div>
      <div className=' pt-14 space-y-4' >
      <p className=' text-[18px]'>Filter Products by Prices</p>
        <p className=' font-semibold text-2xl'>Price: {minPrice}$</p>
       <input type="range" onChange={(e)=>setMinPrice(e.target.value)}  min='0' max="1000" value={minPrice} className="range  w-[20rem] range-xs" />
      </div>
       </div>
  <div className=' mt-20 flex flex-wrap flex-col items-center md:flex-row justify-evenly' >
 {
  products.length>0 && products?.map((item)=>(
    <div key={item._id} class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img class="object-cover" src={item?.image?.url} />
      {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
    </a>
    <div class="mt-4 px-5 pb-5">
      <a href="#">
        <h5 class="text-xl tracking-tight text-slate-900">{item?.name}</h5>
      </a>
      <p>
        {item?.description?.substring(0,120)}...
      </p>
      <div class="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span class="text-3xl font-bold text-slate-900">${item?.price}</span>
        </p>
        <div class="flex items-center">
          <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
        </div>
      </div>
      <a href="#" class="flex items-center justify-center rounded-md bg-[#b0c751] px-5 py-2.5 text-center text-sm font-medium text-black  hover:bg-[#b6e107] focus:outline-none focus:ring-4 focus:ring-blue-300">
        {/* <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg> */}
        Buy Now</a
      >
    </div>
  </div>
  
  ))
 }


    </div>
  </div>
    
  </>
 }
</div>
  )
}

export default Shop




