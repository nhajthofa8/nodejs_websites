import React from 'react'
import { Button } from 'antd';

const Buttoncomponents = ({size, styleButton,styleTextButton, textButton,disabled,...rest}) => {
  return (
    <Button
  
    style={{...styleButton,
    
    background: disabled ?'#ccc' :styleButton.background
    }}
    //icon={<SearchOutlined/>}>{textButton} style={{color:colorButton}}
    size={size} 
    {...rest}

    >
        <span style={styleTextButton}>{textButton}</span>
 </Button>

  )
}

export default Buttoncomponents