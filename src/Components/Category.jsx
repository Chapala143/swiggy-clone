import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


function Category() {
    
    const [categories, setCategory] = useState([
    {
        "image": "North_Indian_4.jpeg",
        "path": "north-indian"
    },
    {
        "image": "Pizza.jpeg",
        "path": "pizza"
    },
    {
        "image": "Noodles.jpeg",
        "path": "noodles"
    },
    {
        "image": "Pasta.jpeg",
        "path": "pasta"
    },
    {
        "image": "Paratha.jpeg",
        "path": "paratha"
    },
    {
        "image": "Biryani_2.jpeg",
        "path": "biryani"
    },
    {
        "image": "Burger.jpeg",
        "path": "burger"
    },
    {
        "image": "Cakes.jpeg",
        "path": "cakes"
    },
    {
        "image": "Chinese.jpeg",
        "path": "chinese"
    },
    {
        "image": "Chole_Bature.jpeg",
        "path": "chole-bature"
    },
    {
        "image": "Dosa.jpeg",
        "path": "dost"
    },
    {
        "image": "Gulab_Jamun.jpeg",
        "path": "gulab-jamun"
    },
    {
        "image": "Ice_Creams.jpeg",
        "path": "ice-creams"
    },
    {
        "image": "Idli.jpeg",
        "path": "idli"
    },
    {
        "image": "Khichdi.jpeg",
        "path": "khichdi"
    },
    {
        "image": "Poori.jpeg",
        "path": "poori"
    },
    {
        "image": "Pure_Veg.jpeg",
        "path": "pure-veg"
    },
    {
        "image": "Rolls.jpeg",
        "path": "rolls"
    },
    {
        "image": "Salad.jpeg",
        "path": "salad"
    },
    {
        "image": "South_Indian_4.jpeg",
        "path": "south-indian"
    }
]);
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if (categories.length-5 == slide) return false;
      setSlide(slide+5);
    }

    const prevSlide = () => {
        if (slide == 0) return false;
     setSlide(slide-5);
    }
    
  return (
    <>
    <div className='max-w-[1000px] h-full mx-auto'>

      <div className='flex items-center justify-between my-5'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
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
             <div className='flex overflow-hidden'>
             {
             categories.map(
              (cat,index) => {
              return (
             <div style={{
              transform: `translateX(-${slide*100}%)`
              }}
              key={index} className='w-[200px] shrink-0'>
             <img src={`images/${cat.image}`} alt="" /> 
             </div>
    
            )
        }
    )
}
      </div>
      <hr className='my-6 border-[1px]' />
      </div>
    </>
  )
}

export default Category
