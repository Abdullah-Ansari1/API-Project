import React from 'react'
import { Modal } from "antd";
import { DeleteInfo } from '../../assets'
import { useSelector,useDispatch } from "react-redux";
import {handleDeleteApiCategoryModal} from '../../redux/reducers/handleModalsReducers';
const DeleteApiCategoryModal = () => {
    const Modals = useSelector(state=>state.modal);
    const {openDeleteApiCategoryModal} = Modals;
    const dispatch = useDispatch();
    
      const handleOk = () => {
        dispatch(handleDeleteApiCategoryModal(false));
      };
      const handleCancel = () => {
        dispatch(handleDeleteApiCategoryModal(false));
      };
  return (
    <div>
    <Modal
        className="DeleteModal"
        open={openDeleteApiCategoryModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="NO" onClick={handleCancel} className="btn-cancel-apicategory">
            Cancel
          </button>,
        <button key="Yes" onClick={handleOk} className="btn-delete">
        Delete
        </button>,
        ]}
      >
        <div className="delete-content">
          <div className="iconWith-title">
            <DeleteInfo/>
            <h2 >Delete API category?</h2>
          </div>
          <p className="delete-description">
            Are you sure you want to Delete this API category?
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default DeleteApiCategoryModal
