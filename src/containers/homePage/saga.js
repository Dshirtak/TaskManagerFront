import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchTasksRequest,
  fetchTasksRequestSuccess,
  fetchTasksRequestFailure,
  addTaskRequest,
  addTaskRequestSuccess,
  addTaskRequestFailure,
  updateTaskRequest,
  updateTaskRequestSuccess,
  updateTaskRequestFailure,
  deleteTaskRequest,
  deleteTaskRequestSuccess,
  deleteTaskRequestFailure,
  searchTaskRequest,
  searchTaskRequestSuccess,
  searchTaskRequestFailure
} from "./actions";

const baseURL = "http://localhost:3900/api/tasks";

function* getTasks() {
  try {
    const { data } = yield call(axios.get, baseURL);
    yield put({ type: fetchTasksRequestSuccess, payload: data });
  } catch (err) {
    yield put({ type: fetchTasksRequestFailure });
  }
}

function* addTask({ payload }) {
  try {
    const { data } = yield call(axios.post, baseURL, { ...payload });
    yield put({ type: addTaskRequestSuccess, payload: data });
  } catch (err) {
    yield put({ type: addTaskRequestFailure });
  }
}

function* updateTask({ payload }) {
  try {
    const { data } = yield call(axios.put, baseURL + "/" + payload.id, {
      ...payload,
    });
    yield put({ type: updateTaskRequestSuccess, payload: data });
  } catch (err) {
    yield put({ type: updateTaskRequestFailure });
  }
}

function* deleteTask({ payload }) {
  try {
    const { data } = yield call(axios.delete, baseURL + "/" + payload.id);
    yield put({ type: deleteTaskRequestSuccess, payload: data });
  } catch (err) {
    yield put({ type: deleteTaskRequestFailure });
  }
}


function* searchTask({ payload }) {
  try {
    const { data } = yield call(axios.get, baseURL,{params:{...payload}});
    yield put({ type: searchTaskRequestSuccess, payload: data });
  } catch (err) {
    yield put({ type: searchTaskRequestFailure });
  }
}

export default function* tasksSaga() {
  yield takeEvery(fetchTasksRequest, getTasks);
  yield takeEvery(addTaskRequest, addTask);
  yield takeEvery(updateTaskRequest, updateTask);
  yield takeEvery(deleteTaskRequest, deleteTask);
  yield takeEvery(searchTaskRequest,searchTask );
}
