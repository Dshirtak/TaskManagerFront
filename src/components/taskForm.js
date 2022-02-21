import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
let TaskForm = props => {
    return <form >
        <div style={{margin:'5%'}}>
        <label style={{marginRight:'63px'}} >ID</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div style={{margin:'5%'}}>
        <label htmlFor="lastName" style={{marginRight:'50px'}}>Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div style={{margin:'5%'}}>
        <label style={{marginRight:'5px'}} htmlFor="email">Description</label>
        <Field name="description" component="input" type="email" />
      </div>
    </form>
  }
  
  TaskForm = reduxForm({
    // a unique name for the form
    form: 'task',
    enableReinitialize:true,
  })(TaskForm)

  TaskForm = connect(
    state => ({
      initialValues: state.tasksReducer.selectedTask // pull initial values from account reducer
    }),
    // { load: loadAccount } // bind account loading action creator
  )(TaskForm)
  
  export default TaskForm