"use client"

import React from 'react'
import {Image, Divider} from "@nextui-org/react";
import {useRouter} from 'next/navigation';

const productList = [
  {id: 1, productName: 'Hawkins Cooker 5l', image:'https://dokonepal.com.np/wp-content/uploads/2021/06/DOKO-705-600x600.jpg', price:30},
  {id: 2, productName: 'Caliber Shoes', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScU0HuPdyRIZJADBg9UZRLnhOmXt7wreFxNQ&s', price:1400},
  {id: 3, productName: 'Casio Watch', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWDZu-vt_GYCMLboh3JHWnOrRbkHaGR_CbQ&s', price:30030},
  {id: 4, productName: 'Iphone 15 Pro Max', image:'https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-15-pro-max/carousel/SD-PDP-01-iphone-15-pro-max-black-titanium-front-back.jpg/renditions/version-1694746199414/492.jpeg', price:200000},
 ]

const Home = () => {
  const router = useRouter(false);

  const handleClick = (id) => {
    router.push(`/home/${id}`);
  };

  return (
    <div className='flex' >
      {
        productList.map((item)=>{
          return ( 
          <div 
            key={item.id} 
            className='grid grid-cols-1 border border-sky-500 divider-x w-full p-1 m-2 cursor-pointer' 
            onClick={() => handleClick(item.id)}>
            <div className='flex justify-center'>{item.price} </div>
            <div className='font-extrabold flex justify-center'> {item.productName}</div>
            <Divider/>
            <div className='flex justify-center' > 
              <Image 
                src={item.image}
                width={200} height={200}/> 
            </div> 
          </div>)
         })
      }
    </div>
  )
}

export default Home