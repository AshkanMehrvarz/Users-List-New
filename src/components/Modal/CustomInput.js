import { Input } from "@nextui-org/react";

export default function CustomInput({ name }) {
  return (
    <>
      <Input placeholder={name} aria-label={name} color='primary' bordered />
    </>
  );
}
