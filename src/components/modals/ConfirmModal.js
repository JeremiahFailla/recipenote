import ReactDOM from "react-dom";
import * as Styled from "./ConfirmModalStyles";

const ConfirmModal = (props) => {
  const modalId = document.getElementById("modals");

  return ReactDOM.createPortal(
    <Styled.Backdrop onClick={props.close} data-modal="modal">
      <Styled.Content>{props.children}</Styled.Content>
    </Styled.Backdrop>,
    modalId
  );
};

export default ConfirmModal;
