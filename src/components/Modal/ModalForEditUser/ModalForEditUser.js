import React from "react";
import { Modal } from "@nextui-org/react";
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
  const closeModalHandler = () => {
    setModalForEditUserStatusSwaper(false);
    setTemp(usersSwaper);
  };

  const [temp, setTemp] = React.useState(usersSwaper);

  React.useEffect(() => {
    setTemp(usersSwaper);
  }, [usersSwaper]);

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
          idSwaper2x={idSwaper}
          tempSwaper={temp}
          setTempSwaper={setTemp}
        />
      </Modal.Body>
      <Modal.Footer>
        <ModalForEditUserFooter
          setModalForEditUserStatusSwaper2x={setModalForEditUserStatusSwaper}
          tempSwaper={temp}
          setTempSwaper={setTemp}
          setUsersSwaper2x={setUsersSwaper}
          usersSwaper2x={usersSwaper}
          idSwaper2x={idSwaper}
        />
      </Modal.Footer>
    </Modal>
  );
}
