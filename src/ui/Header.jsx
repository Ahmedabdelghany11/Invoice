import styled from "styled-components";
import Logo from "./Logo";
import ThemeBtn from "./ThemeBtn";
import Profile from "./Profile";

const StyledHeader = styled.header`
  width: 6rem;
  height: 100vh;
  background-color: var(--header-color);
  border-radius: 0 1.5rem 1.5rem 0;
  position: fixed;
  overflow: hidden;
  transition: var(--main-transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 6rem;
    flex-direction: row;
    border-radius: 0;
  }
`;

const StyledThemeProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: 991px) {
    flex-direction: row;
  }

  &::after {
    content: "";
    width: 100%;
    height: 0.4px;
    position: absolute;
    top: calc(50% - 0.5rem);
    transform: translateY(50%);
    left: 0;
    background-color: var(--third-color);

    @media screen and (max-width: 991px) {
      width: 0.4px;
      height: 100%;
      top: 0;
      left: calc(50% - 0.5rem);
      transform: translateX(50%);
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledThemeProfileContainer>
        <ThemeBtn />
        <Profile />
      </StyledThemeProfileContainer>
    </StyledHeader>
  );
}

export default Header;
