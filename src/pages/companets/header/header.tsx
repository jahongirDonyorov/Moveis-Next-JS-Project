import Image from "next/image"

function Header() {
  return (
   <header>
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
    <div></div>
   </header>
  )
}

export default Header