import styled from "styled-components";
import Overlay from "./Overlay";
import { spinnerAnimation } from "../styles/Animations";

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000000000;
`;

const StyledSpinner = styled.div`
  position: relative;
  width: 85px;
  height: 50px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#fff 50px, transparent 0),
    linear-gradient(#fff 50px, transparent 0),
    linear-gradient(#fff 50px, transparent 0),
    linear-gradient(#fff 50px, transparent 0),
    linear-gradient(#fff 50px, transparent 0),
    linear-gradient(#fff 50px, transparent 0);
  background-position: 0px center, 20px center, 40px center, 60px center,
    80px center, 100px center, 120px center;
  animation: ${spinnerAnimation} 0.65s linear infinite alternate;
`;

function Spinner() {
  return (
    <Overlay>
      <StyledSpinnerContainer>
        <StyledSpinner />
      </StyledSpinnerContainer>
    </Overlay>
  );
}

export default Spinner;
