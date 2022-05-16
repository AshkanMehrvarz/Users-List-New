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

export default function ModalForAddUser({
  setUserDatasSwaper,
  userDatasSwaper,
}) {
  const [visible, setVisible] = React.useState(false);
  const [newUser, setNewUser] = React.useState({});

  const inputValuesHandler = (e) => {
    const key = e.target.ariaLabel;
    const value = e.target.value;
    const isAdmin = e.target.checked ? "Admin" : "Normal User";
    setNewUser({
      ...newUser,
      [key]: value,
      role: isAdmin,
    });
  };

  const addNewUserHandler = () => {
    setUserDatasSwaper([...userDatasSwaper, newUser]);
    closeModalHandler();
  };

  const openModalHandler = () => setVisible(true);
  const closeModalHandler = () => {
    setVisible(false);
    setNewUser({});
  };

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
              <Input
                aria-label='name'
                bordered
                color='primary'
                placeholder='Name'
                onChange={inputValuesHandler}
              />
              <Input
                aria-label='email'
                bordered
                color='primary'
                placeholder='Email'
                onChange={inputValuesHandler}
              />
              <Input
                aria-label='phone'
                bordered
                color='primary'
                placeholder='Phone'
                onChange={inputValuesHandler}
              />
              <Input
                aria-label='age'
                bordered
                color='primary'
                placeholder='age'
                onChange={inputValuesHandler}
              />
              <Row justify='flex-end' align='center'>
                <Text weight='medium'>Admin</Text>
                <Spacer x={0.5} />
                <Switch onChange={inputValuesHandler} />
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto bordered color='error' onPress={closeModalHandler}>
                CANCEL
              </Button>
              <Button auto onPress={addNewUserHandler}>
                ADD USER
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Row>
    </>
  );
}
