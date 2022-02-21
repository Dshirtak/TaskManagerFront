import { connect } from "react-redux";
import {
  fetchTasksRequest,
  setModalVisibility,
  addTaskRequest,
  setFormValues,
  clearFormValues,
  updateTaskRequest,
  deleteTaskRequest,
  searchTaskRequest
} from "./actions";

function mapStateToProps(state) {
  return { tasks: state.tasksReducer, formValues: state.form };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => {
      dispatch({ type: fetchTasksRequest });
    },
    addNewTask: (payload) => {
      dispatch({ type: addTaskRequest, payload });
    },
    setFormInitialValues: (payload) => {
      dispatch({ type: setFormValues, payload });
    },
    clearFormInitialValues: () => {
      dispatch({ type: clearFormValues });
    },
    setModalVisible: (payload) => {
      dispatch({ type: setModalVisibility, payload });
    },
    updateTask: (payload) => {
      dispatch({ type: updateTaskRequest, payload });
    },
    deleteTask: (payload) => {
      dispatch({ type: deleteTaskRequest, payload });
    },
    searchTask: (payload) => {
      dispatch({ type: searchTaskRequest, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
