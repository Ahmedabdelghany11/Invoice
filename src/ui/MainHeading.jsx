import styled from "styled-components";
import Filter from "./Filter";
import { HiPlusCircle } from "react-icons/hi";
import { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import { useSelector } from "react-redux";
import { getInvoices, getInvoicesQuantity } from "../features/invoiceSlice";

const StyledHeadingContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
`;

const StyledHeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
`;

const StyledHeading = styled.h1`
  font-size: 5rem;

  @media screen and (max-width: 991px) {
    font-size: 2.4rem;
  }
`;

const StyledInvoicesCount = styled.span`
  font-size: 1.6rem;
  color: var(--third-color);
`;

const StyledAddBtn = styled.button`
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--logo-light-color);
  color: #efefef;
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--logo-dark-color);
  }

  > svg {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 991px) {
    padding: 8px 16px;
    border-radius: 16px;
  }
`;

function MainHeading() {
  const invoices = useSelector(getInvoices);
  const invoicesQuantity = useSelector(getInvoicesQuantity);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <StyledHeadingContainer>
      <StyledHeadingBox>
        <StyledHeading>Invoices</StyledHeading>
        <StyledInvoicesCount>
          {invoices
            ? window.innerWidth <= 767
              ? `${invoicesQuantity} invoices`
              : `There are ${invoicesQuantity} total invoices`
            : "No Invoices"}
        </StyledInvoicesCount>
      </StyledHeadingBox>
      <Filter />
      <StyledAddBtn onClick={openForm}>
        <HiPlusCircle />
        {window.innerWidth <= 767 ? "New" : "New Invoice"}
      </StyledAddBtn>
      {isFormOpen && <InvoiceForm close={closeForm} isOpen={isFormOpen} />}
    </StyledHeadingContainer>
  );
}

export default MainHeading;
