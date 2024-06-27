import React from 'react';
import { useNavigate } from 'react-router-dom';

function Carousel2Card({ src, tag, category }) {

  const navigate=useNavigate();

  const handleClick = () =>{
    navigate(`/products/${category}`)
  }
  return (
    <div onClick={handleClick}
      className="xl:w-[244px] xl:h-[189px] lg:w-[200px] lg:h-[150px] sm:h-[100px] w-full bg-cover px-2 h-[80px] bg-center hover:cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}
    >
      <span className="absolute bottom-1 left-1 text-white font-semibold bg-opacity-75 p-1 rounded">{tag}</span>
    </div>
  );
}

export default Carousel2Card;