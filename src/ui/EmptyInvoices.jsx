import styled from "styled-components"

import emptyIconPath from "/illustration-empty.svg"

const StyledEmptyContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    >img {
        max-width: 50%;
    }
`

const StyledEmptyHeading = styled.h3`
    margin-top: 2rem;
    font-size: 2rem;
`

const StyledEmptyMsg = styled.p`
    line-height: 1.6;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    color: var(--third-color);
`

function EmptyInvoices() {
  return (
    <StyledEmptyContainer>
        <img src={emptyIconPath} alt="Empty List" title="Empty List" />
        <StyledEmptyHeading>There is nothing here</StyledEmptyHeading>
        <StyledEmptyMsg>
            <span>Create a new invoice by clicking the </span>
            <span>New Invoice button and get started</span>
        </StyledEmptyMsg>
    </StyledEmptyContainer>
  )
}

export default EmptyInvoices