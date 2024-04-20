import axios from "axios";

export async function fetchInvoices(filterParam) {
    try {
        const req = await axios.get("http://localhost:4000/invoices");

        if (filterParam) {
            return req.data.filter(invoice => invoice.status === filterParam)
        } else {
            return req.data;
        }
    } catch (err) {
        throw new Error(`Error fetching invoices: ${err.message}`);
    }
}

export async function fetchInvoiceById(id) {
    try {
        const req = await axios.get(`http://localhost:4000/invoices/${id}`);

        const invoice = req.data

        if (!invoice) {
            throw new Error(`Invoice with ID ${id} not found`);
        }

        return invoice;
    } catch (error) {
        throw new Error(`Error fetching invoice: ${error.message}`);
    }
}

export async function updateInvoice(id, requestBody) {
    try {
        const updateReq = await axios.put(`http://localhost:4000/invoices/${id}`, requestBody);
        
        return updateReq.data
    } catch (error) {
        throw new Error(`Error updating invoice with ID ${id}: ${error.message}`);
    }
}

export async function addInvoice(requestBody) {
    try {
        const updateReq = await axios.post(`http://localhost:4000/invoices/`, requestBody);
        
        return updateReq.data
    } catch (error) {
        throw new Error(`Error adding this invoice: ${error.message}`);
    }
}