import { Row, Text, Spacer, Switch } from "@nextui-org/react";
import CustomInput from "./CustomInput";

export default function ModalForAddUserBody() {
  return (
    <>
      <CustomInput name='name' />
      <CustomInput name='email' />
      <CustomInput name='phone' />
      <CustomInput name='age' />
      <Row justify='flex-end' align='center'>
        <Text weight='medium'>Admin</Text>
        <Spacer x={0.5} />
        <Switch />
      </Row>
    </>
  );
}
