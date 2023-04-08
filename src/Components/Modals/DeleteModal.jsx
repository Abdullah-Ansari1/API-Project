import React from "react";
import { Modal } from "antd";
import ReloadIcon from "../../assets/icons/reload-icon.png";

const DeleteModal = ({ openDeleteModal, handleDeleteModal }) => {
  const handleOk = () => {
    handleDeleteModal(false);
  };
  const handleCancel = () => {
    handleDeleteModal(false);
  };
  return (
    <div>
      <Modal
        className="DeleteModal"
        open={openDeleteModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="Yes" onClick={handleOk} className="btn-yes">
            Yes
          </button>,
          <button key="NO" onClick={handleCancel} className="btn-no">
            NO
          </button>,
        ]}
      >
        <div className="delete-content">
          <div className="iconWith-title">
            <img src={ReloadIcon} alt="ReloadIcon" />
            <h2 className="delete-title">Delete Application</h2>
          </div>
          <p className="delete-description">
            Are you sure you want to Delete the subscription?
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
