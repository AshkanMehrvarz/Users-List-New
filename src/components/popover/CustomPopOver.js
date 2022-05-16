import * as React from "react";
import { Popover } from "@nextui-org/react";
import { DeleteUser } from "./DeleteUser";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { IconButton } from "../Icons/IconButton";

export default function CustomPopOver() {
  const [popoverStatus, setPopoverStatus] = React.useState(false);

  const popoverOpenHandler = () => setPopoverStatus(true);
  return (
    <>
      <Popover isOpen={popoverStatus} onOpenChange={popoverOpenHandler}>
        <Popover.Trigger>
          <IconButton>
            <DeleteIcon size={20} fill='#FF0080' />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content>
          <DeleteUser setPopoverStatusSwaper={setPopoverStatus} />
        </Popover.Content>
      </Popover>
    </>
  );
}
