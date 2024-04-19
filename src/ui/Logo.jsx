import { Link } from "react-router-dom"
import styled from "styled-components"

import logoPath from "/logo.svg"

const StyledLogoContainer = styled(Link)`
    width: 6rem;
    height: 6rem;
    border-radius: 0 1.5rem 1.5rem 0;
    background-color: var(--logo-dark-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        width: 100%;
        height: 40%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--logo-light-color);
        border-top-left-radius: 1.5rem;
    }
`

const StyledImg = styled.img`
    width: 4rem;
    object-fit: cover;
    position: relative;
`

function Logo() {
  return (
    <StyledLogoContainer to="/">
        <StyledImg src={logoPath} alt="Invoice" title="Invoice" />
    </StyledLogoContainer>
  )
}

export default Logo