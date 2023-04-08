import React from "react";
import { Modal, Checkbox, ConfigProvider } from "antd";

const GenerateKeyModal = ({ generateKeyModal, handleGenearteKeyModal }) => {
  const handleOk = () => {
    handleGenearteKeyModal(false);
  };
  const handleCancel = () => {
    handleGenearteKeyModal(false);
  };
  return (
    <div>
      <Modal
        className="DeleteModal"
        open={generateKeyModal}
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
