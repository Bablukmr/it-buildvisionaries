"use client"
import Image from "next/image";
import img from '../../assets/iconpng.png'
import Link from "next/link";
import Styles from './Navebar.modules.css'
import {navitem} from './navbaritems'


export default function Navbar() {
  console.log(navitem);
  return (
    <nav className={`${Styles.navbar} mt-0 rounded-sm  flex justify-between`}>
      <div >
     <Link href={'/'} className="flex items-center"><Image src={img} alt="Logo" width={80}/><h1 className="text-blue-800 text-lg font-bold ">BUILD<span className="text-amber-300">VISIONARY</span></h1></Link> 
      </div>
      <div >
        <ul className={`${Styles.menu} m-7 text-lg hidden sm:flex md:flex`}>
        {
          navitem.map((item,index)=>
          {return( <li key={index}>{item.title}</li>)}
          )
        }
        </ul>
      </div>
      
    </nav>
  )
}
