
import React from 'react';
import { Button, Form,message, Input } from 'antd';
import request from '../../share/request';
import { useNavigate } from 'react-router-dom';
import { storeUserData } from '../../share/helper';

const LoginDashboard = () => {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    var onFinish = (values) => {
        setLoading(true);
        var param = {
            "username" : values.username,//"0123456789",
            "password" : values.password //"123456"
        }
        request("employee_login","post",param).then(res => {
            setLoading(false);
            console.log(res)
            if(!res.error){
                storeUserData(res);
                navigate('/dashboard');
            }else{
                message.error(res.message)
            }
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


    return (
        <main className='max-w-3xl mx-auto shadow border rounded-xl p-10 mt-20'>
            <div className='max-w-sm mx-auto shadow py-6 p-4 border rounded-md'>
                <h1 className='Manrope text-xl font-bold text-center uppercase'>Login to Dashboard <i class="fa-solid fa-right-to-bracket"></i> </h1>
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                    className='Manrope'
                    label="Telephone"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input className='rounded Manrope'/>
                    </Form.Item>
        
                    <Form.Item
                    className='Manrope'
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password className='Manrope' />
                    </Form.Item>

                    <div className='mt-3 Manrope text-center' >
                    Don't have an account? 
                    <a onClick={()=> navigate('/dashboard/register')} className='text-blue-400'> Register</a>
                    </div>
        
                    
                    <Button size='large' loading={loading} type="primary" className='shadow w-full mt-3 bg-blue-400 Manrope' htmlType="submit">
                    Login
                    </Button>
                </Form>
            </div>
        </main>
    );
}


export default LoginDashboard;

// import React from 'react'
// import './LoginDashboard.css'
// import { useNavigate } from 'react-router-dom';

// export default function LoginDashboard() {
//     const navigate = useNavigate();

//     const onLogin = () => {
//         localStorage.setItem('isLogin', '1');
//         navigate('/dashboard');
//     }
//   return (
//    <>
//         <main className='max-w-sm mx-auto p-5 shadow rounded-xl border mt-5'>
//             <div className=''>
//                 <div className='space-y-2'>
//                 <h1 className='Manrope text-xl font-bold text-center uppercase'>Login to Dashboard <i class="fa-solid fa-right-to-bracket"></i> </h1>
//                 <div className='input-group mt-4'>
//                     <input type="text" className='rounded Manrope w-full' required/>
//                     <label className='Manrope'>Username</label>
//                 </div>
//                 <div className='input-group mt-4'>
//                     <input type="text" className='rounded Manrope w-full' required/>
//                     <label className='Manrope'>Password</label>
//                 </div>
//                 </div>
//                 {/* <div className='mt-3 Manrope' >
//                     <input type="checkbox" className='Manrope' /> Remember me
//                 </div> */}
//                 <div className='mt-4'>
//                     <button  type='submit' className='Manrope bg-blue-400 hover:bg-blue-500 hover:duration-300 text-gray-100 p-2 rounded w-full'>Login</button>
//                 </div>
//             </div>
          
//         </main>
//    </>
//   )
// }
