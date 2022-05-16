import * as React from "react";
import { Container } from "@nextui-org/react";
import MainTable from "../Table/MainTable";
import AddNewUserButton from "./AddNewUserButton";

export default function MainComponent() {
  return (
    <Container>
      <AddNewUserButton />
      <MainTable />
    </Container>
  );
}
