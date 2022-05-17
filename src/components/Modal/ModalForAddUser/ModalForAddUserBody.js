import * as React from "react";
import { Row, Text, Spacer, Switch, Input } from "@nextui-org/react";

export default function ModalForAddUserBody({
  newUserSwaper,
  setNewUserSwaper,
}) {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const isAdminCheckedDetector = (e) => {
    setIsAdmin(e.target.checked);
  };
  React.useEffect(() => {
    setNewUserSwaper({
      ...newUserSwaper,
      role: isAdmin ? "Admin" : "Normal User",
    });
  }, [isAdmin]);

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
        type='text'
        placeholder='Name'
        aria-label='name'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />
      <Input
        type='email'
        placeholder='Email'
        aria-label='email'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />
      <Input
        type='tel'
        placeholder='Phone'
        aria-label='phone'
        color='primary'
        bordered
        onChange={inputValuesHandler}
      />
      <Input
        type='number'
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
