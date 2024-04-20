import styled from "styled-components";
import Filter from "./Filter";
import { HiPlusCircle } from "react-icons/hi";
import useInvoicesList from "../features/useInvoicesList";
import { useState } from "react";
import InvoiceForm from "./InvoiceForm";

const StyledHeadingContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
`;

const StyledHeadingBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
`;

const StyledHeading = styled.h1`
  font-size: 5rem;
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
`;

function MainHeading() {
  const { isLoading, invoices } = useInvoicesList();
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  if (isLoading) return null;

  return (
    <StyledHeadingContainer>
      <StyledHeadingBox>
        <StyledHeading>Invoices</StyledHeading>
        <StyledInvoicesCount>
          {invoices
            ? `There are ${invoices.length} total invoices`
            : "No Invoices"}
        </StyledInvoicesCount>
      </StyledHeadingBox>
      <Filter />
      <StyledAddBtn onClick={openForm}>
        <HiPlusCircle />
        New Invoice
      </StyledAddBtn>
      {isFormOpen && <InvoiceForm close={closeForm} isOpen={isFormOpen} />}
    </StyledHeadingContainer>
  );
}

export default MainHeading;
