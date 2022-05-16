import { Button } from "@nextui-org/react";
export default function ModalForAddUserFooter({
  setModalForAddUserStatusSwaper2x,
}) {
  const modalCloseHandler = () => setModalForAddUserStatusSwaper2x(false);
  return (
    <>
      <Button auto bordered color='error' onPress={modalCloseHandler}>
        CANCEL
      </Button>
      <Button auto>ADD USER</Button>
    </>
  );
}
