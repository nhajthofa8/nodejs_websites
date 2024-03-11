import React from 'react'
import { Input,Button } from 'antd';
import {
    SearchOutlined
  } from '@ant-design/icons'
export const ButtonInputSearch = (props) => {
    const { size, 
        placeholder,
        textButton,
        bordered,
        backgroundColorInput ='#fff'
        ,backgroundColorButton ='rgb(13, 92, 182)',
        colorButton = '#fff',
    } = props
  return (
    <div style={{display:'flex'}}>
    <Input size={size}
    placeholder={placeholder}
    bordered= {bordered}
    style={{ background:backgroundColorInput}}/>
    <Button
     size={size} 
     style={{background:backgroundColorButton, color: colorButton,bordered : !bordered && 'none' }} 
     icon={<SearchOutlined/>}>{textButton} style={{color:colorButton}}
     </Button>
     <span style={{color:colorButton}}>{textButton}</span>
    </div>
  
  )
}
