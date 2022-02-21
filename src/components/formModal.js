import React from 'react';
import { Modal } from 'antd';
import TaskForm from './taskForm';

const FormModal = (props) => {

    return (
        <Modal title="Basic Modal" visible={props.props.tasks.modalVisible} onOk={()=>{props.onSubmit()}} onCancel={()=>{props.props.setModalVisible(false);props.props.clearFormInitialValues()}}>
          <TaskForm/>
      </Modal>

      );
}
 
export default FormModal;