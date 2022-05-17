import React from "react";
import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteUser = ({
    setPopoverStatusSwaper,
    usersSwaper,
    setUsersSwaper,
    user
}) => {
  const cancelButtonHandler = () => setPopoverStatusSwaper(false);

  const deleteUser = () => {
    let newUsers = usersSwaper.filter(item => item.id !== user.id);
    setUsersSwaper([...newUsers])
  }

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
          <Button size='sm' shadow color='error' onClick={deleteUser}>
            Delete
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
