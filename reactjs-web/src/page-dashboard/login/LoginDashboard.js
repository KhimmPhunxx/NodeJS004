
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
        <div className='max-w-md mx-auto shadow p-4 mt-10 border rounded-xl'>
            <h1 className='Manrope text-xl font-bold text-center uppercase'>Login to Dashboard <i class="fa-solid fa-right-to-bracket"></i> </h1>
            <Form 
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                className='Manrope'
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input className='rounded'/>
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
                <Input.Password />
                </Form.Item>
    
                <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 20,
                    span: 16,
                }}
                >
                <Button loading={loading} type="primary" className='bg-blue-400 Manrope' htmlType="submit">
                   Login
                </Button>
                </Form.Item>
            </Form>
        </div>
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
