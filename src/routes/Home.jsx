import styled from "styled-components";
import MainHeading from "../ui/MainHeading";
import InvoicesList from "../ui/InvoicesList";
import { useSelector } from "react-redux";
import { getInvoices } from "../features/invoiceSlice";
import { useSearchParams } from "react-router-dom";

const StyledHomeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 6rem;
  padding-left: 12rem;

  @media screen and (max-width: 991px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12rem;
  }
`;

function Home() {
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
    <StyledHomeContainer>
      <MainHeading invoices={filteredInvoices} />
      <InvoicesList invoices={filteredInvoices} />
    </StyledHomeContainer>
  );
}

export default Home;
