import React from 'react';

const Skeleton = () => {
  return (
    <div className=' flex flex-col items-center space-y-10  ' >
      
      <div className=' md:flex md:space-x-44  '> 
      <div  className="flex w-72 flex-col gap-4">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div  className="flex w-72 flex-col gap-4">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div  className="flex w-72 flex-col gap-4">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
      </div>
     <div className=' md:flex md:space-x-44' >
     <div  className="flex w-72 flex-col gap-4">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div  className="flex w-72 flex-col gap-4">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div  className="flex w-72 flex-col gap-4">
            <div className="skeleton h-52 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
     </div>
    </div>
  );
}

export default Skeleton;
