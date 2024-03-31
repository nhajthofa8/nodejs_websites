import React, { useState } from 'react';
import { Row,Col,Form, Input, Button,Image } from 'antd';
import {WrapperContact} from'./style.js';
const Contactpage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Ở đây bạn có thể thực hiện xử lý gửi dữ liệu đi
    console.log('Submitted values:', values);
    setLoading(false);
  };

  return (
   < WrapperContact>
    <section >
    <Row>
      <Col span={24}>
        <div className='col-inner text-center' style={{textAlgin:'center'}}>
        <h2 style={{textAlign: 'center'}}>
            <span style={{fontFamily: 'UVN Bai Sau',fontSize: '120%'}}>Liên Hệ</span>
        </h2>
        <p style={{textAlign:' center'}}>
        <Image  
        style={{display:'block'}}
        src="https://sfarm.vn/wp-content/uploads/2021/12/Icon-Didver1.webp"  width="275" height="41"/>
        </p>
        </div>
    </Col>
    </Row>
    <Row>
    <div className='col-inner algin-center' >
    <Form style={{float:'rigt'}} form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="fullName"
        label="Họ và Tên"
        rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Số điện thoại"
        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="note" label="Ghi chú">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Gửi
        </Button>
      </Form.Item>
    </Form>
    </div>
    </Row>
    
    </section>
    </WrapperContact>
  );
};

export default  Contactpage;
