import * as React from "react";
import { Modal } from "@nextui-org/react";
import ModalForAddUserBody from "./ModalForAddUserBody";
import ModalForAddUserFooter from "./ModalForAddUserFooter";
import ModalForAddUserHeader from "./ModalForAddUserHeader";

export default function ModalForAddUser({
  modalForAddUserStatusSwaper,
  setModalForAddUserStatusSwaper,
}) {
  const closeModalHandler = () => setModalForAddUserStatusSwaper(false);
  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby='modal-title'
        onClose={closeModalHandler}
        open={modalForAddUserStatusSwaper}>
        <Modal.Header>
          <ModalForAddUserHeader />
        </Modal.Header>
        <Modal.Body>
          <ModalForAddUserBody />
        </Modal.Body>
        <Modal.Footer>
          <ModalForAddUserFooter
            modalForAddUserStatusSwaper2x={setModalForAddUserStatusSwaper}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
