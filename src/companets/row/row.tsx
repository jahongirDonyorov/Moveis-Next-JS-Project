import { RowProps } from './row.props';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import Thubnail from '../thubnail/thubnail';
import { useRef, useState } from 'react';

function Row({title, movies, isBig = false}:RowProps) {
  const [moved, setMoved] = useState<boolean>(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: 'left' | 'right') => {
    setMoved(true)

    if (carouselRef.current) { // carouselRef malumot bulsa ishlaydi
      // 1. clientWidth ekranni eni px kursatadi
      // 2. scrollLeft bosilganda nomeri chiqadi
      const { scrollLeft, clientWidth} = carouselRef.current;

      const scrollT = direction === 'left'? scrollLeft - clientWidth : scrollLeft + clientWidth;

      // if (?) ishlaganda scrollLeft (element nomeri) dan clientWidth (window width) ayiriladi     1 - 800px
      // else (:) da esa quwiladi 1 + 500px 

      carouselRef.current.scrollTo({left: scrollT, behavior:'smooth'})// scrollTo utkazadi
      // behavior:'smooth' bosilganda astaroq chiroyli bulib utkazadi

      if(direction === 'left' && scrollT === 0){
        setMoved(false)
      }
     
    }
  };

  return (
    <div className='h-[600px] space-y-1 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200'>
        {title}
      </h2>

      {/* Carusel */}
      <div className='group relative md:ml-2'>

          <AiFillCaretLeft className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 
           cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125
           ${!moved && 'hidden'}`}
           onClick={() => handleClick('left')}/>
         
          <div ref={carouselRef} className={`flex scrollbar-hide items-center ${isBig ? 'space-x-0 md:space-x-0' : 'space-x-1 md:space-x-4'}  overflow-hidden overflow-x-scroll `}>
            {/* Thumbnail */}
            {movies.map(movies => (<Thubnail key={movies.id} movie={movies} isBig={isBig}/>))}
          </div>

          <AiFillCaretRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6
           cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125 
           `}
           onClick={() => handleClick('right')}/>

      </div>
    </div>
  );
};

export default Row;