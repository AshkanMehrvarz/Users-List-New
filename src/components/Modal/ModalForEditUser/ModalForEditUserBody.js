import { Input } from "@nextui-org/react";

export default function ModalForEditUserBody() {
  return (
    <>
      <Input bordered color='primary' label='Name' />
      <Input bordered color='primary' label='Email' />
      <Input bordered color='primary' label='Phone' />
      <Input bordered color='primary' label='age' />
    </>
  );
}
