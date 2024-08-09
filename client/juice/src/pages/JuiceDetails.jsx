import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
const JuiceDetails = () => {
  return (
    <div>
        <div className=' md:p-14 md:flex md:justify-between md:items-center ' >
            <div className=' md:w-[50%]' >
                <img className=' h-96' src="https://images.pexels.com/photos/357577/pexels-photo-357577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="juice" />
            </div>
            <div className=' p-8 md:space-y-3  space-y-2 md:w-[60%]'>
                <p className=' text-2xl text[#b0c75] font-semibold ' >Kambucha Mixed Juice</p>
                <h2  className=' text-3xl font-bold' >Kambucha Lemon juice </h2>
                <div>
                    <h1 className=' text-4xl font-semibold' >$300</h1>
                </div>
                <div className=' flex' >
                    <RiStarSFill color='orange' size={20} />
                    <RiStarSFill color='orange' size={20} />
                    <RiStarSFill color='orange' size={20} />
                    <RiStarSFill color='orange' size={20} />
                </div>
                <div>
                    <h2>In Stock</h2>
                </div>
             <div>
          <button className=' font-semibold rounded-md p-6 flex h-2rem hover:bg-[#b6e107] bg-[#b0c751] items-center gap-2 w-[11rem] h-[3rem]' >
           <AiOutlineShoppingCart size={25}/>  Add to cart
          </button>
             </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam ad voluptas numquam quas mollitia porro dolor ea esse nesciunt atque cumque, dolorum fuga ut ullam natus eius neque unde, aspernatur placeat sint doloribus laborum. Vero culpa veritatis et doloremque odio, cupiditate quos corrupti quasi, at harum fugit a autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde veniam adipisci sed cumque accusamus obcaecati voluptates ea quas fugiat nesciunt nihil assumenda libero, saepe officia autem totam? Alias, tempora. Perspiciatis!
                </p>
            </div>
        </div>
    </div>
  )
}

export default JuiceDetails


