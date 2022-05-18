import { Button } from "@nextui-org/react";

export default function ModalForEditUserFooter({
  setModalForEditUserStatusSwaper2x,
  tempSwaper,
  setUsersSwaper2x,
  usersSwaper2x,
  setTempSwaper,
  idSwaper2x,
}) {
  const closeModalHandler = () => setModalForEditUserStatusSwaper2x(false);

  const userUpdateHandler = () => {
    let temp = (usersSwaper2x[idSwaper2x] = tempSwaper);
    setTempSwaper(temp);
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
