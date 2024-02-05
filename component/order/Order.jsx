import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Order = () => {
  return (
    <>
      <div className="order container--responsive font--center">
        <div className="font--center position--relative fs--20">
        <input type="text" placeholder='search...' className='bg--shadow'/>
        <BsSearch  className='position--absolute search-icon'/>
        </div>

        <div className="order--card flex flex--justify-content-between flex--align-items-center mt--50">
            <div className="order--card-list bg--shadow bg--radius pd--15">
            <span className='flex flex--justify-content-between flex--align-items-center'>
                <span className='color--maroon fs--22'>Madan Kumar</span>
                <span>
                    <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>Edit</button>
                    <button className='bg--maroon pl--15 pr--15 bg--radius color--white'>Delete</button>
                </span>
            </span>
            <div className='flex flex--justify-content-between flex--align-items-center'>
                <div className="mt--15">
                <span className="flex flex--justify-content-between flex--align-items-center">
                <span className='font--bold'>Mobile No. :- </span>
                <span>9852852748</span>
                </span>
                <span className="flex flex--justify-content-between mt--15">
                <span className='font--bold'>Address:- </span>
                <span className='width--column-60 font--right'>33 Main Road, BTM Benglore, 450100</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Call Time:-</span>
                <span>12.15pm, yesterday</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Worker:-</span>
                <span>Madan Gopal</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>No. of Work:-</span>
                <span>10</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Payment:-</span>
                <span>5213</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Order No.:-</span>
                <span>420</span>
                </span>
                </div>
               
            </div>
            </div>
            <div className="order--card-list bg--shadow bg--radius pd--15">
            <span className='flex flex--justify-content-between flex--align-items-center'>
                <span className='color--maroon fs--22'>Madan Kumar</span>
                <span>
                    <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>Edit</button>
                    <button className='bg--maroon pl--15 pr--15 bg--radius color--white'>Delete</button>
                </span>
            </span>
            <div className='flex flex--justify-content-between flex--align-items-center'>
                <div className="mt--15">
                <span className="flex flex--justify-content-between flex--align-items-center">
                <span className='font--bold'>Mobile No. :- </span>
                <span>9852852748</span>
                </span>
                <span className="flex flex--justify-content-between mt--15">
                <span className='font--bold'>Address:- </span>
                <span className='width--column-60 font--right'>33 Main Road, BTM Benglore, 450100</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Call Time:-</span>
                <span>12.15pm, yesterday</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Worker:-</span>
                <span>Madan Gopal</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>No. of Work:-</span>
                <span>10</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Payment:-</span>
                <span>5213</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Order No.:-</span>
                <span>420</span>
                </span>
                </div>
               
            </div>
            </div>
            <div className="order--card-list bg--shadow bg--radius pd--15">
            <span className='flex flex--justify-content-between flex--align-items-center'>
                <span className='color--maroon fs--22'>Madan Kumar</span>
                <span>
                    <button className='bg--success pl--15 pr--15 bg--radius color--white mr--10'>Edit</button>
                    <button className='bg--maroon pl--15 pr--15 bg--radius color--white'>Delete</button>
                </span>
            </span>
            <div className='flex flex--justify-content-between flex--align-items-center'>
                <div className="mt--15">
                <span className="flex flex--justify-content-between flex--align-items-center">
                <span className='font--bold'>Mobile No. :- </span>
                <span>9852852748</span>
                </span>
                <span className="flex flex--justify-content-between mt--15">
                <span className='font--bold'>Address:- </span>
                <span className='width--column-60 font--right'>33 Main Road, BTM Benglore, 450100</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Call Time:-</span>
                <span>12.15pm, yesterday</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Worker:-</span>
                <span>Madan Gopal</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>No. of Work:-</span>
                <span>10</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Payment:-</span>
                <span>5213</span>
                </span>
                <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                <span className='font--bold'>Order No.:-</span>
                <span>420</span>
                </span>
                </div>
               
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

        <button className='bg--maroon bg--radius bg--shadow pd--10 fs--20 width--column-40 color--white '>Add Order</button>
       </div>
       
    
    
    </>
    )
}

export default Order