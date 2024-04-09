import React,{useState} from 'react';
import { Row, Image, Col} from 'antd';
import {WrapperContact} from'./style.js';
import { InputFrom } from '../../components/InputForm/InputFrom.jsx';
import Buttoncomponents from './../../components/Buttoncomponents/Buttoncomponents';
const Contactpage = () => {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [contents,setContent] = useState('');

  const handleOneChangeName =(value)=>{
    setName(value);
}

const handleOneChangePhone =(value)=>{
   setPhone(value);
}
const handleOneChangeAddress =(value)=>{
  setAddress(value);
}

const handleOneChangeContents = (value)=>{
  setContent(value);
}
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
    </Row >
    <Row style={{alignItems:'center',justifyContent:'center', marginBottom:'100px'}}>
    <div className=''style={{background:'rgb(9,120,41)',width:'500px',display:'block'}} >
      <div style={{marginTop:'50px',marginLeft:'10px',marginBottom:'50px', marginRight:'10px'}}>
      <InputFrom
      style={{fontFamily:'Roboto',height:'40px',alignItems:'center',justifyContent:'center',lineHeight:'24px',fontSize:'15px',margin:'0px 0px 15.52px' ,display:'inline-block',boxShadow:' rgb(204 204 204) 0px 0px 5px 0px'}}
       placeholder="Họ và Tên"
       value={name} 
       onChange={handleOneChangeName} />
      <InputFrom
      style={{fontFamily:'Roboto',height:'40px',padding:'0px 11.6px',lineHeight:'24px',fontSize:'15px',margin:'0px 0px 15.52px' ,display:'inline-block',boxShadow:' rgb(204 204 204) 0px 0px 5px 0px'}}
            placeholder="phone"
            value={phone}
            onChange={handleOneChangePhone}
      />
          <InputFrom
          style={{fontFamily:'Roboto',height:'40px',padding:'0px 11.6px',lineHeight:'24px',fontSize:'15px',margin:'0px 0px 15.52px' ,display:'inline-block',boxShadow:' rgb(204 204 204) 0px 0px 5px 0px'}}
        
              placeholder="Địa Chỉ"
              value={address}
              onChange={handleOneChangeAddress}
            />

            <InputFrom
            style={{fontFamily:'Roboto',height:'120px',padding:'0px 11.6px',lineHeight:'24px',fontSize:'15px',margin:'0px 0px 15.52px' ,display:'inline-block',boxShadow:' rgb(204 204 204) 0px 0px 5px 0px'}}
                  placeholder="Nội Dung..."
                  value={contents}
                  onChange={handleOneChangeContents}
                  size={40}
            />
  
          <Buttoncomponents
            disabled={!name.length || !phone.length || !address.length || !contents.length}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              fontFamily:'Roboto',
              border: 'none',
              borderRadius: '4px',
            }}
            textButton={'Liên Hệ'}
            styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
          ></Buttoncomponents>
         </div>
      </div>
    </Row>
    </section>
    </WrapperContact>
  );
};

export default  Contactpage;
