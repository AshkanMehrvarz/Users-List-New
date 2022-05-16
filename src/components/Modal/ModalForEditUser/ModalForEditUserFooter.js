import { Button } from "@nextui-org/react";

export default function ModalForEditUserFooter({
  setModalForEditUserStatusSwaper2x,
}) {
  const closeModalHandler = () => setModalForEditUserStatusSwaper2x(false);

  return (
    <>
      <Button auto bordered color='error' onPress={closeModalHandler}>
        CANCEL
      </Button>
      <Button auto>UPDATE</Button>
    </>
  );
}
