import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDeleteModal: false,
  openGenerateKeyModal:false,
  openSubscribeApiModal:false,
  openSubscriptionUpdateModal:false,
};

const modalReducers = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    handleDeleteModal(state, action) {
      return {
        ...state,
        openDeleteModal: action.payload,
      };
    },
    handleGenerateKeyModal(state, action) {
      return {
        ...state,
        openGenerateKeyModal: action.payload,
      };
    },
    handleSubscribeApiModal(state, action) {
      return {
        ...state,
        openSubscribeApiModal: action.payload,
      };
    },
    handleSubscriptionUpdateModal(state, action) {
      return {
        ...state,
        openSubscriptionUpdateModal: action.payload,
      };
    },
  },
});

const { reducer, actions } = modalReducers;

export const { handleDeleteModal,handleGenerateKeyModal,handleSubscribeApiModal,handleSubscriptionUpdateModal } = actions;

export default reducer;
