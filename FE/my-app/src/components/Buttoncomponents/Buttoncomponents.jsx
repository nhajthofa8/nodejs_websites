import React from 'react'
import { Button } from 'antd';

const Buttoncomponents = ({size, styleButton,styleTextButton, textButton,...rest}) => {
  return (
    <Button
    size={size} 
    style={styleButton}
    //icon={<SearchOutlined/>}>{textButton} style={{color:colorButton}}
    {...rest}
    >
        <span style={styleTextButton}>{textButton}</span>
 </Button>

  )
}

export default Buttoncomponents