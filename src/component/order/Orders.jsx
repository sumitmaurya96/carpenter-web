import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { _getOrders } from "../../network/order";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    _getOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <div className="order container--responsive font--center">
        <div className="font--center position--relative fs--20">
          <input type="text" placeholder="search..." className="bg--shadow" />
          <BsSearch className="position--absolute search-icon" />
        </div>
        <div className="order--card flex flex--justify-content-between flex--align-items-center mt--50">
          {orders.map((order, index) => (
            <>
              <div className="order--card-list bg--shadow bg--radius pd--15">
                <span className="flex flex--justify-content-between flex--align-items-center">
                  <span className="color--maroon fs--22">
                    {order.customerName}
                  </span>
                  <span>
                    <button className="bg--success pl--15 pr--15 bg--radius color--white mr--10">
                      Edit
                    </button>
                    <button className="bg--maroon pl--15 pr--15 bg--radius color--white">
                      Delete
                    </button>
                  </span>
                </span>
                <div className="flex flex--justify-content-between flex--align-items-center">
                  <div className="mt--15">
                    <span className="flex flex--justify-content-between flex--align-items-center">
                      <span className="font--bold">Mobile No. :- </span>
                      <span>{order.phone}</span>
                    </span>
                    <span className="flex flex--justify-content-between mt--15">
                      <span className="font--bold">Address:- </span>
                      <span className="width--column-60 font--right">
                        {order.address}
                      </span>
                    </span>
                    <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                      <span className="font--bold">Call Time:-</span>
                      <span>{order.visitTime}</span>
                    </span>
                    {order.workers.map((emp, index) => (
                      <>
                        <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                          <span className="font--bold">Worker:-</span>
                          <span>{emp.workerId}</span>
                        </span>
                      </>
                    ))}

                    <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                      <span className="font--bold">No. of Work:-</span>
                      <span>{order.items.length}</span>
                    </span>

                    <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                      <span className="font--bold">Payment:-</span>
                      <span>{order.payment}</span>
                    </span>
                    <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                      <span className="font--bold">Order No.:-</span>
                      <span>{order.orderId}</span>
                    </span>
                    <span className="flex flex--justify-content-between flex--align-items-center mt--10">
                      <span className="font--bold">Status:-</span>
                      <span>{order.status}</span>
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="mb--30 mt--40 order--pagination">
          <Stack spacing={2}>
            <Pagination
              count={10} // Set the total number of pages
              page={1} // Set the current active page
              // onChange={handlePageChange}  // Callback function for page change
              color="primary" // Set the color for the pagination control
            />
          </Stack>
        </div>

        <button className="bg--maroon bg--radius bg--shadow pd--10 fs--20 width--column-40 color--white mb--20">
          <Link href={`/orders/add`}>Add Order</Link>
        </button>
      </div>
    </>
  );
};

export default Orders;
