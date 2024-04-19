import styled from "styled-components";
import MainHeading from "../ui/MainHeading";
import InvoicesList from "../ui/InvoicesList";

const StyledHomeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 6rem;
  padding-left: 12rem;

  @media screen and (max-width: 991px) {
    padding-left: 6rem;
    padding-top: 12rem;
  }
`;

function Home() {
  return (
    <StyledHomeContainer>
      <MainHeading />
      <InvoicesList />
    </StyledHomeContainer>
  );
}

export default Home;
