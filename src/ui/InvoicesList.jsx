import styled from "styled-components";
import EmptyInvoices from "./EmptyInvoices";
import InvoiceItem from "./InvoiceItem";

const StyledInvoicesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function InvoicesList({ invoices }) {
  return (
    <StyledInvoicesList>
      {invoices?.length > 0 ? (
        invoices?.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))
      ) : (
        <EmptyInvoices />
      )}
    </StyledInvoicesList>
  );
}

export default InvoicesList;
