import { GoDotFill } from "react-icons/go";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatCurrency, formatDate } from "../utilities/helpers";

const StyledInvoiceItem = styled(Link)`
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const StyledInvoiceID = styled.h3`
  color: var(--text-color);
  font-size: 2rem;
  order: 1;

  > span {
    color: var(--third-color);
  }
`;

const StyledInvoiceDate = styled.span`
  font-size: 1.6rem;
  order: 2;

  @media screen and (max-width: 767px) {
    order: 3;
  }
`;

const StyledInvoiceOwner = styled.span`
  font-size: 1.6rem;
  order: 3;

  @media screen and (max-width: 767px) {
    flex: 1;
    order: 2;
  }
`;

const StyledInvoiceTotal = styled.h2`
  font-size: 2rem;
  order: 4;
`;

const StyledInvoiceStatus = styled.button`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  gap: 0.4rem;
  position: relative;
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: bold;
  order: 5;

  &.paid {
    color: var(--paid-color);
    background-color: var(--paid-bg);
  }

  &.pending {
    color: var(--pending-color);
    background-color: var(--pending-bg);
  }

  &.draft {
    color: var(--draft-color);
    background-color: var(--draft-bg);
  }
`;

const StyledInvoiceLink = styled.span`
  color: var(--logo-light-color);
  order: 6;

  @media screen and (max-width: 767px) {
    display: none;
  }

  > svg {
    font-size: 2.4rem;
  }
`;

function InvoiceItem({ invoice }) {
  return (
    <StyledInvoiceItem to={`/invoice/${invoice.id}`}>
      <StyledInvoiceID>
        <span># </span>
        {invoice.id}
      </StyledInvoiceID>
      <StyledInvoiceDate>
        Due {formatDate(new Date(invoice.paymentDue).getTime())}
      </StyledInvoiceDate>
      <StyledInvoiceOwner>{invoice.clientName}</StyledInvoiceOwner>
      <StyledInvoiceTotal>{formatCurrency(invoice.total)}</StyledInvoiceTotal>
      <StyledInvoiceStatus className={invoice.status}>
        <GoDotFill />
        {invoice.status}
      </StyledInvoiceStatus>
      <StyledInvoiceLink to={`/invoice/${invoice.id}`}>
        <HiChevronRight />
      </StyledInvoiceLink>
    </StyledInvoiceItem>
  );
}

export default InvoiceItem;
