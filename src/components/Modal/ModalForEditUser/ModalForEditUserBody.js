import { Input, Text, Spacer, Switch, Row } from "@nextui-org/react";

export default function ModalForEditUserBody({
  tempSwaper,
  usersSwaper2x,
  idSwaper2x,
}) {
  const inputUpdateHandler = (e) => {
    const key = e.target.ariaLabel;
    const value = e.target.value;
    tempSwaper[idSwaper2x][key] = value;
  };

  return (
    <>
      <Input
        bordered
        aria-label='name'
        color='primary'
        label='Name'
        initialValue={usersSwaper2x[idSwaper2x].name}
        onChange={inputUpdateHandler}
      />
      <Input
        bordered
        aria-label='email'
        color='primary'
        label='Email'
        initialValue={usersSwaper2x[idSwaper2x].email}
        onChange={inputUpdateHandler}
      />
      <Input
        bordered
        aria-label='phone'
        color='primary'
        label='Phone'
        initialValue={usersSwaper2x[idSwaper2x].phone}
        onChange={inputUpdateHandler}
      />
      <Input
        bordered
        aria-label='age'
        color='primary'
        label='age'
        initialValue={usersSwaper2x[idSwaper2x].age}
        onChange={inputUpdateHandler}
      />
      <Row justify='flex-end' align='center'>
        <Text weight='medium'>Admin</Text>
        <Spacer x={0.5} />
        <Switch
          initialChecked={
            usersSwaper2x[idSwaper2x].role === "Admin" ? true : false
          }
        />
      </Row>
    </>
  );
}
