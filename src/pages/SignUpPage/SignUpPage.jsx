/* eslint-disable react-hooks/exhaustive-deps */


import { WrapperContainerLeft,WrapperTextLight,WrapperContainerRight } from './../SignUpPage/style';
import { InputFrom } from './../../components/InputForm/InputFrom';
import Buttoncomponents from './../../components/Buttoncomponents/Buttoncomponents';
import imageLogo from '../../assets/images/logo.png'
import { Image } from 'antd';
import React, { useState } from 'react';
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
import * as UserService from '../../services/UseServices';
import { useMutationHooks } from './../../hook/useMutatitonHooks';


export const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');

    const mutation = useMutationHooks(
          data => UserService.signupUser(data)
    )
      

    const { data} = mutation
    


    const handleOnChangeEMail =(value)=>{
          setEmail(value);
    }

    const handleOnChangePassword =(value)=>{
          setPassword(value);
    }
    const handleOnChangeConfirmPassword =(value)=>{
          setconfirmPassword(value);
    }

   
    const handleNavigatesSignIn=() => {
      navigate('/sign-in')
    }
    
    const handleSignUp = () =>{
      console.log('Sign Up successfully')
        mutation.mutate({email,password,confirmPassword})
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
        <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
          <WrapperContainerLeft>
            <h1>Xin chào</h1>
            <p>Đăng nhập vào tạo tài khoản</p>
            <InputFrom style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnChangeEMail} />
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
              <InputFrom placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}
                value={password} onChange={handleOnChangePassword} />
            </div>
            <div style={{ position: 'relative' }}>
              <span
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: '4px',
                  right: '8px'
                }}
              >{
                  isShowConfirmPassword ? (
                    <EyeFilled />
                  ) : (
                    <EyeInvisibleFilled />
                  )
                }
              </span>
              <InputFrom placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"}
                value={confirmPassword} onChange={handleOnChangeConfirmPassword}
              />
            </div>
            {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
            
              <Buttoncomponents
                disabled={!email.length || !password.length || !confirmPassword.length}
                onClick={handleSignUp}
                size={40}
                styleButton={{
                  background: 'rgb(255, 57, 69)',
                  height: '48px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '4px',
                  margin: '26px 0 10px'
                }}
                textButton={'Đăng ký'}
                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
              ></Buttoncomponents>
            <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigatesSignIn}> Đăng nhập</WrapperTextLight></p>
          </WrapperContainerLeft>
          <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
            <h4>Mua sắm tại LTTD</h4>
          </WrapperContainerRight>
        </div>
      </div >
    )
}
