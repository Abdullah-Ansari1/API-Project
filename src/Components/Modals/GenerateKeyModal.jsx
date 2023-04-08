import React from "react";
import { Modal, Checkbox, ConfigProvider } from "antd";
import { useSelector,useDispatch } from "react-redux";
import {handleGenerateKeyModal} from '../../redux/reducers/handleModalsReducers';
const GenerateKeyModal = () => {
  const Modals = useSelector(state=>state.modal);
const {openGenerateKeyModal} = Modals;
const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(handleGenerateKeyModal(false));
  };
  const handleCancel = () => {
    dispatch(handleGenerateKeyModal(false));
  };
  return (
    <div>
      <Modal
        className="DeleteModal"
        open={openGenerateKeyModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="Yes" onClick={handleOk} className="btn-yes">
            Generate
          </button>,
          <button key="NO" onClick={handleCancel} className="btn-no">
            Cancel
          </button>,
        ]}
      >
        <div className="generateKey-content">
          <div>
            <h2 className="geneartekey-title">Generate API Key</h2>
          </div>
          <div>
            <ConfigProvider
              theme={{
                components: {
                  Checkbox: {
                    colorPrimary: "#16375A",
                  },
                },
              }}
            >
              <Checkbox className="generatekey-Checkbox">
                API Key with infinite validity periods
              </Checkbox>
            </ConfigProvider>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GenerateKeyModal;
