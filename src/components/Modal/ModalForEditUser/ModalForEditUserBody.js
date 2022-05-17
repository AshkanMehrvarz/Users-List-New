import { Input, Text, Spacer, Switch, Row } from "@nextui-org/react";

export default function ModalForEditUserBody({ usersSwaper2x, idSwaper2x }) {
  return (
    <>
      <Input
        bordered
        color='primary'
        label='Name'
        initialValue={usersSwaper2x[idSwaper2x].name}
      />
      <Input
        bordered
        color='primary'
        label='Email'
        initialValue={usersSwaper2x[idSwaper2x].email}
      />
      <Input
        bordered
        color='primary'
        label='Phone'
        initialValue={usersSwaper2x[idSwaper2x].phone}
      />
      <Input
        bordered
        color='primary'
        label='age'
        initialValue={usersSwaper2x[idSwaper2x].age}
      />
      <Row justify='flex-end' align='center'>
        <Text weight='medium'>Admin</Text>
        <Spacer x={0.5} />
        <Switch
          onChange={{}}
          initialChecked={
            usersSwaper2x[idSwaper2x].role === "Admin" ? true : false
          }
        />
      </Row>
    </>
  );
}
