import { useState } from "react";
import { _addOrders } from "../../network/order";
import { employeeFormInputFields, orderFormInputFields } from "./constants";

const AddEmp = ({ orderForm }) => {
  const [formSubmit, setFormSubmit] = useState({});
  const [submitData, setSubmitData] = useState({});
  const [workerForm, setWorkerForm] = useState({
    customerName: "",
    phone: "",
    visitTime: new Date(Date.now() + 24 * 3600 * 1000),
    address: "",
    worker: [],
    items: [],
  });

  const [workerErrorForm, setWorkerErrorForm] = useState({
    customerName: "",
    phone: "",
    visitTime: "",
    address: "",
    worker: "",
    items: "",
  });

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
  const validateMobile = (mobile) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(mobile)) {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          mobile: "please enter currect mobile no",
        };
      });
    } else {
      setWorkerErrorForm((prevState) => {
        return {
          ...prevState,
          mobile: " ",
        };
      });
    }
  };

  const _handleChange = (event, field) => {
    setWorkerForm((prevState) => {
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
    if (field === "customerName") {
      validateName(event.target.value);
    }
    if (field === "phone") {
      validateMobile(event.target.value);
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log(workerForm, "thi si data");
    const payload = {
      customerName: workerForm.customerName,
      visitTime: 1708426649000,
      phone: workerForm.phone,
      workers: [],
      items: [],
      address: `${workerForm.address}, ${workerForm.landmark}, ${workerForm.city}, ${workerForm.pincode}`,
    };

    _addOrders({ payload })
      .then((response) => {
        console.log("form data payload", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = () => {};

  return (
    <>
      {orderForm ? (
        <div className="container--responsive flex flex--justify-content-center flex--align-items-center mt--100">
          <div className="employee bg--shadow bg--radius font--center">
            <form
              className="flex flex--wrap flex--justify-content-between flex--align-items-center pd--20"
              onSubmit={handleSubmitOrder}
            >
              {orderFormInputFields.map((input, index) => (
                <>
                  <div className="width--column-40" style={{ height: "64px" }}>
                    <input
                      type={input.type}
                      name={input.field}
                      placeholder={input.placeholder}
                      className="mt--15"
                      value={workerForm[input.field]}
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
                Add Order
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="container--responsive flex flex--justify-content-center flex--align-items-center mt--100">
          <div className="employee bg--shadow bg--radius font--center">
            <form
              className="flex flex--wrap flex--justify-content-between flex--align-items-center pd--20"
              onSubmit={handleSubmit}
            >
              {employeeFormInputFields.map((input, index) => (
                <>
                  <div className="width--column-40" style={{ height: "64px" }}>
                    <input
                      type={input.type}
                      name={input.field}
                      placeholder={input.placeholder}
                      className="mt--15"
                      value={workerForm[input.field]}
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
                className="bg--maroon bg--radius pd--10 color--white width--column-one mt--40"
              >
                Add Employee
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEmp;
