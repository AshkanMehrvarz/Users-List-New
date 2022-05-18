import React from "react";
import { Modal, Row, Button, Text } from "@nextui-org/react";

export default function ModalForDeleteUser({
  usersSwaper,
  setUsersSwaper,
  idSwaper,
  ModalForDeleteUserStatusSwaper,
  setModalForDeleteUserStatusSwaper,
}) {
  const closeModalHandler = () => setModalForDeleteUserStatusSwaper(false);

  const deleteUserHandler = () => {
    let temp = [...usersSwaper];
    temp.splice(idSwaper, 1);
    setUsersSwaper([...temp]);
    closeModalHandler();
  };

  return (
    <Modal
      closeButton
      blur
      aria-labelledby='modal-title'
      open={ModalForDeleteUserStatusSwaper}
      onClose={closeModalHandler}>
      <Modal.Header>
        <Text id='modal-title' size={18} weight='bold'>
          Delete User Confirm
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text style={{ padding: 25 }}>
          Are you sure you want to delete this user ? By doing this, you will
          not be able to recover the data.
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Row justify='space-around' align='center'>
          <Button auto light color='primary' onClick={closeModalHandler}>
            CANCEL
          </Button>
          <Button auto shadow color='error' onClick={deleteUserHandler}>
            DELETE
          </Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
