"use client"
import Image from "next/image";
import img from '../assets/iconpng.png'
import Link from "next/link";
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar mt-0 rounded-sm  flex justify-between">
      <div >
     <Link href={'/'} className="flex items-center"><Image src={img} alt="Logo" width={80}/><h1 className="text-blue-800 text-lg font-bold ">BUILD<span className="text-amber-300">VISIONARY</span></h1></Link> 
      </div>
      <div >
        <ul className="menu m-7 text-lg hidden sm:flex md:flex">
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/'}><li>Contact</li></Link>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/'}><li>About</li></Link>
        </ul>
      </div>
      
    </nav>
  )
}
