/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { Col, Row } from 'antd';
import Image1 from '../../assets/images/anhcaydua.webp';
export const Overviewpage = () => {
  return (
    <section>
    <Row gutter={[16, 16]} justify="center">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div style={{ padding: '0px 0px 7px', backgroundColor: '#fff' }}>
        <p style={{fontFamily:'Roboto'}}>
        <span style={{display:'inline',gridArea:'auto',lineHeight:'64px', fontSize:'40px',}}>Giới thiệu</span>
        </p>
          <h2 style={{ color: '#097829', fontWeight: '700', fontSize: '1.6em',lineHeight:'1.3',}}>Thương hiệu</h2>

          <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Thành lập tháng 4/2013, Đặng Gia Trang hiện là đơn vị cung cấp phân trùn quế hàng đầu Việt Nam với thương hiệu SFARM. Đồng thời cũng đã phát triển thêm các sản phẩm vật tư khác cung cấp cho ngành nông nghiệp đô thị, chủ yếu là dòng giá thể, phân bón hữu cơ và sinh học như: đất sạch hữu cơ, mụn dừa xử lý, trấu hun nguyên cánh,…
          </div>
          <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Với hệ thống điểm bán phủ khắp các thành phố của 63 tỉnh thành trên cả nước, SFARM đang dần trở thành thương hiệu được lựa chọn hàng đầu cho các “nông dân phố”. Hiện tại, Đặng Gia Trang tiếp tục nghiên cứu để phát triển thêm nhiều dòng sản phẩm mới với tầm nhìn trở thành nhà cung cấp hàng đầu mảng nông nghiệp đô thị, cải tạo đất ở Việt Nam.
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={11} xl={11}>
        <div style={{padding: '30px', backgroundColor: '#fff' }}>
          <img src={Image1} alt="Image1" style={{ width: '100%' }} />
        </div>
      </Col>
    </Row>
  </section>
);
};
