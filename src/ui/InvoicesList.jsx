import styled from "styled-components";
import EmptyInvoices from "./EmptyInvoices";
import InvoiceItem from "./InvoiceItem";
import useInvoicesList from "../features/useInvoicesList";
import Spinner from "./Spinner";

const StyledInvoicesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function InvoicesList() {
  const { isLoading, invoices } = useInvoicesList();

  if (isLoading) return <Spinner />;

  return (
    <StyledInvoicesList>
      {!invoices
        ? invoices?.length === 0 && <EmptyInvoices />
        : invoices?.map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))}
    </StyledInvoicesList>
  );
}

export default InvoicesList;
