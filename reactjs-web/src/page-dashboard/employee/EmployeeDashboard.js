

import React, { useEffect, useState } from 'react'
import  request  from '../../share/request';
import { Table } from 'antd';
import './EmployeeDashboard.css'
import { formateDateClient } from '../../share/helper';


export default function EmployeeDashboard() {

  const [list,setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    request("employee","get").then(res => {
      if(res){
        setList(res.list_employee)
      }
    })
  }
  return (
    <>
        <div>EmployeeDashboard</div>
        <div className='flex mt-2'>
          <button className='bg-blue-400 Manrope text-sm uppercase text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:duration-200'>New <i class="fa-solid fa-plus"></i></button>
        </div>
        <Table
        className='mt-2'
          columns={[
            { 
              className: "Manrope",
              title: 'No',
              dataIndex: '',
              key: 'no',
              render : (text,record,index) => index+1
            },
            {
              className: "Manrope",
              title: 'First Name',
              dataIndex: 'firstname',
              key: 'firstname',
            },
            {
              className: "Manrope",
              title: 'Last Name',
              dataIndex: 'lastname',
              key: 'lastname',
            },
            {
              className: "Manrope",
              title: 'Tel',
              dataIndex: 'tel',
              key: 'tel',
            },
            {
              className: "Manrope",
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              className: "Manrope",
              title: 'Salary',
              dataIndex: 'base_salary',
              key: 'base_salary',
            },
            {
              className: "Manrope",
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              className: "Manrope",
              title: 'Create At',
              dataIndex: 'creat_at',
              key: 'creat_at',
              render : (text) =>{
                return formateDateClient(text)
              },
            },
            {
              title: 'Action',
              key: 'update_at',
              render : (text, record, index) =>{
                return (
                  <div className='space-x-2 px-2 border-l'>
                    <button className='bg-blue-400 text-sm uppercase text-white px-2 py-1 rounded-md hover:bg-blue-500 hover:duration-200'><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='bg-red-400 text-sm uppercase text-white px-2 py-1 rounded hover:bg-red-500 hover:duration-200'><i class="fa-solid fa-trash-can"></i></button> 
                  </div>
                )
              },
            },
           
          ]}
          dataSource={list}
        />
    
    </>
  )
}
