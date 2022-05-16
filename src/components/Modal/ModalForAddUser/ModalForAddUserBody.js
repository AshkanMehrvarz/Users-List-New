import { Row, Text, Spacer, Switch, Input } from "@nextui-org/react";
import React from "react";

export default function ModalForAddUserBody({
  newUserSwaper,
  setNewUserSwaper,
}) {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const isAdminCheckedDetector = (e) => {
    e.target.checked ? setIsAdmin(true) : setIsAdmin(false);
    newUserSwaper.role = isAdmin ? "Normal User" : "Admin";
  };

  const inputValuesHandler = (e) => {
    const key = e.target.ariaLabel;
    const value = e.target.value;

    setNewUserSwaper({
      ...newUserSwaper,
      [key]: value,
      role: isAdmin ? "Admin" : "Normal User",
    });
  };

  return (
    <>
      <Input
        placeholder='Name'
        aria-label='name'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />
      <Input
        placeholder='Email'
        aria-label='email'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />
      <Input
        placeholder='Phone'
        aria-label='phone'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />
      <Input
        placeholder='Age'
        aria-label='age'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />

      <Row justify='flex-end' align='center'>
        <Text weight='medium'>Admin</Text>
        <Spacer x={0.5} />
        <Switch onChange={isAdminCheckedDetector} />
      </Row>
    </>
  );
}
