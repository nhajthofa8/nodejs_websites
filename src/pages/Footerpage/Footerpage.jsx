/* eslint-disable jsx-a11y/iframe-has-title */
import {  Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, PhoneOutlined,TwitterOutlined } from '@ant-design/icons';
import './style.css';
export const FooterPage = () => {
  return (
    <div className="Footer'"style={{background:'rgb(9, 120, 41)',width:'100%'} }>
      <section className="text-white" style={{paddingTop:'0px',paddingBottom:'0px'}}>
        <div className="">
          <Row gutter={[16]}>
            <Col xs={23} sm={23} md={23} lg={12} xl={10} >
              <div className='' style={{padding:'0px 15px 30px'}}>
                  <div className=''  style={{padding:'30px 0px 0px',lineHeight:'25.6px'}}>
                   <p style={{margin:'0px 0px 7px'}}>
                    <span  style={{ fontFamily: 'UVN BAI SAU', fontSize: '170%', lineHeight: '43.5px',display:'inline' }}>
                          Công ty TNHH SX TM DV Huỳnh Nhật Hòa
                    </span>
                    <div style={{ marginTop: '0.7em',marginBottom:'0.7em',width:'100px',height:'2px',backgroundColor:'rgba(255,255,255,.3)'}}/>
                    </p>
                  
                     <div style={{margin:'0px 0px 7px',lineHeight: '25.6px', fontSize:'16px'}}>
                        <p>
                          <strong>Địa chỉ:</strong> Quốc Lộ 57, Xã Đa Phước Hội, Huyện Mỏ Cày Nam, Tỉnh Bến Tre
                        </p>
                        <p>
                          <strong>Người đại diện:</strong> Huỳnh Nhật Hòa
                        </p>
                        <p>
                          <strong>Giờ làm việc:</strong> FullTime
                        </p>
                        <p>
                          <strong>Điện Thoại:</strong> (082) 541 5305
                        </p>
                        <p>
                          <strong>CSKH/Zalo:</strong> (082) 541 5305
                        </p>
                        <p>
                          <strong>Email:</strong> XODUAMOCAY@gmail.com
                        </p>
                      </div>
                   </div>
                 </div>
            </Col>
            <Col  xs={23} sm={23} md={23}  xl={8} >
            <div className='' style={{padding:'0px 15px 30px'}}>
            <div className=''  style={{padding:'30px 0px 0px',lineHeight:'25.6px'}}>
            <p style={{margin:'0px 0px 7px'}}>
                    <span  style={{ fontFamily: 'UVN BAI SAU', fontSize: '170%', lineHeight: '43.5px',display:'inline' }}>
                      Chính Sách
                    </span>
             </p>
             <div style={{ marginTop: '0.7em',marginBottom:'0.7em',width:'100px',height:'2px',backgroundColor:'rgba(255,255,255,.3)'}}/>
              <div style={{margin:'0px 0px 7px',lineHeight: '25.6px'}}>
              <ul className="" style={{ fontSize:'16px'}}>
                <li>Điều kiện & điều khoản mua bán</li>
                <li>Chính sách bảo mật thông tin</li>
                <li>Chính sách thanh toán</li>
                <li>Chính sách tra hàng hóa</li>
                <li>Chính sách giao & nhận hàng</li>
                <li>Cam kết chất lượng & QCSP</li>
              </ul>
              </div>
              <p style={{margin:'0px 0px 7px',}}>
                    <span  style={{ fontFamily: 'UVN BAI SAU', fontSize: '170%', lineHeight: '43.5px',display:'inline' }}>
                      KẾT NỐI VỚI CHÚNG TÔI
                    </span>
             </p>
             <div style={{ marginTop: '0.7em',marginBottom:'0.7em',width:'100px',height:'2px',backgroundColor:'rgba(255,255,255,.3)'}}/>
              <div >
                <a href="/#" className="mr-3" >
                  <FacebookOutlined style={{ color: 'white',fontSize:'32px' }} />
                </a>
                <a href="/#" className="mr-3">
                  <InstagramOutlined style={{ color: 'white',fontSize:'32px' }} />
                </a>
                <a href="/#">
                  <PhoneOutlined style={{ color: 'white' ,fontSize:'32px'}} />
                </a>
                <a href="/#">
                  <TwitterOutlined  style={{ color: 'white' ,fontSize:'32px'}} />
                </a>
              </div>
            </div>
            </div>
            </Col>
            <Col  xs={23} sm={23} md={23}  xl={6}>
            <div className='' style={{padding:'0px 15px 30px'}}>
            <div className=''  style={{padding:'30px 0px 0px',lineHeight:'25.6px'}}>
            <p style={{margin:'0px 0px 7px'}}>
                    <span  style={{ fontFamily: 'UVN BAI SAU', fontSize: '170%', lineHeight: '43.5px',display:'inline' }}>
                      Fanpage
                    </span>
             </p>
             <div style={{ marginTop: '0.7em',marginBottom:'0.7em',width:'100px',height:'2px',backgroundColor:'rgba(255,255,255,.3)'}}/>
            </div>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdua.mun.90&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"  width="300" height="300"></iframe>
            </div>
            </Col>
        </Row>
        </div>
      </section>
      <div className="text-center text-white p-4" style={{ justifyContent: 'space-between' ,background:'#026000'}}>
        2024 Copyright © Huỳnh Nhật Hòa
      </div>
    </div>
  );
};
