import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
const [datas, setData] = useState([
  {
      "image": "2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
      "offer": "Items at ₹179",
      "title": "Pizza Hut",
      "rating": 4.2,
      "minTime": 30,
      "maxTime": 40,
      "name": "Pizzas",
      "place": "New Jodhpur"
  },
  {
      "image": "75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
      "offer": "₹50 OFF ABOVE ₹199",
      "title": "Janta Sweet Home",
      "rating": 4.5,
      "minTime": 35,
      "maxTime": 40,
      "name": "Sweets,South Indian",
      "place": "Shastri Nagar"
  },
  {
      "image": "cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
      "offer": "₹85 OFF ABOVE ₹149",
      "title": "Parihaar Bhojnalay",
      "rating": 4.3,
      "minTime": 35,
      "maxTime": 40,
      "name": "North India, Thalis",
      "place": "Sardarpura"
  },
  {
      "image": "eillc7d7hbrzcuussus5.jpeg",
      "offer": "₹70 OFF ABOVE ₹149",
      "title": "Kwality Walls Frozen",
      "rating": 4.5,
      "minTime": 25,
      "maxTime": 25,
      "name": "Desserts,Ice Cream",
      "place": "Chopsani Housing Board"
  },
  {
      "image": "6e04be27387483a7c00444f8e8241108.jpeg",
      "offer": "₹1-5 OFF ABOVE ₹179",
      "title": "The Good Bowl",
      "rating": 4.4,
      "minTime": 30,
      "maxTime": 35,
      "name": "Biryani, North India",
      "place": "Shastri Nagar"
  },
  {
      "image": "w7ndo1dkkk6kf4qfz2p1.jpeg",
      "offer": "₹100 OFF ABOVE ₹499",
      "title": "NIC Ice Creams",
      "rating": 4.7,
      "minTime": 25,
      "maxTime": 30,
      "name": "Desserts,Ice Cream",
      "place": "Sardarpura"
  },
  {
      "image": "f1bc9ddf53de574cdc35ab2f717df234.jpeg",
      "offer": "Items at ₹109",
      "title": "Dosh Center",
      "rating": 4.0,
      "minTime": 35,
      "maxTime": 40,
      "name": "South Indian",
      "place": "Chopsani Housing Board"
  },
  {
      "image": "919cb3be0e7406f86f6741ebe7c30128.jpeg",
      "offer": "₹125 OFF ABOVE ₹349",
      "title": "Lunch Box - Meals and Thalis",
      "rating": 4.3,
      "minTime": 30,
      "maxTime": 35,
      "name": "Biryani, North India",
      "place": "Shastri Nagar"
  },
  {
      "image": "535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
      "offer": "₹70 OFF ABOVE ₹249",
      "title": "McDonald's",
      "rating": 4.4,
      "minTime": 30,
      "maxTime": 35,
      "name": "American",
      "place": "Rawaton Ka Bass"
  },
  {
      "image": "2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
      "offer": "₹100 OFF ABOVE ₹449",
      "title": "Kajal's Cake",
      "rating": 4.5,
      "minTime": 35,
      "maxTime": 40,
      "name": "Cake",
      "place": "Chopsani Housing Board"
  }
]);
 
const [slide, setSlide] = useState(0);

const nextSlide = () => {
    if (datas.length-2 == slide) return false;
  setSlide(slide+2);
}

const prevSlide = () => {
    if (slide == 0) return false;
 setSlide(slide-2);
}

  

  return (
    <>
     <div className='max-w-[1000px] h-full mx-auto'>

        <div className='flex items-center justify-between my-5'>

        <div className='text-[25px] font-bold'>Top restaurant chains 
            in Hyderabad</div>
        <div className='flex'> 

         <div className='cursor-pointer flex justify-center items-center w-[30px]
          h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={prevSlide}>
          <FaArrowLeft />
          </div>

           <div className='cursor-pointer flex justify-center items-center w-[30px] 
            h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
           <FaArrowRight />
             </div>

             </div>
           </div>



             <div  className='flex gap-8 overflow-hidden'>
             {
            datas.map((data,index) => (
                <div style={{
                    transform: `translateX(-${slide*100}%)`
                    }} key={index}>
                <Card data={data}/>
                </div>
                
            ))
            }
              </div>
              <hr className='my-4 border-[1px]' />

             </div>
             </>
  )
}

export default TopRest
