import React from 'react'
import { Modal,Select } from "antd";
import {
    CaretDownOutlined
  } from '@ant-design/icons';
const SubscriptionUpdateModal = ({ updateSubscriptionModal, handleUpdateSubscriptionModal }) => {
    const handleOk = () => {
        handleUpdateSubscriptionModal(false);
    };
    const handleCancel = () => {
        handleUpdateSubscriptionModal(false);
    };
    return (
        <div>
            <Modal
                className="updateSubscription-Modal"
                open={updateSubscriptionModal}
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
