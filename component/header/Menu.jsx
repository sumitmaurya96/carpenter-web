import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <ul className='header--nav--menu flex flex--justify-content-between flex--align-items-center '>
      {navList.map((listItem, index) => {
        return (
          <>
            <Link href={`/${listItem.link}`} keys={index}> <li className={`header--nav--menu-item fs--22 ${listItem.active}`}>{listItem.name}</li></Link>
          </>
        )
      })}


    </ul>
  )
}

export default Menu


const navList = [
  {
    name: "Orders",
    active: "active-header",
    link: "order"
  },
  {
    name: "Workers",
    active: " ",
    link: "worker"
  },
  {
    name: "Profile",
    active: " ",
    link: "profile"
  }
]