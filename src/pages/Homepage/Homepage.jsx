
import Slidercomponets from "../../components/Slidercomponents/Slidercomponets";
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.webp";
import { FooterPage } from "../Footerpage/Footerpage";
import {Overviewpage} from "../Overviewpage/Overviewpage";
import { Menu, Drawer, Button,Row,Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ButtonInputSearch } from '../../components/ButtonInputSearch/ButtonInputSearch';
import './style.css';
import React, { useState } from 'react';
import Contactpage from './../Contactpage/Contactpage';
const Homepage =()=>{
    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return(
  <>
   <div className="menu-container">
    <Row>
      <Col span={8}>
      <Button type="primary" onClick={showDrawer} className="menu-icon">
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="drawer-menu"
      >
        <Menu theme="light" mode="inline">
          <Menu.Item key="home">TRANG CHỦ</Menu.Item>
          <Menu.Item key="about">GIỚI THIỆU</Menu.Item>
          <Menu.Item key="products">SẢN PHẨM</Menu.Item>
          <Menu.Item key="pricing">BẢNG GIÁ</Menu.Item>
          <Menu.Item key="contact">LIÊN HỆ</Menu.Item>
        </Menu>
      </Drawer>
      </Col>
      <Col span={8}>
        <div className="logo">
        <h1 style={{
        fontFamily:'UVN BAI SAU',
        fontWeight:'700',
        margin:'auto',
        display:'block',
        }} >XODUAMOCAY</h1>
        </div>
      </Col>
      <Col span={6}>
        <div style={{float:'right',padding:'16px 0'}}>
          EN/VN
        </div>
      </Col>

  </Row>
      <Col span={24}>
     <div style={{ maxWidth:"100%", background:'#097829'}}>

          <ButtonInputSearch 
            size="Large"
            placeholder = 'Tìm kiếm....'
          />
     </div>
        </Col>
        
    </div>
    <span className="">
        <div id="container" style={{backgroundColor:'#efefef', height:'auto', maxWidth:'100%'}}>
             <Slidercomponets arrImages ={[banner1,banner2]}/>
        <div style={{marginTop: '20px', display:'flex' ,alignItems:'center',gap:'20px'}}>
        </div>
    </div>
    </span>
    <Overviewpage></Overviewpage>
    <Contactpage></Contactpage>
    <FooterPage></FooterPage>
    </>
    )
}
export default Homepage