import React from 'react'
import { Field, reduxForm } from 'redux-form'
let SearchForm = props => {
    const { handleSubmit,reset,reloadTasks } = props
    
    return<div> 
    <form onSubmit={handleSubmit} style={{display:"flex",background:"aliceblue",marginBottom:'10px'}}>

      <div style={{display:"flex",margin:"5%"}}>
        <label >Search Criteria</label>
        <div>
          <Field name="searchKey" component="select" style={{marginLeft:"10px",width:"150px"}}>
            <option value="">Select Criteria</option>
            
              <option value="title" key="title">
                Title
              </option>
              <option value="description" key="description">
                Description
              </option>
            
          </Field>
        </div>
      </div>
      <div style={{margin:'5%'}}>
        <label  style={{marginRight:'10px'}}>Value</label>
        <Field name="searchValue" component="input" type="text" />
      </div>

      <button type='submit' style={{height:'30px',marginTop:'35px',color:'blue'}}>Search</button>
      <button type='button' onClick={()=>{reset();reloadTasks()}} style={{height:'30px',marginTop:'35px',marginLeft:'5px',color:'red'}}>Reset</button>

    </form>
      </div>
  }
  
  SearchForm = reduxForm({
    // a unique name for the form
    form: 'search',
  })(SearchForm)


  
  export default SearchForm