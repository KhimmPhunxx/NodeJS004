import React, { useEffect, useState } from 'react'
import request from '../../share/request'
import { Table, Tag, Modal, Form, Row, Col, Input, Select, message } from 'antd';
import { formateDateClient } from '../../share/helper';
import './CategoryDashboard.css'
const { Option } = Select;


export default function ProductDashboard() {

  const [list, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [brand, setBrand] = useState([]);
  const [visble, setVisible] = useState(false);
  const [productIdEdit, setProductIdEdit] = useState(null);
  const [form] = Form.useForm();


  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    request("product","get").then(res => {
      console.log(res)
      if(res){
        setList(res.data)
        setCategoryList(res.data_category)
        setBrand(res.data_brand)
      }
    })
  }

//   {
//     "barcode": "P004",
//     "product_name": "Hp",
//     "quantity": "12",
//     "price": "1000",
//     "category": 10,
//     "brand": 1,
//     "description": "Hp brand"
// }

  const onCancelModal = () => {
    setVisible(false)
    setProductIdEdit(null)
    form.resetFields();
  }

  const onFinish = (item) => {
    console.log(item)
    if(productIdEdit == null){
      var param = {
        "category_id": item.category,
        "barcode": item.barcode,
        "name":  item.product_name,
        "quantity": item.quantity,
        "price": item.price,
        "image":  item.image, 
        "description" : item.description
      }
      request("product","post",param).then(res => {
        if(res){
          message.success(res.message)
          form.resetFields();
          setVisible(false);
          getList();
        }
      })
    }else{
      var param = {
        "product_id": productIdEdit,
        "category_id": item.category,
        "barcode": item.barcode,
        "name":  item.product_name,
        "quantity": item.quantity,
        "price": item.price,
        "image":  item.image, 
        "description" : item.description
      }
      request("product","put",param).then(res => {
        if(res){
          message.success(res.message)
          form.resetFields();
          setVisible(false);
          getList();
        }
      })
    }
  }

  const onEditClick = (item) => {
    console.log(item)
    setProductIdEdit(item.product_id)
    form.setFieldsValue({
      category: item.category_id,
      barcode: item.barcode,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
      brand: item.brand_id,
      image: item.image,
      description: item.description
    });
    setVisible(true)
  }

  const onDelete = (item) => {
    console.log(item)
    var param = {
      id:item.product_id
    }
    request("product/","delete",param).then(res => {
      if(res){
        message.success(res.message)
        getList();
      }
    })
  }

  return (
    <main>
        {/* create new button create */}
        <div className='flex mt-2'>
          <button onClick={() => setVisible(true)} className='bg-blue-400 Manrope text-sm uppercase text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:duration-200'>New Product <i class="fa-solid fa-plus"></i></button>
        </div>
        <Table
        className='mt-3 shadow border bg-gray-100'
        pagination={false}
        columns={[
          {
            key : "barcode",
            title: "Barcode",
            dataIndex: "barcode",
            className : "Manrope"
            
          },
          {
            key : "name",
            title: "Name",
            dataIndex: "name",
            className : "Manrope"
            
          },
          {
            key : "quantity",
            title: "Quantity",
            dataIndex: "quantity",
            className : "Manrope"
          },
          {
            key : "price",
            title: "Price",
            dataIndex: "price",
            className : "Manrope"
          },
          {
            key : "image",
            title: "Image",
            dataIndex: "image",
          },
          {
            key : "description",
            title: "Description",
            dataIndex: "description",
            className : "Manrope"
          },
          {
            key : "is_active",
            title: "Active",
            dataIndex: "is_active",
            render : (text, record, index)=>{
              return (
                <Tag className="Manrope" color={text == 1 ? "green" : "red" } key={1}>
                  {text == 1 ? "Active" : "Disable"}
                </Tag>
              )
            }
          },
          {
            key : "create_at",
            title: "Create",
            dataIndex: "create_at",
            render : (text, record, index) =>{
              return formateDateClient(text)
            },
            className : "Manrope"
          },
          {
            key : "action",
            title: "Action",
            className : "Manrope",
            render : (text, record, index) =>{
              return (
                <div className='space-x-2 px-2 border-l'>
                  <button onClick={() => onEditClick(record)} className='bg-blue-400 text-sm uppercase text-white px-3 py-1 rounded-md hover:bg-blue-500 hover:duration-200'><i class="fa-solid fa-pen-to-square"></i></button>
                  <button onClick={() => onDelete(record)} className='bg-red-400 text-sm uppercase text-white px-3 py-1 rounded hover:bg-red-500 hover:duration-200'><i class="fa-solid fa-trash-can"></i></button> 
                </div>
              )
            }
          },
        ]}
            dataSource={list}
        />

        <Modal
          className='Manrope'
          open={visble}
          title={productIdEdit == null ? "Create" : "Update"}
          onCancel={onCancelModal}
          footer={null}
          maskClosable={false}
          width={600}
        >
          <Form layout="vertical" form={form} onFinish={onFinish}>
              <Row gutter={10}>
                <Col span={12}>
                    <Form.Item
                      className='Manrope'
                      label="Barcode"
                      name="barcode"
                      
                    >
                      <Input allowClear={true} className='border border-gray-600 p-2 rounded' placeholder='barcode' />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        className='Manrope'
                        label="Product Name"
                        name="product_name"
                      >
                      <Input allowClear={true} className='border border-gray-600 p-2 rounded' placeholder='product name' />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={10}>
              <Col span={12}>
                  <Form.Item
                    className='Manrope'
                    label="Quantity"
                    name="quantity"
                  >
                    <Input allowClear={true} className='border border-gray-600 p-2 rounded' placeholder='quantity' />
                  </Form.Item>
              </Col>

              <Col span={12}>
                  <Form.Item
                      className='Manrope'
                      label="Price"
                      name="price"
                     
                    >
                    <Input allowClear={true} className='border border-gray-600 p-2 rounded' placeholder='price' />
                  </Form.Item>
              </Col>
            </Row>

            <Form.Item
                className='Manrope'
                label="Category"
                name="category"
              >
              <Select
                placeholder="Select category"
                allowClear={true}
              >
                {
                  categoryList?.map((item, index) => {
                    return (
                      <Option value={item.category_id} key={index}>{item.name}</Option>
                    )
                  })
                }

              </Select>
            </Form.Item>

            <Form.Item
                className='Manrope'
                label="Brand"
                name="brand"
              >
              <Select
                placeholder="Select brand"
                allowClear={true}
              >
                {
                  brand?.map((item, index) => {
                    return (
                      <Option value={item.id} key={index}>{item.name}</Option>
                    )
                  })
                }

              </Select>
            </Form.Item>

            <Row gutter={10}>
              <Col span={12}>
                  <Form.Item
                    className='Manrope'
                    label="Image"
                    name="image"
                  >
                    <Input allowClear={true} className='border border-gray-600 p-2 rounded' placeholder='image' />
                  </Form.Item>
              </Col>

              <Col span={12}>
                  <Form.Item
                      className='Manrope'
                      label="Description"
                      name="description"
                    >
                    <Input allowClear={true} className='border border-gray-600 p-2 rounded' placeholder='description' />
                  </Form.Item>
              </Col>
            </Row>

           <Form.Item className='border-t'>
              <div className='space-x-3 mt-3' style={{float: "right"}}>
                <button className='border Manrope text-sm uppercase text-gray-600 px-3 py-2 rounded-md hover:bg-blue-100 hover:duration-200'>Cancel</button>
                <button onClick={()=> form.resetFields()} className='border Manrope text-sm uppercase text-gray-600 px-3 py-2 rounded-md hover:bg-blue-100 hover:duration-200'>Clear</button>
                <button type='submit' className='bg-green-400 Manrope text-sm uppercase text-white px-3 py-2 rounded-md hover:bg-green-500 hover:duration-200'> {productIdEdit == null ? "Save" : "Update"} </button>
              </div>
           </Form.Item>

          </Form>
        </Modal>

    </main>
    


  )
}
