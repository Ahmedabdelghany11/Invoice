import { createSlice } from "@reduxjs/toolkit";
import invoicesData from "../server/db.json";

const initialState = {
    invoices: invoicesData.invoices,
};

const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        addInvoiceToList(state, action) {
            return {
                ...state,
                invoices: [...state.invoices, action.payload],
            };
        },
        deleteInvoiceFromList(state, action) {
            return {
                ...state,
                invoices: state.invoices.filter((invoice) => invoice.id !== action.payload),
            };
        },
        updateInvoice(state, action) {
            const { id, ...updatedInvoice } = action.payload;
            const invoiceIndex = state.invoices.findIndex((invoice) => invoice.id === id);
            if (invoiceIndex !== -1) {
                const updatedInvoices = [...state.invoices];
                updatedInvoices[invoiceIndex] = {
                    ...updatedInvoices[invoiceIndex],
                    ...updatedInvoice,
                };
                return {
                    ...state,
                    invoices: updatedInvoices,
                };
            }
            return state;
        },
        addInvoiceItem(state, action) {
            if (action?.payload) {
                const invoiceIndex = state.invoices.findIndex((invoice) => invoice.id === action.payload);
                if (invoiceIndex !== -1) {
                    console.log(state.invoices[invoiceIndex].items.includes({}));
                    const updatedInvoice = {
                        ...state.invoices[invoiceIndex],
                        items: [...state.invoices[invoiceIndex].items, {}],
                    };
                    const updatedInvoices = [...state.invoices];
                    updatedInvoices[invoiceIndex] = updatedInvoice;
                    return {
                    ...state,
                    invoices: updatedInvoices,
                    };
                } else {
                    return state;
                }
            }
        },
        updateInvoiceItem(state, action) {
            const invoiceIndex = state.invoices.findIndex((invoice) => invoice.id === action.payload.id);
            const invoiceItemIndex = state.invoices[invoiceIndex]?.items.findIndex((item) => item.name === action.payload.item.name);
            if (invoiceIndex !== -1 && invoiceItemIndex !== -1) {
                const updatedInvoice = {
                ...state.invoices[invoiceIndex],
                items: state.invoices[invoiceIndex].items.map((item, index) => index === invoiceItemIndex ? { ...item, ...action.payload.item } : item),
                };
                const updatedInvoices = [...state.invoices];
                updatedInvoices[invoiceIndex] = updatedInvoice;
                return {
                ...state,
                invoices: updatedInvoices,
                };
            } else {
                return state;
            }
        },
        deleteInvoiceItem(state, action) {
            const invoiceIndex = state.invoices.findIndex((invoice) => invoice.id === action.payload.id);
            if (invoiceIndex !== -1) {
                const updatedInvoice = {
                ...state.invoices[invoiceIndex],
                items: state.invoices[invoiceIndex].items.filter((item) => item.name !== action.payload.name),
                };
                const updatedInvoices = [...state.invoices];
                updatedInvoices[invoiceIndex] = updatedInvoice;
                return {
                ...state,
                invoices: updatedInvoices,
                };
            } else {
                return state;
            }
        },
    }
})

export const {
    addInvoiceToList,
    deleteInvoiceFromList,
    updateInvoice,
    addInvoiceItem,
    updateInvoiceItem,
    deleteInvoiceItem,
} = invoiceSlice.actions;

export const getInvoices = (state) => state.invoices.invoices;

export const getInvoicesQuantity = (state) => {
    return state?.invoices?.invoices?.length;
};

export const getInvoiceByID = (id) => {
    return (state) => {
        const invoice = state?.invoices?.invoices?.find((invoice) => invoice.id === id);
        return invoice ? invoice : "there is no invoice with this ID";
    };
};

export const getInvoiceItemsList = (id) => {
    return (state) => {
        if (id) {
            const invoice = state?.invoices?.invoices?.find((invoice) => invoice.id === id);
            return invoice ? invoice.items : "there is no invoice with this ID";
        } else {
            return [];
        }
    };
};

export default invoiceSlice.reducer;