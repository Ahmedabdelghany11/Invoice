import { HiChevronDown } from "react-icons/hi"
import styled from "styled-components"

const StyledFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: bold;
    gap: 2rem;

    >svg {
        font-size: 2.6rem;
        color: var(--logo-light-color);
    }
`

const StyledFilterInput = styled.select`
    display: none;
`

const StyledFilterOption = styled.option`
    
`

function Filter() {
  return (
    <StyledFilterContainer>
        <label htmlFor="filter">Filter By Status</label>
        <StyledFilterInput id="filter">
            <StyledFilterOption value="paid" key="paid">Paid</StyledFilterOption>
            <StyledFilterOption value="pending" key="pending">Pending</StyledFilterOption>
            <StyledFilterOption value="draft" key="draft">Draft</StyledFilterOption>
        </StyledFilterInput>
        <HiChevronDown />
    </StyledFilterContainer>
  )
}

export default Filter