import invoicesData from "../server/db.json";

export async function fetchInvoices(filterParam) {
    try {
        let invoices = invoicesData.invoices;
        if (filterParam) {
            invoices = invoices.filter(invoice => invoice.status == filterParam);
        }
        return invoices;
    } catch (err) {
        throw new Error(`Error fetching invoices: ${err.message}`);
    }
}

export async function fetchInvoiceById(id) {
    try {
        const invoice = invoicesData.invoices.find(invoice => invoice.id == id);
        if (!invoice) {
            throw new Error(`Invoice with ID ${id} not found`);
        }
        return invoice;
    } catch (error) {
        throw new Error(`Error fetching invoice with ID ${id}: ${error.message}`);
    }
}

export async function updateInvoice(id, requestBody) {
    try {
        const index = invoicesData.invoices.findIndex(invoice => invoice.id == id);
        if (index === -1) {
            throw new Error(`Invoice with ID ${id} not found`);
        }

        invoicesData.invoices[index] = { ...invoicesData.invoices[index], ...requestBody };

        return invoicesData.invoices[index];
    } catch (error) {
        throw new Error(`Error updating invoice with ID ${id}: ${error.message}`);
    }
}

export async function addInvoice(requestBody) {
    try {
        const newInvoice = { id: `NEW${Date.now()}`, ...requestBody };
        invoicesData.invoices.push(newInvoice);

        return newInvoice;
    } catch (error) {
        throw new Error(`Error adding invoice: ${error.message}`);
    }
}

export async function deleteInvoice(id) {
    try {
        const index = invoicesData.invoices.findIndex(invoice => invoice.id == id);
        if (index === -1) {
            throw new Error(`Invoice with ID ${id} not found`);
        }

        const deletedInvoice = invoicesData.invoices.splice(index, 1)[0];

        return deletedInvoice;
    } catch (error) {
        throw new Error(`Error deleting invoice with ID ${id}: ${error.message}`);
    }
}
