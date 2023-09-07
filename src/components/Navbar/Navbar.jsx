"use client"
import Image from "next/image";
import styles from './Navebar.module.css'
import {navitem} from './navbaritems'
import MenueItem from "./MenueItem";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar}`}>
      <div >
     <Logo/>
      </div>
      <div >
        <ul className={`${styles.menu}`}>
        {
          navitem.map((item,index)=>
          {return( <MenueItem key={index} item={item} depth={1}/>)}
          )
        }
        </ul>
      </div>
      
    </nav>
  )
}
