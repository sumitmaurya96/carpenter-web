import { _deleteEmployeeById } from '@/network/employee';
import { useRouter } from 'next/router';
import React from 'react'

const DeleteWorker = ({uuid}) => {
    const router = useRouter();

    const handleConflrmDelete=(e)=>{
    _deleteEmployeeById(uuid).then((res) => {
        console.log(uuid, "hello bhaii respone aya kya");
        router.push('/worker');
    });
}
    return (
        <div className='container--responsive flex flex--justify-content-center flex--align-items-center mt--100'>
            <div className="delete bg--shadow bg--radius font--center bg--maroon pd--10">
                <p className='fs--20 color--white'>Are you sure. You want to delete
                    Ram Manohar, 23457. Please enter
                    the employee id below</p>
                    <input type="text" placeholder='type here' className='pd--10 bg--radius border--none mb--10 mt--50'/>
                <button className='bg--white bg--radius pd--5 fs--18 color--maroon width--column-90 mt--20' onClick={(e)=>handleConflrmDelete(e)}>Delete Employee</button>
            </div>
        </div>
    )
}

export default DeleteWorker