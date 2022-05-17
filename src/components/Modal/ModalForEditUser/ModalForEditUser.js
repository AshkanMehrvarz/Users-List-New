import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import ModalForEditUserBody from "./ModalForEditUserBody";
import ModalForEditUserHeader from "./ModalForEditUserHead";
import ModalForEditUserFooter from "./ModalForEditUserFooter";

export default function ModalForEditUser({
  ModalForEditUserStatusSwaper,
  setModalForEditUserStatusSwaper,
  usersSwaper,
  setUsersSwaper,
  idSwaper,
}) {
  const closeModalHandler = () => setModalForEditUserStatusSwaper(false);

  return (
    <Modal
      closeButton
      blur
      aria-labelledby='modal-title'
      onClose={closeModalHandler}
      open={ModalForEditUserStatusSwaper}>
      <Modal.Header>
        <ModalForEditUserHeader />
      </Modal.Header>
      <Modal.Body>
        <ModalForEditUserBody
          usersSwaper2x={usersSwaper}
          setUsersSwaper2x={setUsersSwaper}
          idSwaper2x={idSwaper}
        />
      </Modal.Body>
      <Modal.Footer>
        <ModalForEditUserFooter
          setModalForEditUserStatusSwaper2x={setModalForEditUserStatusSwaper}
        />
      </Modal.Footer>
    </Modal>
  );
}
