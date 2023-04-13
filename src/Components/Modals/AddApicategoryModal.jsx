import React from 'react'
import { Modal, Input} from "antd";
import { useSelector,useDispatch } from "react-redux";
import {handleAddApiCategoryModal} from '../../redux/reducers/handleModalsReducers';
const AddApicategoryModal = () => {
    const Modals = useSelector(state=>state.modal);
    const {openAddApiCategoryModal} = Modals;
    const dispatch = useDispatch();
    
      const handleOk = () => {
        dispatch(handleAddApiCategoryModal(false));
      };
      const handleCancel = () => {
        dispatch(handleAddApiCategoryModal(false));
      };
  return (
    <div>
    <Modal
     className="EditApiCategory"
     open={openAddApiCategoryModal}
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
      <h2 className='update-subscription-title'>Add Api category</h2>
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

export default AddApicategoryModal
