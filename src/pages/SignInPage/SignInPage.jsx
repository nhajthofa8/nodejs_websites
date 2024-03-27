

import { WrapperContainerLeft, WrapperContainerRight,WrapperTextLight } from './style'
import { InputFrom } from '../../components/InputForm/InputFrom'
import Buttoncomponents from './../../components/Buttoncomponents/Buttoncomponents';
import { Image } from 'antd';
import imageLogo from '../../assets/images/logo.png';
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
import React, { useState, } from 'react'
import {useNavigate} from 'react-router-dom'
import { useMutationHooks } from './../../hook/useMutatitonHooks';
import * as UserService from '../../services/UseServices';


export const SignInPage = () => {
const [isShowPassword, setIsShowPassword] = useState(false)
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const navigate = useNavigate();

const mutation = useMutationHooks(
  data => UserService.loginUser(data)
)

const {data} = mutation;

const handleNavigateSignUp =()=>{
  navigate('/sign-up')  
}
const handleOneChangeEMail =(value)=>{
      setEmail(value);
}

const handleOneChangePassword =(value)=>{
      setPassword(value);
}


const handleSignIn = () => {
  console.log('login success')
  mutation.mutate({
    email,
    password
  })
}
return (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
    <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p>Đăng nhập vào tạo tài khoản</p>
        <InputFrom style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOneChangeEMail} />
        <div style={{ position: 'relative' }}>
          <span
            onClick={() => setIsShowPassword(!isShowPassword)}
            style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}
          >{
              isShowPassword ? (
                <EyeFilled />
              ) : (
                <EyeInvisibleFilled />
              )
            }
          </span>
          <InputFrom
            placeholder="password"
            type={isShowPassword ? "text" : "password"}
            value={password}
            onChange={handleOneChangePassword}
          />
        </div>
        {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}

          <Buttoncomponents
            disabled={!email.length || !password.length}
            onClick={handleSignIn}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng Nhập'}
            styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
          ></Buttoncomponents>
        <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
        <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={imageLogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
        <h4>Mua sắm tại LTTD</h4>
      </WrapperContainerRight>
    </div>
  </div >
)
}