import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import Drawer from 'react-modern-drawer'
import Menu from './Menu';


const MobileMenu = () => {
const [openDrawer, setOpenDrawer] = useState(false);

   const handleDrawer =()=>{
    setOpenDrawer((prevState)=> !prevState);
   }
    return (
        <>
            <div className=''>
                <BsList className='color--white fs--30 font--bold' onClick={handleDrawer}/>
                <Drawer
                open={openDrawer}
                onClose={handleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <Menu menuColor={true} handleDrawer={handleDrawer}/>
            </Drawer>
            </div>           
        </>
    )
}

export default MobileMenu