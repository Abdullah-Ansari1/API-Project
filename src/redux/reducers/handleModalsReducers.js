import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDeleteModal: false,
  openGenerateKeyModal:false,
  openSubscribeApiModal:false,
  openSubscriptionUpdateModal:false,
  openEditApiCategoryModal:false,
  openAddApiCategoryModal:false,
  openDeleteApiCategoryModal:false,
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
    handleEditApiCategoryModal(state, action) {
      return {
        ...state,
        openEditApiCategoryModal: action.payload,
      };
    },
    handleAddApiCategoryModal(state, action) {
      return {
        ...state,
        openAddApiCategoryModal: action.payload,
      };
    },
    handleDeleteApiCategoryModal(state, action) {
      return {
        ...state,
        openDeleteApiCategoryModal: action.payload,
      };
    },
  },
});

const { reducer, actions } = modalReducers;

export const { handleDeleteModal,handleGenerateKeyModal,handleSubscribeApiModal,handleSubscriptionUpdateModal,handleEditApiCategoryModal,handleAddApiCategoryModal,handleDeleteApiCategoryModal } = actions;

export default reducer;
