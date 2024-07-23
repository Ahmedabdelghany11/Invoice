import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--overlay-background);
  backdrop-filter: blur(4px);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`;

function Overlay({ children }) {
  return createPortal(<StyledOverlay>{children}</StyledOverlay>, document.body);
}

export default Overlay;
