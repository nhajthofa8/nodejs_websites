import React from 'react'
import { Col, Image,Row  } from 'antd';
import imageProduct from '../../assets/images/bao-dog.webp'
import imageProductSmall from '../../assets/images/bao-do-small.webp'
import {EyeOutlined,PlusOutlined,MinusOutlined } from '@ant-design/icons'
import {WrapperQualityProduct,WrapperAddressProduct,WrapperTextProduct ,WrapperStyleImageSmall,WrapperStyleImageCol,WrapperStyleNameProduct, WrapperStyleTextSell,WrapperPriceProduct, WrapperInputNumber } from './style';
import Buttoncomponents from './../Buttoncomponents/Buttoncomponents';
export const ProductDetailscomponents = () => {
    const onChange =() => {}
  return (
   <Row style={{padding: '16px',background:'#fff',borderRadius:'4px'}}>
        <Col span={10}>
            <Image src={imageProduct} alt ="image product" preview={false}/>
            <Row style={{paddingTop:'16px', justifyContent:'space-between'}}>
                <WrapperStyleImageCol span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt ="image small" preview={false}/>
                </WrapperStyleImageCol>
                <WrapperStyleImageCol span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt ="image small" preview={false}/>
                </WrapperStyleImageCol>
                <WrapperStyleImageCol span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt ="image small" preview={false}/>
                </WrapperStyleImageCol>
                <WrapperStyleImageCol span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt ="image small" preview={false}/>
                </WrapperStyleImageCol>
                <WrapperStyleImageCol span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt ="image small" preview={false}/>
                </WrapperStyleImageCol>
             </Row>
        </Col>
    <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>Bao Mụn Dừa Đỏ</WrapperStyleNameProduct>
        <div>
                <EyeOutlined style={{fontSize:'12px' }}/>
                
               <WrapperStyleTextSell> 2000+ Lượt Xem</WrapperStyleTextSell>
        </div>       
               <WrapperPriceProduct>
                    <WrapperTextProduct>200.000</WrapperTextProduct>
               </WrapperPriceProduct>
               <WrapperAddressProduct>
                    <span>Giao Đến </span>
                    <span className='address'>Quận 9</span>
                    <span className='change-address'>--Đổi Địa Chỉ</span>
               </WrapperAddressProduct>
               <div style={{margin: '10px 0 20px',padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e'}}>
                <div style={{marginBottom:'6px'}}>số Lượng</div>
                <WrapperQualityProduct>
                <button style={{border : 'none', background:'transparent'}}>             
                        <MinusOutlined style ={{color:'#000', fontSize:'20px',}}  />
                </button>
                        <WrapperInputNumber size='small' defaultValue ={1} onChange ={onChange}/>
                <button style={{border : 'none', background:'transparent'}}>      
                        <PlusOutlined style ={{color:'#000', fontSize:'20px',}}/>
                </button>
                </WrapperQualityProduct>
               </div>
            <div style={{ display:'flex', alignItems:'center',gap:'12px'}}>
            <Buttoncomponents
                    size ={40}
                    style ={{ 
                            background: 'rgb(255,57,69)',
                            height:'48px',
                            width:'220px',
                            border:'none',
                            borderRadius:'4px'
                    }}
                    textButton={'Chon Mua'}
                    styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
               >
               </Buttoncomponents>
               <Buttoncomponents       
                    size ={40}
                    style ={{ 
                            background: '#fff',
                            height:'48px',
                            width:'220px',
                            border:'1px solid rgb(13,92,182)',
                            borderRadius:'4px'
                    }}
                    textButton={'Mua Tra Sau'}
                    styleTextButton={{color:'rgb(13,92,182',fontSize:'15px'}}
               >
               </Buttoncomponents>
            </div>
    </Col>
   </Row>
  )
}
