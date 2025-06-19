import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { IUser } from "@/Providers/clientProvider/models";

const ViewUser = (client: IUser) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined key="menu" onClick={showModal} />

      <Modal
        open={open}
        title={client.fullName}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <p>Client fullname: {client.email}</p>
        <p>Client number: {client.contactNumber}</p>
        <p>Gender: {client.sex}</p>
        <p>Date of birth: {client.dateOfBirth}</p>
        <p>
          is avtive:
          {client.activeState ?? " undefined"}
        </p>
      </Modal>
    </>
  );
};

export default ViewUser;
