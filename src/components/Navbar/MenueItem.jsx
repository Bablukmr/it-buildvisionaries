import Link from 'next/link'
import React from 'react'
import styles from './Navebar.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function MenuItem({ item }) {
  return (
    <li>
      {item.url ? (
        <Link href={item.url}>{item.title}</Link>
      ) : (
        <>
          <span className={styles.downmenu}>
            {item.title} <ArrowDropDownIcon className={styles.down} />
          </span>
        {false ? ( {item.subitem && item.subitem.length > 0 && (
            <ul className=''>
              {item.subitem.map((subitem, index) => (
                <li key={index}>
                  {subitem.url ? (
                    <Link href={subitem.url}>{subitem.title}</Link>
                  ) : (
                    subitem.title
                  )}
                </li>
              ))}
            </ul>
          )}):""}
        </>
      )}
    </li>
  )
}
