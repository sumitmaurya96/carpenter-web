import Link from 'next/link'
import React from 'react'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen';

const Menu = ({handleDrawer}) => {
  const {isMobile, isIpad } = useCheckMobileScreen();

  return (
   <>
    <ul className={`header--nav--menu flex ${isMobile || isIpad? "flex--direction-column " : "flex--justify-content-between "} flex--align-items-center`}>
      {navList.map((listItem, index) => {
        return (
          <React.Fragment key={`menu-${index}`}>
            <Link href={`/${listItem.link}`} keys={index}> <li className={`header--nav--menu-item fs--22 ${listItem.active} ${isMobile || isIpad? "color--maroon mt--20" : "color--white"}`} onClick={handleDrawer}>{listItem.name}</li></Link>
          </React.Fragment>
        )
      })}
    </ul>
   </>
  )
}

export default Menu


const navList = [
  {
    name: "Orders",
    active: "active-header",
    link: "orders"
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