import styled from "styled-components";
import Header from "./Header";

const StyledAppLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  transition: var(--main-transition);
`;

const StyledMainPage = styled.main`
  width: 100%;
  position: relative;

  @media screen and (max-width: 991px) {
  }
`;

function AppLayout({ children }) {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMainPage>{children}</StyledMainPage>
    </StyledAppLayout>
  );
}

export default AppLayout;
