import { Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import DeleteWorker from './DeleteWorker';
import AddEmp from './AddEmp';
import { _deleteEmployeeById, _getEmployee } from '@/network/employee';
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WorkerDetals = () => {
    const router = useRouter();
    const [deleteEmp, setDeleteEmp] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [addEmp, setAddEmp] = useState(false);
    const [employee, setEmployee] = useState([]);
    const { isMobile, isIpad } = useCheckMobileScreen();

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [toDeleteEmp, setToDeleteEmp] = useState();

    const handleAdd = () => {
        setAddEmp(true);
    }
    useEffect(() => {
        _getEmployee(pageNumber, pageSize).then((res) => {
            setEmployee(res.data.employees);
            console.log(res);
            setTotalOrders(res.data.totalCount);
            setTotalPages(Math.ceil(res.data.totalCount / pageSize));
        })
    }, [pageNumber]);

    const handlePageChange = (e, newPage) => {
        console.log({ e });
        setPageNumber(newPage);
    }

    const handleDelete = (uuid) => {
        setToDeleteEmp(uuid);
        setDeleteEmp(router.push('/worker/employeeId/delete'));
        // router.push('/worker/employeeId/delete');

    }

    return (
        <>

                    {toDeleteEmp ? <DeleteWorker uuid={toDeleteEmp}/> :
                        <div className="worker container--responsive font--center">
                            <div className="font--center position--relative fs--20">
                                <input type="text" placeholder='search...' className='bg--shadow' />
                                <BsSearch className='position--absolute search-icon' />
                            </div>

                            <div className={`worker--card flex ${isMobile || isIpad ? "flex--direction-column" : "flex--justify-content-between flex--align-items-center"} mt--50`}>
                                {console.log("emp responce employee state", employee)}

                                {employee.map((emp, index) => {
                                    return (
                                        <div className="worker--card-list bg--shadow bg--radius pd--15" key={`emp-${index}`}>
                                            <span className='flex flex--justify-content-between flex--align-items-center'>
                                                <span className='color--maroon fs--22'>{emp.name}</span>
                                                <span>
                                                    <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>
                                                        <Link href={`/worker/${emp.uuid}`}>Edit</Link>
                                                    </button>
                                                    <button className='bg--maroon pl--15 pr--15 bg--radius color--white' onClick={() => handleDelete(emp.uuid)}>Delete
                                                    {/* <Link href={`/worker/employeeId/delete`}> </Link>*/}
                                                  </button>
                                                </span>
                                            </span>
                                            <div className='width--column-90 mt--25'>
                                                <span className="flex flex--justify-content-between flex--align-items-center">
                                                    <span className='font--bold'>Mobile No. :- </span>
                                                    <span>{emp.phone}</span>
                                                </span>
                                                <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                                                    <span className='font--bold'>Employee Id:-</span>
                                                    <span>{emp.uuid}</span>
                                                </span>
                                                <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                                                    <span className='font--bold'>Total Work-</span>
                                                    <span>5500</span>
                                                </span>
                                                <span className="flex flex--justify-content-between flex--align-items-center mt--15">
                                                    <span className='font--bold'>Profession:-</span>
                                                    <span>{emp.designation}</span>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="mb--50 mt--60 order--pagination">
                                <Stack spacing={2}>
                                    <Pagination
                                        count={totalPages}
                                        page={pageNumber}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Stack>
                            </div>
                            <Link href={`/worker/add`}>
                                <button className='bg--maroon bg--radius bg--shadow pd--10 fs--20 width--column-40 color--white' onClick={handleAdd}>Add Employee</button>
                            </Link>
                        </div>
                    }
                </>
    )
}

export default WorkerDetals