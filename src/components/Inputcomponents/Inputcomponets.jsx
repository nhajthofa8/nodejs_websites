import React from 'react'
import { Input } from 'antd';

export const Inputcomponets = ({size, placeholder, bordered ,style,...rests}) => {
  return (
    <Input size={size}
        placeholder={placeholder}
        style={{ style}}
        {...rests}
    />
  )
}
