import React from 'react'
import { Col } from 'antd';
import { WrapperHeader,WrapperHeaderAccout,WrapperTextHeader,WrapperTextHeaderSmall } from './style';

import { ButtonInputSearch } from './../ButtonInputSearch/ButtonInputSearch';
import {  UserOutlined,
  ArrowDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

const Headercomponents = () => {
  const navigate = useNavigate()

  const handleNavigateLogin =() => {
    navigate('/sign-in')
  
  }  
  return (
    <div>
      <WrapperHeader gutter={16}>
      <Col span={6}>    
        <WrapperTextHeader>XODUAMOCAY</WrapperTextHeader>
      </Col>
      <Col span={12}>
      <ButtonInputSearch 
      size="large"
      placeholder = 'Tìm kiếm....'
      />
      </Col>
    <Col span={6} style={{ display :'flex' , gap:'20px'}}>
      <WrapperHeaderAccout>
        <UserOutlined style={{ fontSize: '30px'}} />
        <div onClick={handleNavigateLogin } style={{ cursor:'pointer'}}>
            <WrapperTextHeaderSmall >ĐĂNG NHẬP/ĐĂNG KÝ</WrapperTextHeaderSmall>
        <div>
            <WrapperTextHeaderSmall>TÀI KHOẢN</WrapperTextHeaderSmall>
            <ArrowDownOutlined/>
          </div>
        </div>
     
      <div>
          <ShoppingCartOutlined style={{ fontSize :'30px',}}/>
          <WrapperTextHeaderSmall>GIỎ HÀNG</WrapperTextHeaderSmall>
      </div>
      </WrapperHeaderAccout>
    </Col>
    </WrapperHeader>
  </div>
  )
}

export default Headercomponents