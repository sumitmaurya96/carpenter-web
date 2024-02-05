import React, { useState } from 'react'

const AddEmp = () => {
  return (  
     <div className='container--responsive flex flex--justify-content-center flex--align-items-center mt--100'>
     <div className="employee bg--shadow bg--radius font--center">
        <div className="flex flex--justify-content-between flex--align-items-center mt--30">
         <span className=''>
         <input type="text" name='username' placeholder='Enter Name' className='mt--15'/>
         <input type="text" name='username' placeholder='Enter  Email' className='mt--15'/>
         <input type="text" name='username' placeholder='Mobile No.' className='mt--15'/>
         <input type="text" name='username' placeholder='Designation' className='mt--15'/>
         </span>
         <span>
         <input type="text" name='username' placeholder='Address' className='mt--15'/>
         <input type="text" name='username' placeholder='Landmark' className='mt--15'/>
         <input type="text" name='username' placeholder='Pin Code' className='mt--15'/>
         <input type="text" name='username' placeholder='City' className='mt--15'/>
         </span>
        </div>
        <button className='bg--maroon bg--radius pd--10 color--white width--column-90 mt--20'>Add Employee</button>
     </div>
   </div>
  )
}

export default AddEmp