import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "../../Icons/EmailIcon";
import { Password } from "../../Icons/PasswordIcon";

export default function ModalForEditUser({ modalstatus }) {
  return (
    <div>
      <Modal open={modalstatus}>
        <div>hii</div>
      </Modal>
    </div>
  );
}
