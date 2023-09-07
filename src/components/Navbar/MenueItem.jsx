import Link from 'next/link'
import React from 'react'
import styles from './Navebar.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function MenuItem({ item }) {
  return (
    <li>
      {item.url ? (
        <Link href={item.url}>{item.title}</Link>
      ) : (
         <span className={styles.downmenue}>{item.title}<ArrowDropDownIcon className={styles.down}/></span>
      )}
    </li>
  )
}

