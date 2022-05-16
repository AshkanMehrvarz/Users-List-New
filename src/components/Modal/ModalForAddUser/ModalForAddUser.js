import * as React from "react";
import { Modal } from "@nextui-org/react";
import ModalForAddUserBody from "./ModalForAddUserBody";
import ModalForAddUserFooter from "./ModalForAddUserFooter";
import ModalForAddUserHeader from "./ModalForAddUserHeader";

export default function ModalForAddUser({
  modalForAddUserStatusSwaper,
  setModalForAddUserStatusSwaper,
  usersSwaper,
  setUsersSwaper,
}) {
  const closeModalHandler = () => {
    setModalForAddUserStatusSwaper(false);
    setNewUser({});
  };
  const [newUser, setNewUser] = React.useState({});
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
          <ModalForAddUserBody
            newUserSwaper={newUser}
            setNewUserSwaper={setNewUser}
          />
        </Modal.Body>
        <Modal.Footer>
          <ModalForAddUserFooter
            setModalForAddUserStatusSwaper2x={setModalForAddUserStatusSwaper}
            newUserSwaper={newUser}
            setNewUserSwaper={setNewUser}
            usersSwaper2x={usersSwaper}
            setUsersSwaper2x={setUsersSwaper}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
