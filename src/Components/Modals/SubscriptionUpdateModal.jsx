import React from 'react'
import { Modal,Select } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import {handleSubscriptionUpdateModal} from '../../redux/reducers/handleModalsReducers';
import { useSelector,useDispatch } from 'react-redux';
const SubscriptionUpdateModal = () => {
    const Modals = useSelector(state=>state.modal);
    const {openSubscriptionUpdateModal} = Modals;
    const dispatch = useDispatch();
    const handleOk = () => {
        dispatch(handleSubscriptionUpdateModal(false));
    };
    const handleCancel = () => {
        dispatch(handleSubscriptionUpdateModal(false));
    };
    return (
        <div>
            <Modal
                className="updateSubscription-Modal"
                open={openSubscriptionUpdateModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <button key="Generate" onClick={handleOk} className="btn-yes">
                        Generate
                    </button>,
                    <button key="Cancel" onClick={handleCancel} className="btn-no">
                        Cancel
                    </button>,
                ]}
            >
                <div className="updateSubscription-content">
                    <h2 className='update-subscription-title'>Update Subscription</h2>
                    <p className='update-subscription-label'>Current Bussiness Plan: Bronze</p>
                    <Select
                    suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
                            defaultValue="Default"
                            id='select-menu-default'
                            className='subscriptionModal-select'
                            options={[
                                {
                                    value: 'Label1',
                                    label: 'Label1',
                                },
                                {
                                    value: 'Label2',
                                    label: 'Label2',
                                },
                                {
                                    value: 'Label3',
                                    label: 'Label3',
                                },
                                {
                                    value: 'Label4',
                                    label: 'Label4',
                                },
                            ]}
                        />
                        <p className='select-hint'>Assign a business plan to the existing subscription</p>
                </div>
            </Modal>
        </div>
    )
}

export default SubscriptionUpdateModal
