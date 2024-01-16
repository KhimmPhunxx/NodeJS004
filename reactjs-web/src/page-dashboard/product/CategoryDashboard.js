import React, { useEffect, useState } from 'react'
import {Button, Form, Modal} from 'react-bootstrap';
import request from '../../share/request';
import { formateDateClient, isPermission } from '../../share/helper';

export default function CategoryDashboard() {

  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parent_id, setParentId] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getList();
  }, [])
  const getList = () => {
    request("category","get").then(res => {
      if(res){
        setList(res.data_category)
        console.log(res)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  // event delet item category
  const onDelete = () => {
    setShow(false)
    var category_id = item.category_id;
    request("category/"+category_id,"delete").then(res => {
      var tmp_data = list.filter((item)=> item.category_id !== category_id);
      setList(tmp_data)
    })
  }
  var onClickBtnDelete = (param) => {
    setItem(param)
    setShow(true)
  }
  const onHideModal = () => {
    setShow(false)
    setItem('')
  }

  // event crate new item categoru
  const onShowModalForm = () => {
    setShowForm(true)
  }
  const onHideModalForm = () => {
    setShowForm(false)
    setItem({})
    clearForm();
  }
  const clearForm = () => {
    setName("");
    setDescription("");
    // setParentId("");
    setStatus("");
  }
  const onSave = () => {
    onHideModalForm();
    var param = {
      "name" : name,
      "description" : description,
      "parent_id" : 0,
      "status" : status
    }
    var url = "category"
    var menthod = "post"

    if(item.category_id != null){
      param.category_id = item.category_id
      menthod = "put"
    }
    request(url	,menthod,param).then(res => {
      if(res){
        getList();
        clearForm();
      }
    })
  }

  // event update item category
  const onClickEdit = (param) => {
    setItem(param)
    setShowForm(true)
    setName(param.name)
    setDescription(param.description)
    setParentId(param.parent_id)
    setStatus(param.status)
  }

  return (
    <main className='max-w-8xl mx-auto Manrope py-3'>
      <div className='flex'>
        <button onClick={onShowModalForm} className='bg-blue-400 text-sm uppercase text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:duration-200 flex'>Create New <i class="fa-solid fa-cart-plus mt-[4px] ml-2"></i> </button>
      </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm border mt-3 bg-gray-100">
            <table className="w-full text-md text-left rtl:text-right text-gray-800 font-medium">
                <thead className="text-lg text-gray-700 border-b-2 bg-gray-200">
                    <tr>
                        <th scope="col" className="py-2 px-3 border-r border-gray-300">
                        No
                        </th>
                        <th scope="col" className="py-2 px-3 border-r border-gray-300">
                        NAME
                        </th>
                        <th scope="col" className="py-2 px-3 border-r border-gray-300">
                        DESCRIPTION
                        </th>
                        <th scope="col" className="py-2 px-3 border-r border-gray-300">
                        STATUS
                        </th>
                        <th scope="col" className="py-2 px-3 border-r border-gray-300">
                        CREATE
                        </th>
                        <th scope="col" className="py-2 px-3">
                        ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => {
                        return(
                          <tr className='border-t odd:bg-white p-2' key={index}>
                            <td className='py-0 px-3'>{index+1}</td>
                            <td className='py-0 border-l px-3'>{item.name}</td>
                            <td className='py-0 border-l px-3'>{item.description}</td>
                            <td className='py-0 border-l px-3'>{item.status}</td>
                            <td className='py-0 border-l px-3'>{formateDateClient(item.create)}</td>
                            <td className='space-x-2 py-2 px-3 border-l'>
                              <button disabled={!isPermission("update.category")} onClick={()=>onClickEdit(item)} className='bg-green-400 text-sm uppercase text-white px-3 py-1 rounded-md hover:bg-green-500 hover:duration-200'><i class="fa-solid fa-pen-to-square"></i></button>
                              <button disabled={!isPermission("delete.category")} onClick={()=> onClickBtnDelete(item)} className='bg-red-400 text-sm uppercase text-white px-3 py-1 rounded-md hover:bg-red-500 hover:duration-200'><i class="fa-solid fa-trash-can"></i></button> 
                            </td>
                          </tr>
                        )
                      })
                    }
                </tbody>
            </table>
  
          {/* Modal delete */}
           <div className='modal show ' style={{display: "block", position: "initial"}}>
              
                  <Modal show={show} onHide={onHideModal} className='Manrope'>
                    
                    <Modal.Header closeButton>
                      <Modal.Title className='Manrope font-bold'>Delete</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='space-y-3'>
                      <p>Are you sure delete this item ?</p>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={onHideModal}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={onDelete}>
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
              </div>


            {/* modal form */}
            <div className='modal show ' style={{display: "block", position: "initial"}}>
              
                  <Modal show={showForm} onHide={onHideModalForm} className='Manrope'>
                    
                    <Modal.Header closeButton>
                      <Modal.Title className='Manrope'>{item.category_id == null ? "Create" : "Update"} </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='space-y-3'>
                     <div>
                        <label className='Manrope font-bold'>Name</label>
                        <Form.Control
                        value={name}
                        onChange={(event)=> {
                            setName(event.target.value) // set value name
                        }}
                          as="input"
                          placeholder="name"
                          style={{ height: '40px' }}
                        />
                     </div>
                     <div>
                        <label className=' font-bold'>Description</label>
                        <Form.Control
                          value={description}
                          onChange={(event)=> {
                            setDescription(event.target.value) // set value description
                          }}
                          as="textarea"
                          placeholder="Description"
                          style={{ height: '100px' }}
                        />
                     </div>
                    
                     <div>
                        <label className=' font-bold'>Status </label>
                        <Form.Control
                        value={status}
                        onChange={(event)=> {
                            setStatus(event.target.value) // set value status
                        }}
                          as="input"
                          placeholder="status"
                          style={{ height: '40px' }}
                        />
                     </div>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={onHideModalForm}>
                        Close
                      </Button>
                      <Button variant="secondary" onClick={clearForm}>
                        Clear
                      </Button>
                      <Button variant="primary" onClick={onSave}>
                        {item.category_id == null ? 'Save' : 'Update'}
                      </Button>
                    </Modal.Footer>
                  </Modal>

            </div>
        </div>

    </main>
  )
}
