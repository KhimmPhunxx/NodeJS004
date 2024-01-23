import React from 'react'
import { Outlet } from 'react-router-dom'
import './LayoutPage.css'
import logo from '../../assets/logo/PC_logo.png'
import { Avatar, Badge, Button, Dropdown, Modal } from 'antd'

export default function LayoutPage() {
    const [visible, setVisible] = React.useState(false);
    const itemsProfile = [
        {
          key: '1',
          label: (
            <a className='Manrope' rel="noopener noreferrer" >
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
              <a className='Manrope' onClick={()=> onLogin()} >
               Logout <i class="fa-solid fa-arrow-right-from-bracket ml-4"></i>
              </a>
            ),
          },
      ];

        const onLogin = () => {
            setVisible(true)
        }
  return (
   <>
    <header className='w-full h-14 shadow bg-blue-300'>
        <nav className='max-w-8xl h-full mx-auto p-3 flex justify-between'>
            <div className="logo flex cursor-pointer">
                <img className='h-8' src={logo} alt="logo" />
                <h1 className='text-[20px] ml-1 uppercase font-bold manrope'>PreyCode</h1>
            </div>
            <div className='space-x-3 cursor-pointer flex'>
                <div>
                <Badge >
                    <Avatar src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg" shape="square" size="medium" />
                </Badge>
                </div>
                
                <Dropdown menu={{ items:itemsProfile }} placement="bottomRight" arrow>
                    <Button onClick={()=> onLogin()} className='manrope font-bold'>Login</Button>
                </Dropdown>
            </div>
            <Modal
                className='manrope'
                title="Login Here"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}
                open={visible}
            >

            </Modal>

        </nav>
    </header>
    <Outlet />
   </>
  )
}
