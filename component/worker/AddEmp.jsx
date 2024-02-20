import React, { useState } from 'react'
import { orderFormInputFields,employeeFormInputFields } from './constants';
import { _addOrders } from '../../network/order';

const AddEmp = ({ orderForm }) => {
  const [formSubmit, setFormSubmit] = useState({});
  const [submitData, setSubmitData] = useState({})
  const [workerForm, setWorkerForm] = useState({
    customerName: '',
    email: '',
    phone: '',
    visitTime: new Date(Date.now() + 24 * 3600 * 1000),
    designation: '',
    landmark: '',
    pincode: '',
    city: ''
  });

  const [workerErrorForm, setWorkerErrorForm] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    landmark: '',
    pincode: '',
    city: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          email: 'Email is not proper. Rewrite email again..'
        }
      })
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          email: ''
        }
      })
    }

  };
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(name)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          name: "please enter your name"
        }
      })
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          name: ""
        }
      })
    }
  }
  const validateMobile = (mobile) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(mobile)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          mobile: "please enter currect mobile no"
        }
      })
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          mobile: " "
        }
      })
    }
  }
  const validatePinCode = (pincode) => {
    const pinCodeRegex = /^[0-9]{6}$/;
    if (!pinCodeRegex.test(pincode)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          pincode: "Please enter curect pin code"
        }
      })
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          pincode: ""
        }
      })
    }
  }
  const validateCity = (city) => {
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(city)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          city: "please enter your city"
        }
      })
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          name: ""
        }
      })
    }
  }


  const _handleChange = (event, field) => {

    setWorkerForm((prevState) => {
      return {
        ...prevState,
        [field]: field === 'visiTime' ? new Date(event.target.value) : event.target.value
      }
    })
    if (event.target.value === '') {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          [field]: ''
        }
      })
      return;
    }
    if (field === 'customerName') {
      validateName(event.target.value)

    }
    if (field === 'email') {
      validateEmail(event.target.value)
    }
    if (field === 'phone') {
      validateMobile(event.target.value)
    }
    if (field === 'pincode') {
      validatePinCode(event.target.value)
    }
    if (field === 'city') {
      validateCity(event.target.value)

    }

    console.log(event);
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log(workerForm, "thi si data");
    const payload = {
      customerName: workerForm.name,
      visitTime: 1708426649000,
      phone: workerForm.mobile,
      workers: [{ workerId: workerForm.worker}],
      items: workerForm.items,
      address: workerForm.address + workerForm.landmark + workerForm.pincode + workerForm.city,
    }

    _addOrders({payload}).then((response)=>{
          console.log("form data payload",response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  return (
    <>
    {orderForm ?
    <div className='container--responsive flex flex--justify-content-center flex--align-items-center mt--100'>
      <div className="employee bg--shadow bg--radius font--center">
        <form className="flex flex--wrap flex--justify-content-between flex--align-items-center pd--20" onSubmit={handleSubmitOrder}>
          {orderFormInputFields.map((input, index) => (
            <>
              <div className='width--column-40' style={{ height: '64px' }}>
                <input type={input.type} name={input.field} placeholder={input.placeholder} className='mt--15' value={workerForm[input.field]} onChange={(e) => _handleChange(e, input.field)} key={input.field} />
                <p className={`${workerErrorForm[input.field] ? '' : 'hide'} color--error`} style={{ fontSize: '10px' }}>{workerErrorForm[input.field]}</p>
              </div>
            </>
          ))}
           <button type='submit' className='bg--maroon bg--radius pd--10 color--white width--column-one mt--10'>Add Order</button>

        </form>
      </div>
    </div>

:
    <div className='container--responsive flex flex--justify-content-center flex--align-items-center mt--100'>
      <div className="employee bg--shadow bg--radius font--center">
        <form className="flex flex--wrap flex--justify-content-between flex--align-items-center pd--20" onSubmit={handleSubmit}>
          {employeeFormInputFields.map((input, index) => (
            <>
              <div className='width--column-40' style={{ height: '64px' }}>
                <input type={input.type} name={input.field} placeholder={input.placeholder} className='mt--15' value={workerForm[input.field]} onChange={(e) => _handleChange(e, input.field)} key={input.field} />
                <p className={`${workerErrorForm[input.field] ? '' : 'hide'} color--error`} style={{ fontSize: '10px' }}>{workerErrorForm[input.field]}</p>
              </div>
            </>
          ))}
           <button type='submit' className='bg--maroon bg--radius pd--10 color--white width--column-one mt--40'>Add Employee</button>
        </form>
      </div>
    </div>
}
    </>
    
  )
}

export default AddEmp

