import React from 'react'
import { Modal, Input} from "antd";
import { useSelector,useDispatch } from "react-redux";
import {handleEditApiCategoryModal} from '../../redux/reducers/handleModalsReducers';
const EditApiCategoryModal = () => {
    const Modals = useSelector(state=>state.modal);
    const {openEditApiCategoryModal} = Modals;
    const dispatch = useDispatch();
    
      const handleOk = () => {
        dispatch(handleEditApiCategoryModal(false));
      };
      const handleCancel = () => {
        dispatch(handleEditApiCategoryModal(false));
      };
  return (
    <div>
      <Modal
       className="EditApiCategory"
       open={openEditApiCategoryModal}
       onOk={handleOk}
       onCancel={handleCancel}
       footer={[
           <button key="Cancel" onClick={handleCancel} className="btn-no">
               Cancel
           </button>,
           <button key="Save" onClick={handleOk} className="btn-yes">
               Save
           </button>,
       ]}
      >
        <div>
        <h2 className='update-subscription-title'>Edit Api category</h2>
            <div className='main-input-editApiCategory'>
            <label htmlFor="Name" className='label-editApi'>Name <span>*</span></label>
            <Input placeholder="json" name='Name'/>
            <p>Name of the Api category</p>
            </div>
            <div className='main-input-editApiCategory'>
            <label htmlFor="descripton" className='label-editApi'>Description</label>
            <Input placeholder="Add Descripton"/>
            <p>Description of the Api</p>
            </div>
        </div>
        </Modal>
    </div>
  )
}

export default EditApiCategoryModal
