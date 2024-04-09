
import React from 'react'
import { WrapperInputStyle } from './style'


export const InputFrom = (props) => {
    
    const {placeholder = "Nhập Text" , ...rests} = props;
    const handleOnchangeInput = (e) =>{
        props.onChange(e.target.value);
    }
  return (
    <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
  )
}

