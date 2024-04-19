import styled from "styled-components"

import profilePath from "/image-avatar.jpg"

const StyledProfileContainer = styled.figure`
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: var(--main-transition);
    margin: 1rem 0;

    @media screen and (max-width: 991px) {
        margin: 0 1rem;
    }
`

const StyledProfile = styled.img`
    width: 4rem;
    object-fit: cover;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
`

function Profile() {
  return (
    <StyledProfileContainer>
        <StyledProfile src={profilePath} alt="Profile Avatar" title="Profile Avatar"/>
    </StyledProfileContainer>
  )
}

export default Profile