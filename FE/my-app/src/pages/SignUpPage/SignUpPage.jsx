
import { WrapperContainerLeft,WrapperTextLight,WrapperContainerRight } from './../SignUpPage/style';
import { InputFrom } from './../../components/InputForm/InputFrom';
import Buttoncomponents from './../../components/Buttoncomponents/Buttoncomponents';
import imageLogo from '../../assets/images/logo.png'
import { Image } from 'antd';
import React, { useState } from 'react';
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
export const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
                <WrapperContainerLeft>
                    <h1>Xin Chao</h1>
                    <span>Đăng nhập và tạo tài khoản</span>
                    <InputFrom style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" ></InputFrom>
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
            
            />
          </div>
                    <Buttoncomponents
                            boder={false}
                            size ={40}
                            style ={{ 
                                    background: 'rgb(255,57,69)',
                                    height:'48px',
                                    width:'220px',
                                    border:'none',
                                    borderRadius:'4px'
                            }}
                            textButton={'Đăng Nhập'}
                            styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
                       >
                       </Buttoncomponents>
                       <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                <p>Bạn có tài khoản? <WrapperTextLight >Đăng Nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                  <h4>Mua sắm tại LTTD</h4>
                </WrapperContainerRight>
            </div>              
        </div>
          )
}
