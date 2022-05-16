import * as React from "react";
import { Container, Col, Row } from "@nextui-org/react";
import MainTable from "../Table/MainTable";
import ModalForAddUser from "../Modal/ModalForAddUser";

export default function MainComponent() {
  const [userDatas, setUserDatas] = React.useState([]);

  return (
    <>
      <Container>
        <ModalForAddUser
          userDatasSwaper={userDatas}
          setUserDatasSwaper={setUserDatas}
        />
        <MainTable userDatasSwaper={userDatas} />
      </Container>
    </>
  );
}
