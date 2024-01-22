import React, { useEffect, useState } from 'react';
import {
  TeamOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button,  Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import './LayoutDashboard.css'
import { FaBook, FaCartArrowDown,  FaLuggageCart,  FaMap, FaPeopleArrows, } from 'react-icons/fa';
import { MdCategory, MdGolfCourse, MdHome, MdList, MdPayment, MdPeople, MdProductionQuantityLimits, MdRollerShades, MdSignalWifiStatusbar1Bar, MdSummarize } from 'react-icons/md';
import { IoIosPeople } from "react-icons/io";
import PC_logo from '../../assets/logo/PreyCode_logo.png'
import { Dropdown } from 'antd';
import { Config, getUser } from '../../share/helper';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label,key,icon,children,){
  return { 
    key,
    icon, 
    children,
    label,
  };
}

const items = [
    getItem('Dashboard', '/dashboard', <MdHome/>),
    getItem('Customer', '/dashboard/customer', <FaPeopleArrows />),
    getItem('Employee', '/dashboard/employee', <IoIosPeople />),
    getItem('Order', '/dashboard/order', <FaCartArrowDown />),

    getItem('Product', '/dashboard/product', <FaLuggageCart />, [
      getItem('Category', '/dashboard/product/category', <MdCategory />),
      getItem('Product', '/dashboard/product/productlist', <MdList />),
    ]),

    getItem('User', '', <MdPeople />, [
      getItem('Role', '/dashboard/user/role', <MdRollerShades />),
      getItem('User Role', '/dashboard/user/user_role', <MdPeople />),
    ]),

    getItem('System', '/dashboard/system', <FaBook />, [
      getItem('Order Status', '/dashboard/system/order_status', <MdSignalWifiStatusbar1Bar />),
      getItem('Order Payment', '/dashboard/system/order_payment', <MdPayment />),
      getItem('Province', '/dashboard/system/province', <FaMap />),
    ]),

    getItem('Report', '/dashboard/report', <TeamOutlined />, [
      getItem('Top Sale', '/dashboard/report/top_sale' , <MdGolfCourse />),
      getItem('Sale Summary', '/dashboard/report/sale_summary' , <MdSummarize/> ),
      getItem('Sold By Category', '/dashboard/report/sold_by_category' , <MdCategory />),
      getItem('Sold By Product', '/dashboard/report/sold_by_product', <MdProductionQuantityLimits /> ),
    ]),
];

// LocalStorage
const LayoutDashboard = () => {

    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisible] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
      const isLogin = localStorage.getItem('isLogin');
      if(isLogin == "0"){
          navigate('/dashboard/login');
      }
   }, []);
    const onChangeMenu = (item) => {

        navigate(item.key);
    }
   
    const handleLogout = () => {
       localStorage.setItem('isLogin', '0');
        navigate('/dashboard/login');
    }

    const itemsProfile = [
      {
        key: '1',
        label: (
          <a onClick={()=> navigate('/dashboard/profile')} className='Manrope' rel="noopener noreferrer" >
            My Profile
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a className='Manrope' onClick={""} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Change Password
          </a>
        ),
      },
      {
          key: '4',
          label: (
            <a className='Manrope' onClick={handleLogout}>
             Logout <i class="fa-solid fa-arrow-right-from-bracket ml-4"></i>
            </a>
          ),
        },
    ];

    const user = getUser();
    return (
        <Layout className='Manrope' style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
              <div className="demo-logo-vertical" />
              <Menu onClick={onChangeMenu} className='Manrope' theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout>
              <Header style={{ padding: 15, background: colorBgContainer }} className='flex justify-between'>
                  <div className='flex'>
                      <img className='h-9 mr-3' src={PC_logo} alt="" />
                      <h1 className='Manrope text-2xl font-bold text-gray-800'>PREYCODE Backend</h1>  
                  </div>
                  <div className='flex space-x-6'>
                      <div className='mt-[-12px]'>
                          <Badge count={4}>
                              <i class="fa-solid fa-bell text-[28px] text-gray-400"></i>
                          </Badge>
                      </div>
                      <div className='mt-[-20px] space-x-3 cursor-pointer'>
                          <Badge>
                              <Avatar onClick={()=> navigate('/dashboard/profile')} src={Config.image_path+user.image_empl}  shape="square" size="medium" />
                          </Badge>
                          
                          <Dropdown menu={{ items:itemsProfile }} placement="bottomRight" arrow>
                              <Button className='Manrope font-bold'>{user.firstname+"-"+user.lastname} </Button>
                          </Dropdown>
                      </div>
                    
                  </div>
              </Header>
              <Content style={{ margin: '10px 10px' }}>
              <div
                  style={{
                  padding: 5,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  }}
              >
                  <Outlet />
              </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                  <p className='Manrope text-md'>Welcome to PreyCode Backend Store ©2024 Created by PreyCode</p>
              </Footer>
          </Layout>
        </Layout>
    );
};
export default LayoutDashboard;

