import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { _addOrders, _getOrderById } from "../../network/order";
import { employeeFormInputFields } from "./constants";
import { _addEmployee } from "../../network/employee";

const AddEmp = () => {
  const router = useRouter();
  const [mode, setMode] = useState("Add");
  const [empForm, setEmpForm] = useState({
    name: "",
    phone: "",
    email: "",
    disignation:"",
    password:"",
    address: "",
    city: "",
    pincode: "",
    landmark: "",
  });

  const [workerErrorForm, setWorkerErrorForm] = useState({
    name: "",
    phone: "",
    email: "",
    disignation:"",
    password:"",
    address: "",
    city: "",
    pincode: "",
    landmark: "",
  });

  useEffect(() => {
    console.log({ router });
    if (router.query.orderId) {
      setMode("Edit");
      _getEmployeeById(router.query.orderId).then((res) => {
        const fullAddress = res.data.address.split(",");
        setEmpForm((prevState) => {
          return {
            ...prevState,
            name: res?.data?.name,
            phone: res?.data?.phone,
            email: res?.data?.email,
            password: res?.data?.password,
            disignation: res?.data?.disignation,
            address: fullAddress[0],
            city: fullAddress[1],
            landmark: fullAddress[2],
            pincode: fullAddress[3],
           
          };
        });
        console.log({ res });
      });
    }
  }, [router]);

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(name)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          name: "please enter your name",
        };
      });
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          name: "",
        };
      });
    }
  };
  const validateMobile = (phone) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(phone)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          phone: "please enter currect mobile no",
        };
      });
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          phone: " ",
        };
      });
    }
  };
  const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(! emailRegex.test(email)){
      setWorkerErrorForm((prevState)=>{
        return{
          ...prevState,
          email: "please enter currect email id",
        }
      });
    }else{
      setWorkerErrorForm((prevState)=>{
        return{
          ...prevState,
          email: " ",
        }
      })
    }
  };
  const validatePinCode = (pincode)=>{
    const indiaPinCodeRegex = /^\d{6}$/;
    if(! indiaPinCodeRegex.test(pincode)){
      setWorkerErrorForm((prevState)=>{
        return{
          ...prevState,
          pincode: "please enter currect pin code",
        }
      });
    }else{
      setWorkerErrorForm((prevState)=>{
        return{
          ...prevState,
          pincode: " ",
        }
      })
    }
  };

  const _handleChange = (event, field) => {
    setEmpForm((prevState) => {
      return {
        ...prevState,
        [field]:
          field === "visiTime"
            ? new Date(event.target.value)
            : event.target.value,
      };
    });
    if (event.target.value === "") {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          [field]: "",
        };
      });
      return;
    }
    if (field === "name") {
      validateName(event.target.value);
    }
    if (field === "phone") {
      validateMobile(event.target.value);
    }
    if(field === "email"){
      validateEmail(event.target.value);
    }
    if(field === "pincode"){
      validatePinCode(event.target.value);
    }
  };

  const handleSubmitEmp = (e) => {
    e.preventDefault();
    console.log(empForm, "thi si data");
    const payload = {
      name: empForm.name,
      phone:empForm.phone,
      email: empForm.email,
      password: empForm.password,
      disignation:empForm.disignation,
      address: `${empForm.address}, ${empForm.landmark}, ${empForm.city}, ${empForm.pincode}`,
    };

    _addEmployee({ payload })
      .then((response) => {
        console.log("employee form data payload", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container--responsive flex flex--justify-content-center flex--align-items-center mt--100">
        <div className="employee bg--shadow bg--radius font--center">
          <form
            className="flex flex--wrap flex--justify-content-between flex--align-items-center pd--20"
            onSubmit={handleSubmitEmp}
          >
            {employeeFormInputFields.map((input, index) => (
              <>
                <div className="width--column-40" style={{ height: "64px" }} key={`addEmp-${index}`}>
                  <input
                    type={input.type}
                    name={input.field}
                    placeholder={input.placeholder}
                    className="mt--15"
                    value={empForm[input.field]}
                    onChange={(e) => _handleChange(e, input.field)}
                    key={input.field}
                  />
                  <p
                    className={`${
                      workerErrorForm[input.field] ? "" : "hide"
                    } color--error`}
                    style={{ fontSize: "10px" }}
                  >
                    {workerErrorForm[input.field]}
                  </p>
                </div>
              </>
            ))}
            <button
              type="submit"
              className="bg--maroon bg--radius pd--10 color--white width--column-one mt--10"
            >
              {mode} Employee
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
