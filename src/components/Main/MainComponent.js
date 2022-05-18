import * as React from "react";
import { Container } from "@nextui-org/react";
import MainTable from "../Table/MainTable";
import AddNewUserButton from "./AddNewUserButton";
import ModalForAddUser from "../Modal/ModalForAddUser/ModalForAddUser";
import ModalForEditUser from "../Modal/ModalForEditUser/ModalForEditUser";
import ModalForDeleteUser from "../Modal/ModalForDeleteUser/ModalForDeleteUser";

export default function MainComponent() {
  const [modalForAddUserStatus, setModalForAddUserStatus] =
    React.useState(false);

  const [ModalForEditUserStatus, setModalForEditUserStatus] =
    React.useState(false);

  const [ModalForDeleteUserStatus, setModalForDeleteUserStatus] =
    React.useState(false);

  const [users, setUsers] = React.useState([]);
  const [id, setId] = React.useState(0);

  // console.log(id);

  return (
    <Container>
      <AddNewUserButton
        setModalForAddUserStatusSwaper={setModalForAddUserStatus}
      />

      <ModalForAddUser
        modalForAddUserStatusSwaper={modalForAddUserStatus}
        setModalForAddUserStatusSwaper={setModalForAddUserStatus}
        usersSwaper={users}
        setUsersSwaper={setUsers}
      />

      <ModalForEditUser
        ModalForEditUserStatusSwaper={ModalForEditUserStatus}
        setModalForEditUserStatusSwaper={setModalForEditUserStatus}
        usersSwaper={users}
        setUsersSwaper={setUsers}
        idSwaper={id}
      />

      <ModalForDeleteUser
        ModalForDeleteUserStatusSwaper={ModalForDeleteUserStatus}
        setModalForDeleteUserStatusSwaper={setModalForDeleteUserStatus}
        usersSwaper={users}
        setUsersSwaper={setUsers}
        idSwaper={id}
      />

      <MainTable
        setModalForEditUserStatusSwaper={setModalForEditUserStatus}
        usersSwaper={users}
        setUsersSwaper={setUsers}
        setIdSwaper={setId}
        setModalForDeleteUserStatusSwaper={setModalForDeleteUserStatus}
      />
    </Container>
  );
}
