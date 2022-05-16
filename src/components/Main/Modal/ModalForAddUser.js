import * as React from "react";
import {
  Button,
  Row,
  Modal,
  Text,
  Input,
  Switch,
  Spacer,
} from "@nextui-org/react";

export default function ModalForAddUser() {
  const [visible, setVisible] = React.useState(false);
  const openModalHandler = () => setVisible(true);
  const closeModalHandler = () => setVisible(false);

  return (
    <>
      <Row justify='flex-end' css={{ mt: 50, mb: 25 }}>
        <Button ghost onClick={openModalHandler}>
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
              <Text id='modal-title' size={22} weight='bold'>
                Add New User
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input bordered color='primary' Placeholder='Name' />
              <Input bordered color='primary' Placeholder='Email' />
              <Input bordered color='primary' Placeholder='Phone' />
              <Input bordered color='primary' Placeholder='age' />
              <Row justify='flex-end' align='center'>
                <Text weight='medium'>Admin</Text>
                <Spacer x={0.5} />
                <Switch />
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto bordered color='error' onClick={closeModalHandler}>
                CANCEL
              </Button>
              <Button auto onClick={closeModalHandler}>
                ADD USER
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Row>
    </>
  );
}
