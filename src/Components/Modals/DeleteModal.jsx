import React from "react";
import { Modal } from "antd";
import ReloadIcon from "../../assets/icons/reload-icon.png";
import { useSelector,useDispatch } from "react-redux";
import {handleDeleteModal} from '../../redux/reducers/handleModalsReducers';
const DeleteModal = () => {
  const Modals = useSelector(state=>state.modal);
const {openDeleteModal} = Modals;
const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(handleDeleteModal(false));
  };
  const handleCancel = () => {
    dispatch(handleDeleteModal(false));
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
