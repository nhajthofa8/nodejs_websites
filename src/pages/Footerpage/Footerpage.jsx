import React from 'react'
import { Row, Col } from 'antd';
import {WrapperFooter } from './style';
import {FacebookOutlined,PhoneOutlined } from '@ant-design/icons'
export const Footerpage = () => {
  return (
    <div>
<WrapperFooter>
<Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <div >
        <span>XODUAMOCAY</span>
        <div>
        <p><strong>Người đại diện:</strong> Huỳnh Nhật Hòa</p>
        <p><strong>Giờ làm việc:</strong> Full Time</p>
        <p><strong>Điện Thoại:</strong>(082) 541 5305</p>
        <p><strong>CSKH/Zalo:</strong>(082) 541 5305</p>
        <p><strong>Email:</strong>xoduamocay@gmail.com</p>
        </div>
    
      </div>
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
    <div >
        <span>Chính sách</span>
        <div>
        <ul>
         <li> Điều kiện & điều khoản mua bán</li>  
         <li> Chính sách bảo mật thông tin</li>  
         <li> Chính sách giao & nhận hàng</li>  
         <li> Chính sách trao đổi trả hàng hóa</li>
         <li> Cam kết chất lượng</li>  
        </ul>
        </div>
        <span>KẾT NỐI VỚI CHÚNG TÔI</span>
       <div>
        <FacebookOutlined/>
        <PhoneOutlined />
        </div>
    </div>
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Fanpage Sfarm
       
    </Col>
</Row>
</WrapperFooter>
    </div>
  )
}
