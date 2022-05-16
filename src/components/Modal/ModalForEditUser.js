import React from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";

export default function ModalForEditUser({
  modalstatus,
  userDatasForEdit,
  userDatasNumber,
}) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(
    () => (modalstatus ? setVisible(true) : console.log()),
    [modalstatus]
  );

  const datas = userDatasForEdit;
  const index = userDatasNumber;

  const closeModalHandler = () => setVisible(false);

  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby='modal-title'
        onClose={closeModalHandler}
        open={visible}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Edit User Datas
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            bordered
            color='primary'
            label='Name'
            // initialValue={datas[index].name}
          />
          <Input
            bordered
            color='primary'
            label='Email'
            // initialValue={userDatasForEdit[userDatasNumber].email}
          />
          <Input
            bordered
            color='primary'
            label='Phone'
            // initialValue={userDatasForEdit[userDatasNumber].phone}
          />
          <Input
            bordered
            color='primary'
            label='age'
            // initialValue={userDatasForEdit[userDatasNumber].age}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto bordered color='error' onClick={closeModalHandler}>
            CANCEL
          </Button>
          <Button auto onClick={closeModalHandler}>
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
