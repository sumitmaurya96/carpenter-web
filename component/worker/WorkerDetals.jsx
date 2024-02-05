import { Pagination, Stack } from '@mui/material'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import DeleteWorker from './DeleteWorker';
import AddEmp from './AddEmp';

const WorkerDetals = () => {
    const [deleteEmp, setDeleteEmp] = useState(false);
    const [addEmp, setAddEmp] = useState(false);
    const handleDelete =()=>{
        setDeleteEmp(true);
    }
    const handleAdd=()=>{
        setAddEmp(true);
    }
    return (
        <> 
        {addEmp? <AddEmp/>:
        <>
        {deleteEmp? <DeleteWorker/> :       
        <div className="worker container--responsive font--center">
            <div className="font--center position--relative fs--20">
                <input type="text" placeholder='search...' className='bg--shadow' />
                <BsSearch className='position--absolute search-icon' />
            </div>

            <div className="worker--card flex flex--justify-content-between flex--align-items-center mt--50">
                <div className="worker--card-list bg--shadow bg--radius pd--15">
                    <span className='flex flex--justify-content-between flex--align-items-center'>
                        <span className='color--maroon fs--22'>Madan Kumar</span>
                        <span>
                            <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>Edit</button>
                            <button className='bg--maroon pl--15 pr--15 bg--radius color--white' onClick={handleDelete}>Delete</button>
                        </span>
                    </span>
                    <div className='width--column-90 mt--25'>
                        <span className="flex flex--justify-content-between flex--align-items-center">
                            <span className='font--bold'>Mobile No. :- </span>
                            <span>9852852748</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Employee Id:-</span>
                            <span>4525</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Total Work-</span>
                            <span>5500</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Profession:-</span>
                            <span>Carpenter</span>
                        </span>
                    </div>
                </div>
                <div className="worker--card-list bg--shadow bg--radius pd--15">
                    <span className='flex flex--justify-content-between flex--align-items-center'>
                        <span className='color--maroon fs--22'>Madan Kumar</span>
                        <span>
                            <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>Edit</button>
                            <button className='bg--maroon pl--15 pr--15 bg--radius color--white' onClick={handleDelete}>Delete</button>
                        </span>
                    </span>
                    <div className='width--column-90 mt--25'>
                        <span className="flex flex--justify-content-between flex--align-items-center">
                            <span className='font--bold'>Mobile No. :- </span>
                            <span>9852852748</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Employee Id:-</span>
                            <span>4525</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Total Work-</span>
                            <span>5500</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Profession:-</span>
                            <span>Carpenter</span>
                        </span>
                    </div>
                </div>
                <div className="worker--card-list bg--shadow bg--radius pd--15">
                    <span className='flex flex--justify-content-between flex--align-items-center'>
                        <span className='color--maroon fs--22'>Madan Kumar</span>
                        <span>
                            <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>Edit</button>
                            <button className='bg--maroon pl--15 pr--15 bg--radius color--white' onClick={handleDelete}>Delete</button>
                        </span>
                    </span>
                    <div className='width--column-90 mt--25'>
                        <span className="flex flex--justify-content-between flex--align-items-center">
                            <span className='font--bold'>Mobile No. :- </span>
                            <span>9852852748</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Employee Id:-</span>
                            <span>4525</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Total Work-</span>
                            <span>5500</span>
                        </span>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                            <span className='font--bold'>Profession:-</span>
                            <span>Carpenter</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mb--50 mt--60 order--pagination">
                <Stack spacing={2}>
                    <Pagination
                        count={10}  // Set the total number of pages
                        page={1}  // Set the current active page
                        // onChange={handlePageChange}  // Callback function for page change
                        color="primary"  // Set the color for the pagination control
                    />
                </Stack>
            </div>

            <button className='bg--maroon bg--radius bg--shadow pd--10 fs--20 width--column-40 color--white'onClick={handleAdd}>Add Employee</button>
        </div>
        }
        </>
    }
</>
        )
}

export default WorkerDetals