import React from "react";
import { StyledModal } from "../../styled-components";

const Modal = ({ handleClose, show, children }) => {
  return (
    <StyledModal show={show}>
      <section className="modal-main">
        {children}
        <h4 className="close" onClick={handleClose}>
          &#10005;
        </h4>
      </section>
    </StyledModal>
  );
};

export default Modal;
