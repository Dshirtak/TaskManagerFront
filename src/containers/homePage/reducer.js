import { createReducer } from "@reduxjs/toolkit";
import {
  fetchTasksRequestSuccess,
  fetchTasksRequestFailure,
  setModalVisibility,
  addTaskRequestSuccess,
  addTaskRequestFailure,
  setFormValues,
  clearFormValues,
  updateTaskRequestSuccess,
  updateTaskRequestFailure,
  deleteTaskRequestSuccess,
  deleteTaskRequestFailure,
  searchTaskRequestSuccess,
  searchTaskRequestFailure
} from "./actions";

const initialState = {
  tasks: [],
  selectedTask: { id: "", title: "", description: "" },
  modalVisible: false,
};
const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTasksRequestSuccess, (state, { payload }) => {
      state.tasks = [...payload];
      return state;
    })
    .addCase(fetchTasksRequestFailure, () => {
      //we are supposed to show an error modal but im using console log becouse it isnt required
      console.error("An error occured please try again...");
    })
    .addCase(setModalVisibility, (state, { payload }) => {
      state.modalVisible = payload;
      return state;
    })
    .addCase(addTaskRequestSuccess, (state, { payload }) => {
      state.tasks = [...payload];
      return state;
    })
    .addCase(addTaskRequestFailure, () => {
      console.error("An error occured please try again...");
    })
    .addCase(setFormValues, (state, { payload }) => {
      state.selectedTask = { ...payload };
      return state;
    })
    .addCase(clearFormValues, (state) => {
      state.selectedTask = { ...initialState.selectedTask };
      return state;
    })
    .addCase(updateTaskRequestSuccess, (state, { payload }) => {
      state.tasks = [...payload];
      return state;
    })
    .addCase(updateTaskRequestFailure, () => {
      console.error("An error occured please try again...");
    })
    .addCase(deleteTaskRequestSuccess, (state, { payload }) => {
      state.tasks = [...payload];
      return state;
    })
    .addCase(deleteTaskRequestFailure, () => {
      console.error("An error occured please try again...");
    })
    .addCase(searchTaskRequestSuccess, (state, { payload }) => {
        state.tasks = [...payload];
        return state;
    })
    .addCase(searchTaskRequestFailure, () => {
        console.error("An error occured please try again...");
    });
});

export default tasksReducer;
