import axios from "axios"
import { config } from "../config"

export const _addEmployee = async ({ payload }) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"

        }
        console.log(" this is employee service", payload);
        const response = await axios.post(
            `${config.baseUrl}/admin/add-employee`,
            payload,
            { headers }
        );
        return response.data;

    } catch (error) {
        console.log(error);
    }
}


export const _getEmployee = async (pageNumbar, pageSize) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"

        }
        const res = await axios.get(`${config.baseUrl}/admin/get-employee?pageNumber=${pageNumbar}&pageSize=${pageSize}`,
            { headers: headers }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const _getEmployeeBulk = async (workerIds) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"

        }

        const payload = { workerIds };

        console.log(payload);

        const res = await axios.post(
            `${config.baseUrl}/admin/get-employee/bulk`,
            payload,
            { headers: headers }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const _getEmployeeById = async () => {
    try {
        const res = await axios.get("http://localhost:8000/admin/get-employee/0500b535-339f-4e42-8a6a-a835c0d0a7b3");
        return res
    } catch (error) {
        console.log(error);
    }
}

export const _updateEmployeeById = async (id, payload) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        };
        const response = await axios.patch(
            `${config.baseUrl}admin/update-employee/${id}`, payload, { headers: headers }
        );

        return response.data

    } catch (error) {
        console.log(error);
    }
}

export const _deleteEmployeeById = async () => {
    try {
        const res = await axios.delete("http://localhost:8000/admin/delete-employee/0500b535-339f-4e42-8a6a-a835c0d0a7b3");
        return res
    } catch (error) {
        console.log(error);
    }
}