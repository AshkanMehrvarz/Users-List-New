import * as React from "react";
import { Button, Row, Modal, Text } from "@nextui-org/react";
import ModalForAddUserBody from "./ModalForAddUserBody";
import ModalForAddUserFooter from "./ModalForAddUserFooter";
import ModalForAddUserHeader from "./ModalForAddUserHeader";

export default function ModalForAddUser() {
  const [visible, setVisible] = React.useState(false);

  const openModalHandler = () => setVisible(true);
  const closeModalHandler = () => setVisible(false);

  return (
    <>
      <Row justify='flex-end' css={{ mt: 50, mb: 25 }}>
        <Button ghost onPress={openModalHandler}>
          Add New User
        </Button>
        <div>
          <Modal
            closeButton
            blur
            aria-labelledby='modal-title'
            onClose={closeModalHandler}
            open={visible}>
            <Modal.Header>
              <ModalForAddUserHeader />
            </Modal.Header>
            <Modal.Body>
              <ModalForAddUserBody />
            </Modal.Body>
            <Modal.Footer>
              <ModalForAddUserFooter />
            </Modal.Footer>
          </Modal>
        </div>
      </Row>
    </>
  );
}
