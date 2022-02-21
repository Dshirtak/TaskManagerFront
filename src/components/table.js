import React from 'react';
import { Table, Space } from 'antd';

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a id="update">Update</a>
          <a id="delete">Delete</a>
        </Space>
      ),
    },
  ];
const DataTable = ({props}) => {


    const handleDelete=(record)=>{
      props.deleteTask(record)
    }

    const handleUpdate=(record)=>{
      props.setFormInitialValues(record)
      props.setModalVisible(true);

    }

    return (<Table columns={columns} dataSource={props.tasks.tasks} onRow={(record) => ({
      onClick: (e) => {e.stopPropagation(); if(e.target.id==="update")handleUpdate(record);else if(e.target.id==="delete"){handleDelete(record)} }
  })}
      rowKey="id"/> );
}
 
export default DataTable;