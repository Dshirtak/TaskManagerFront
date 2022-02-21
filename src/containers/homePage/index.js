import React, { useEffect } from "react";
import FormModal from "../../components/formModal";
import SearchForm from "../../components/searchForm";
import DataTable from "../../components/table";
import connect from "./connect";

const HomePage = (props) => {
  const { getTasks } = props;

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const handleFormSubmit = () => {
    var formValues = { ...props.formValues.task.values };
    //not an update so make a request for adding a new task
    if (props.tasks.selectedTask.id === "") {
      props.addNewTask(formValues);
    } else {
      props.updateTask(formValues);
    }
    props.setModalVisible(false);
    props.clearFormInitialValues();
  };



  const handleSearchSubmit = () => {
    var formValues = { ...props.formValues.search.values };
    props.searchTask(formValues)
  };


  const onAddButtonClicked = () => {
    props.setModalVisible(true);
  };



  return (
    <div style={{ margin: "7%" }}>
      <FormModal props={props} onSubmit={handleFormSubmit}  />
      <SearchForm onSubmit={handleSearchSubmit} reloadTasks={getTasks}/>
      <button
        style={{ float: "right", marginBottom: "1%", width: "100px" }}
        onClick={onAddButtonClicked}
      >
        Add
      </button>
      <DataTable props={props} />
    </div>
  );
};

export default connect(HomePage);
