import styled from "styled-components";
// import EmptyInvoices from "./EmptyInvoices"
import InvoiceItem from "./InvoiceItem";

const StyledInvoicesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function InvoicesList() {
  return (
    <StyledInvoicesList>
      <InvoiceItem />
      <InvoiceItem />
      <InvoiceItem />
      {/* <EmptyInvoices /> */}
    </StyledInvoicesList>
  );
}

export default InvoicesList;
