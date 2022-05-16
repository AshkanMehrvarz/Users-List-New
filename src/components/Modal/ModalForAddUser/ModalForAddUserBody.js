import { Row, Text, Spacer, Switch, Input } from "@nextui-org/react";

export default function ModalForAddUserBody() {
  return (
    <>
      <Input placeholder='Name' aria-label='name' color='primary' bordered />
      <Input placeholder='Email' aria-label='email' color='primary' bordered />
      <Input placeholder='Phone' aria-label='phone' color='primary' bordered />
      <Input placeholder='Age' aria-label='age' color='primary' bordered />

      <Row justify='flex-end' align='center'>
        <Text weight='medium'>Admin</Text>
        <Spacer x={0.5} />
        <Switch />
      </Row>
    </>
  );
}
