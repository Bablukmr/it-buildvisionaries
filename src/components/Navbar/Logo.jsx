import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../assets/iconpng.png'
import Styles from './Navebar.module.css'


export default function Logo() {
  
  return (
    <div><Link href={'/'} className="flex items-center"><Image src={img} alt="Logo" width={80}/><h1 className="text-blue-800 text-lg font-bold ">BUILD<span className="text-amber-300">VISIONARY</span></h1></Link> </div>
  )
}
