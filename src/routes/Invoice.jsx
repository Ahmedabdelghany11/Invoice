import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledInvoiceContainer = styled.section`
  width: 100%;
  position: relative;
  padding: 6rem;

  @media screen and (max-width: 991px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12rem;
  }
`;

function Invoice() {
  return (
    <StyledInvoiceContainer>
      <Outlet />
    </StyledInvoiceContainer>
  );
}

export default Invoice;
