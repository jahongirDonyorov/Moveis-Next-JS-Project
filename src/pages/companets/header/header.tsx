import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import {BiBellMinus} from 'react-icons/bi'

function Header() {
  // scroll bulganda header rangi uzgarishi uchun
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // scrol bulsa true bulmasa false bulsin degan function
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    // hodisa quwilyapdi scroll bulganda function ishga tushsin
    window.addEventListener('scroll', handleScroll);
    // ??
    // return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  return (
    // scrolled true bulsa shu ranga kirsin 
   <header className={`${scrolled && 'bg-[#e10856] shadow-lg'}`}> 
    <div className="flex items-center space-x-2 md:space-x-10">
      {/* md bu responsive uchun mediumdan kiyin shu qiymatga aylanadi  */}
     <Image src={"./logo.svg"} alt={"logo"} width={56}  height={56} /> 
     {/* shu yerdagi hamma atrebutlar bulishi kerak unda xato buladi */}
     <ul className="space-x-4 md:flex hidden">
      <li className="navLink">Home</li>
      <li className="navLink">Movies</li>
      <li className="navLink">TV Shows</li>
      <li className="navLink">New</li>
      <li className="navLink">Popular</li>
     </ul>
    </div>

    <div className="flex items-center space-x-4 text-sm font-light">
      <AiOutlineSearch className="h-6 w-6 cursor-pointer"/>
      <p className="hidden lg:inline  cursor-pointer font-semibold">Kids</p>
      <BiBellMinus className="h-6 w-6 cursor-pointer"/>
      <Link href={'/accaunt'}>
        <AiOutlineUser className="h-6 w-6 cursor-pointer"/>
      </Link>
    </div>
   </header>
  )
}

export default Header 