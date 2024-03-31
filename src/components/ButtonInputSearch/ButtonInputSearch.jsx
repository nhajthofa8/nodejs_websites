import React from 'react'
import {
    SearchOutlined
  } from '@ant-design/icons'
import { Inputcomponets } from '../Inputcomponents/Inputcomponets';
import Buttoncomponents from '../Buttoncomponents/Buttoncomponents';
export const ButtonInputSearch = (props) => {
    const { size, 
        placeholder,
        textButton,
        bordered,
        backgroundColorInput ='#fff'
        ,backgroundColorButton ='rgb(9, 120, 41)',
        colorButton = '#fff',
        
        
    } = props
  return (
    <div style={{display:'flex',padding:'15px' }}>
    <Inputcomponets
        size={size}
        placeholder={placeholder}
        bordered= {bordered}
        style={{ background:backgroundColorInput}}/>
    <Buttoncomponents
        size={size} 
        styleButton={{background:backgroundColorButton, color: colorButton,bordered : !bordered && 'none' }} 
        icon={<SearchOutlined color={colorButton} style={{color:'#fff'}}/>}
        textButton={textButton}
        styleTextButton = {{color: colorButton}}
    />
    </div>
  )
}
