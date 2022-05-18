import React from "react";
import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteUser = ({
  setPopoverStatusSwaper,
  setUsersSwaper3x,
  usersSwaper3x,
  userFromTableSwaper,
}) => {
  const cancelButtonHandler = () => setPopoverStatusSwaper(false);

  const deleteUserHandler = () => {
    let newUsers = usersSwaper3x;
    console.log(userFromTableSwaper.id);
    setUsersSwaper3x([...newUsers]);
    cancelButtonHandler();
  };

  return (
    <Grid.Container
      css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}>
      <Row justify='center' align='center'>
        <Text b>Confirm</Text>
      </Row>
      <Row>
        <Text>
          Are you sure you want to delete this user ? By doing this, you will
          not be able to recover the data.
        </Text>
      </Row>
      <Grid.Container justify='space-between' alignContent='center'>
        <Grid>
          <Button size='sm' light onPress={cancelButtonHandler}>
            Cancel
          </Button>
        </Grid>
        <Grid>
          <Button size='sm' shadow color='error' onClick={deleteUserHandler}>
            Delete
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
