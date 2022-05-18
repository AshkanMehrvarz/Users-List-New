import { Button } from "@nextui-org/react";

export default function ModalForEditUserFooter({
  setModalForEditUserStatusSwaper2x,
  tempSwaper,
  setUsersSwaper2x,
}) {
  const closeModalHandler = () => setModalForEditUserStatusSwaper2x(false);

  const userUpdateHandler = () => {
    // setUsersSwaper2x(tempSwaper);
    closeModalHandler();
  };

  return (
    <>
      <Button auto bordered color='error' onPress={closeModalHandler}>
        CANCEL
      </Button>
      <Button auto onPress={userUpdateHandler}>
        UPDATE
      </Button>
    </>
  );
}
