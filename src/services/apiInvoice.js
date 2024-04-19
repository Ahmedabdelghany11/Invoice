import axios from "axios";

export async function fetchInvoices(filterParam) {
    try {
        const req = await axios.get("/src/db.json");

        if (filterParam) {
            return req.data.invoices.filter(invoice => invoice.status === filterParam)
        } else {
            return req.data.invoices;
        }
    } catch (err) {
        throw new Error(`Error fetching invoices: ${err.message}`);
    }
}