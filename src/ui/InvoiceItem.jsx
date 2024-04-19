import { GoDotFill } from "react-icons/go";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledInvoiceItem = styled.div`
    width: 100%;
    padding: 2rem 4rem;
    border-radius: 1rem;
    background-color: var(--secondary-color);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledInvoiceID = styled.h3`
    color: var(--text-color);
    font-size: 2.2rem;

    >span {
        color: var(--third-color);
    }
`

const StyledInvoiceDate = styled.span`
    font-size: 1.8rem;
    `

const StyledInvoiceOwner = styled.span`
    font-size: 1.8rem;
`

const StyledInvoiceTotal = styled.h2`
    font-size: 2.4rem;
`

const StyledInvoiceStatus = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    position: relative;
    border: none;
    padding: 8px 24px;
    border-radius: 8px;
    font-size: 1.8rem;
    font-weight: bold;
    
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
`

const StyledInvoiceLink = styled(Link)`
    color: var(--logo-light-color);

    >svg {
        font-size: 2.4rem;
    }
`

function InvoiceItem() {
  return (
    <StyledInvoiceItem>
        <StyledInvoiceID><span>#</span>RT3080</StyledInvoiceID>
        <StyledInvoiceDate>Due 19 Aug 2021</StyledInvoiceDate>
        <StyledInvoiceOwner>Jensen Huang</StyledInvoiceOwner>
        <StyledInvoiceTotal>$ 1800.90</StyledInvoiceTotal>
        <StyledInvoiceStatus className="paid">
            <GoDotFill />
            Paid
        </StyledInvoiceStatus>
        <StyledInvoiceLink to="/invoice/RT3080">
            <HiChevronRight />
        </StyledInvoiceLink>
    </StyledInvoiceItem>
  )
}

export default InvoiceItem