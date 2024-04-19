import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledInvoiceContainer = styled.section`
  width: 100%;
  position: relative;
  padding: 6rem;
`;

function Invoice() {
  return (
    <StyledInvoiceContainer>
      <Outlet />
    </StyledInvoiceContainer>
  );
}

export default Invoice;
