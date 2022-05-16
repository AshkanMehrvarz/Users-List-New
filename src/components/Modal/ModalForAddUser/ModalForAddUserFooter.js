import { Button } from "@nextui-org/react";
export default function ModalForAddUserFooter({
  modalForAddUserStatusSwaper2x,
}) {
  const modalCloseHandler = () => modalForAddUserStatusSwaper2x(false);
  return (
    <>
      <Button auto bordered color='error' onPress={modalCloseHandler}>
        CANCEL
      </Button>
      <Button auto>ADD USER</Button>
    </>
  );
}
