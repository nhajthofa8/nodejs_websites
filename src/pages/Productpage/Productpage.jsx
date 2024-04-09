import React from 'react'
import { Row, Col, Image, Card } from 'antd';
import './style.css';
const Productpage = () => {
  return (
    <section>
    <Row>
      <Col span={24}>
        <div className='col-inner text-center' style={{textAlgin:'center'}}>
        <h2 style={{textAlign: 'center'}}>
            <span style={{fontFamily: 'UVN Bai Sau',fontSize: '120%'}}>Sản Phẩm</span>
        </h2>
        <p style={{textAlign:' center'}}>
        <Image  
        style={{display:'block'}}
        src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-Didver1.webp"  width="275" height="41"/>
        </p>
        </div>
    </Col>
    </Row >
    <div className="menu-container">
    <Row justify="center" gutter={[16, 16]}>
    <Col xs={24} sm={12} md={8} lg={6}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          hoverable
          style={{ maxWidth: '75%', fontSize: '105%' }}
          cover={<img alt="example" src="https://sfarm.vn/wp-content/uploads/2021/12/SFARM-ANHNEN-03-600x600.jpg" />}
        >
          <div>
            <a href='/'>MỤN DỪA ĐÃ XỬ LÝ CHẤT CHÁT & MẦM BỆNH</a>
            <p>trồng rau ăn củ quả chuyên dành cho các giống cây tương đối dài ngày với mục đích thu hoạch củ, quả.</p>
          </div>
        </Card>
      </div>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          hoverable
          style={{ maxWidth: '75%', fontSize: '105%' }}
          cover={<img alt="example" src="https://sfarm.vn/wp-content/uploads/2021/12/SFARM-ANHNEN-03-600x600.jpg" />}
        >
          <div>
            <a href='/'>MỤN DỪA ĐÃ XỬ LÝ CHẤT CHÁT & MẦM BỆNH</a>
            <p>trồng rau ăn củ quả chuyên dành cho các giống cây tương đối dài ngày với mục đích thu hoạch củ, quả.</p>
          </div>
        </Card>
      </div>
    </Col>
  </Row>
    </div>
    <div className='headerMenu'>
    <Row >
        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{display:'flex'}}>
        <div style={{marginRight:'50px',marginLeft:'125px',textAlign:'center'}} >
        <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://sfarm.vn/wp-content/uploads/2021/12/SFARM-ANHNEN-03-600x600.jpg"/>}
        >
        <div>
        <a href='/'>MỤN DỪA ĐÃ XỬ LÝ CHẤT CHÁT & MẦM BỆNH</a>
        <p>
            trồng rau ăn củ quả chuyên dành cho các giống cây tương đối dài ngày với mục đích thu hoạch củ, quả.
        </p>
        </div>
        </Card>
        </div>
        <div style={{marginRight:'50px',textAlign:'center'}}>
        <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://sfarm.vn/wp-content/uploads/2021/12/SFARM-ANHNEN-03-600x600.jpg" />}
        >
        <div>
        <a href='/'>MỤN DỪA ĐÃ XỬ LÝ CHẤT CHÁT & MẦM BỆNH</a>
        <p>
            trồng rau ăn củ quả chuyên dành cho các giống cây tương đối dài ngày với mục đích thu hoạch củ, quả.
        </p>
        </div>
        </Card>
        </div>

        <div style={{marginRight:'50px',textAlign:'center'}}>
        <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://sfarm.vn/wp-content/uploads/2021/12/SFARM-ANHNEN-03-600x600.jpg" />}
        >
        <div>
        <a href='/'>MỤN DỪA ĐÃ XỬ LÝ CHẤT CHÁT & MẦM BỆNH</a>
        <p>
            trồng rau ăn củ quả chuyên dành cho các giống cây tương đối dài ngày với mục đích thu hoạch củ, quả.
        </p>
        </div>
        </Card>
        </div>

        <div style={{marginRight:'50px',textAlign:'center'}}>
        <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://sfarm.vn/wp-content/uploads/2021/12/SFARM-ANHNEN-03-600x600.jpg" />}
        >
        <div>
        <a href='/'>MỤN DỪA ĐÃ XỬ LÝ CHẤT CHÁT & MẦM BỆNH</a>
        <p>
            trồng rau ăn củ quả chuyên dành cho các giống cây tương đối dài ngày với mục đích thu hoạch củ, quả.
        </p>
        </div>
        </Card>
        </div>
        </Col>
        </Row>
        </div>
    </section>
  )
}

export default Productpage