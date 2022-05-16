import { Button, Row } from "@nextui-org/react";
import ModalForAddUser from "../Modal/ModalForAddUser";

export default function AddNewUserButton({ setModalForAddUserStatusSwaper }) {
  const modalOpenHandler = () => {
    setModalForAddUserStatusSwaper(true);
  };
  return (
    <Row justify='flex-end' css={{ mt: 50, mb: 25 }}>
      <Button ghost onPress={modalOpenHandler}>
        Add New User
      </Button>
    </Row>
  );
}
