
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
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');

    const mutation = useMutationHooks(
          data =>UserService.signupUser(data)
    )
      

    const { data} = mutation
    


    const handleOneChangeEMail =(value)=>{
          setEmail(value);
    }

    const handleOneChangePassword =(value)=>{
          setPassword(value);
    }
    const handleOneChangeConfirmPassword =(value)=>{
          setconfirmPassword(value);
    }

   
    const handleNavigatesSignIn=() => {
      navigate('/sign-in')
    }
    
    const handleSignUp = () =>{
        mutation.mutate({email,password,confirmPassword})
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
                <WrapperContainerLeft>
                    <h1>Xin Chào</h1>
                    <span>Đăng nhập và tạo tài khoản</span>
            <InputFrom style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" 
            value={email}
            onChange ={handleOneChangeEMail}
             ></InputFrom>
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
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              value={password} onChange ={handleOneChangePassword}
            />
          </div>
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
              placeholder="Confirm Password"
              type={isShowPassword ? "text" : "password"}
              value={confirmPassword} onChange ={handleOneChangeConfirmPassword }
            />
          </div>
          {data?.status ==="ERR" && <span>{data?.message}</span>}
                    <Buttoncomponents
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                  
                            size ={40}
                            styleButton ={{ 
                                    background: 'rgb(255,57,69)',
                                    height:'48px',
                                    width:'220px',
                                    border:'none',
                                    borderRadius:'4px'
                            }}
                            textButton={'Đăng Ký'}
                            styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
                       >
                       </Buttoncomponents>
                       <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                <p>Bạn có tài khoản? <WrapperTextLight onClick={handleNavigatesSignIn} >Đăng Nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                  <h4>Mua sắm tại LTTD</h4>
                </WrapperContainerRight>
            </div>              
        </div>
          )
}
