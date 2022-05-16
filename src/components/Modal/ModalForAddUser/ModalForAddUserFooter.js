import { Button } from "@nextui-org/react";
export default function ModalForAddUserFooter({
  setModalForAddUserStatusSwaper2x,
  setNewUserSwaper,
  newUserSwaper,
  usersSwaper2x,
  setUsersSwaper2x,
}) {
  const modalCloseHandler = () => {
    setModalForAddUserStatusSwaper2x(false);
    setNewUserSwaper({});
  };
  const addNewUserHndler = () => {
    if (Object.keys(newUserSwaper).length !== 0) {
      setUsersSwaper2x([...usersSwaper2x, newUserSwaper]);
      modalCloseHandler();
    }
    modalCloseHandler();
  };

  return (
    <>
      <Button auto bordered color='error' onPress={modalCloseHandler}>
        CANCEL
      </Button>
      <Button auto onPress={addNewUserHndler}>
        ADD USER
      </Button>
    </>
  );
}
