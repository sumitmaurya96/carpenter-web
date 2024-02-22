import { useState } from "react";
import { _addOrders } from "../../network/order";
import { orderFormInputFields } from "./constants";

const INITIAL_ORDER_FORM_STATE = {
  customerName: "",
  phone: "",
  visitTime: new Date(Date.now() + 24 * 3600 * 1000),
  designation: "",
  landmark: "",
  address: "",
  pincode: "",
  worker: "",
  city: "",
};

const AddEmp = ({ orderForm }) => {
  const [orderForm, setOrderForm] = useState(INITIAL_ORDER_FORM_STATE);

  const _handleChange = (event, field) => {
    setOrderForm((prevState) => {
      return {
        ...prevState,
        [field]:
          field === "visiTime"
            ? new Date(event.target.value)
            : event.target.value,
      };
    });
  };

  const getAddress = ({ address, landmark, pincode, city }) => {
    return `${address}, ${landmark}, ${city}, Pin Code - ${pincode}`;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    const workers = [];

    if (orderForm.worker !== "") {
      workers.push({ workerId: orderForm.worker });
    }

    const payload = {
      customerName: orderForm.customerName,
      visitTime: orderForm.visitTime,
      phone: orderForm.phone,
      workers,
      items: [],
      address: getAddress({
        address: orderForm.address,
        landmark: orderForm.landmark,
        pincode: orderForm.pincode,
        city: orderForm.city,
      }),
    };

    _addOrders({ payload })
      .then((response) => {
        console.log("form data payload", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
  );
};

export default AddEmp;
