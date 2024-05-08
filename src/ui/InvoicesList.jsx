import styled from "styled-components";
import EmptyInvoices from "./EmptyInvoices";
import InvoiceItem from "./InvoiceItem";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getInvoices } from "../features/invoiceSlice";

const StyledInvoicesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function InvoicesList() {
  const invoices = useSelector(getInvoices);
  const [searchParams] = useSearchParams();
  const filterParam = !searchParams.get("filter")
    ? ""
    : searchParams.get("filter");

  let filteredInvoices = [...invoices];

  if (filterParam) {
    filteredInvoices = invoices.filter(
      (invoice) => invoice.status == filterParam
    );
  }

  return (
    <StyledInvoicesList>
      {!invoices
        ? filteredInvoices === 0 && <EmptyInvoices />
        : filteredInvoices?.map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))}
    </StyledInvoicesList>
  );
}

export default InvoicesList;
