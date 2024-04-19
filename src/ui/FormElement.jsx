import styled from "styled-components";

const StyledElementConatiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
`;

const StyledError = styled.span`
  width: 100%;
  font-size: 1.4rem;
  color: #c22020;
  letter-spacing: 0.5px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

function FormElement({ label, children, error }) {
  return (
    <StyledElementConatiner>
      {label && (
        <StyledLabel
          // htmlFor={Array.isArray(children) ? children[0].props.id : children.props.id}
          htmlFor={children.props.id}
        >
          {label}
        </StyledLabel>
      )}
      {children}
      {error && <StyledError>{error}</StyledError>}
    </StyledElementConatiner>
  );
}

export default FormElement;
