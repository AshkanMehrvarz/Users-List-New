import { Container, Col, Row } from "@nextui-org/react";
import MainTable from "./Table/MainTable";
import ModalForAddUser from "./Modal/ModalForAddUser";

export default function MainComponent() {
  return (
    <>
      <Container>
        <ModalForAddUser />
        <MainTable />
      </Container>
    </>
  );
}
