import * as React from "react";
import { Table, Row, Col, Text, Tooltip } from "@nextui-org/react";
import { IconButton } from "../Icons/IconButton";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";

export default function MainTable({
  setModalForEditUserStatusSwaper,
  usersSwaper,
  setIdSwaper,
  setModalForDeleteUserStatusSwaper,
}) {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "EMAIL", uid: "email" },
    { name: "PHONE", uid: "phone" },
    { name: "ROLE", uid: "role" },
    { name: "AGE", uid: "age" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return <Text>{cellValue}</Text>;
      case "phone":
        return <Text>{cellValue}</Text>;

      case "role":
        if (user.role === "Admin") {
          return <Text>Admin</Text>;
        } else if (user.role === "Normal User") {
          return <Text>Normal User</Text>;
        }

      case "age":
        return <Text>{cellValue}</Text>;

      case "actions":
        return (
          <Row>
            <Col
              css={{
                d: "flex",
                justifyContent: "flex-end",
              }}>
              <IconButton
                onClick={() => {
                  setModalForEditUserStatusSwaper(true);
                  setIdSwaper(user.id);
                }}>
                <Tooltip
                  css={{ mt: -20 }}
                  content={"Edit User"}
                  rounded
                  color='success'>
                  <EditIcon size={22} fill='#17C964' />
                </Tooltip>
              </IconButton>
            </Col>
            <Col
              css={{
                d: "flex",
                justifyContent: "center",
              }}>
              <IconButton
                onClick={() => {
                  setModalForDeleteUserStatusSwaper(true);
                  setIdSwaper(user.id);
                }}>
                <Tooltip
                  css={{ mt: -20 }}
                  content={"Delete User"}
                  rounded
                  color='error'>
                  <DeleteIcon size={22} fill='#FF0080' />
                </Tooltip>
              </IconButton>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <Table
        shadow
        bordered
        aria-label='Example table with custom cells'
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode='none'>
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={usersSwaper}>
          {usersSwaper.length > 0 ? (
            (item) => {
              return (
                <Table.Row>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              );
            }
          ) : (
            <Table.Row key='999999999'>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
