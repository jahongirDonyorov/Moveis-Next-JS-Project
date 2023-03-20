import { HeroProps } from './hero.props';
import { useState, useEffect } from 'react';
import { IMovie } from '../../interfaces/app.interface';
import Image from 'next/image';
import { image_base } from 'src/helpers/constants';
import {TbPlayerPlay} from 'react-icons/tb'

const Hero = ({trending}: HeroProps):JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie)
  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie)
  },[trending])

  return (
    <div className='flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end'>
      <div className='absolute top-0 -z-50 left-0 h-[95vh] w-full'>
        <Image 
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} 
          alt={movie.title} 
          fill 
          className='object-cover' />
        {/* image dameni bulishi kerak next.config ga qaysi damendan image olgan bulsak yozish kerak */}
      </div>

      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          {/* ? bor bulsa manosida keladi */}
          {movie?.title || movie?.name || movie?.original_name }
      </h1>
      
        <p className='max-w-xs md:max-w-lg lg:max-w-2x1 text-xs md:text-lg lg:text-2x1'>{movie?.overview}</p>
        <div>
          <button 
            className=' flex justify-center items-center space-x-2 bg-white/40 font-bold text-black w-[200px] h-[56px] rounded-full '>
            <TbPlayerPlay className='h-5 w-5 md:h8 md:w-8'/>
            Watch now
          </button>
        </div>

    </div>
  )
}

export default Hero