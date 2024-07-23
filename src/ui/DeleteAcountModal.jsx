import styled from "styled-components";
import Overlay from "./Overlay";
import useModalEffects from "../hooks/useModalEffects";
import { useRef } from "react";

const StyledModalContainer = styled.form`
  padding: 16px 24px;
  border-radius: 12px;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const StyledModalHeader = styled.div`
  width: 100%;
  border-bottom: 0;
  display: flex;
  justify-content: flex-end;
  .modal-title {
    font-size: 14px;
  }
  .close-btn {
    color: #333;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ececec;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: bold;
  }
`;

const StyledModalBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-direction: column;

  .btns-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .cancel-btn {
    border: 1px solid var(--main-color);
    color: var(--main-color);
    outline: none;
    background: none;
    padding: 8px;
    border-radius: 8px;
    flex: 1 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
  }
  .confirm-btn {
    padding: 8px;
    background: #ed5756;
    color: var(--text-color);
    border-radius: 8px;
    border: 0;
    outline: none;
    flex: 1 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
  }
  h3 {
    color: var(--secondary-color);
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    span {
      font-size: 24px;
      color: var(--main-color);
    }
    i {
      color: var(--text-color);
    }
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }
`;

function DeleteAcountModal({ setShowModal, eventFunction, loading }) {
  const modalRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    eventFunction();
    setShowModal(false);
  }

  useModalEffects(modalRef, setShowModal, () => setShowModal(false), true);

  return (
    <Overlay>
      <StyledModalContainer onSubmit={handleSubmit} ref={modalRef}>
        <StyledModalHeader className="pb-0">
          <span className="close-btn" onClick={() => setShowModal(false)}>
            x
          </span>
        </StyledModalHeader>
        <StyledModalBody className="pay_modal">
          <h3>Are you sure you want to delete your account? </h3>
          <div className="btns-container">
            <span onClick={() => setShowModal(false)} className="cancel-btn">
              Cancel
            </span>
            <button type="submit" disabled={loading} className="confirm-btn">
              Confirm
            </button>
          </div>
        </StyledModalBody>
      </StyledModalContainer>
    </Overlay>
  );
}

export default DeleteAcountModal;
