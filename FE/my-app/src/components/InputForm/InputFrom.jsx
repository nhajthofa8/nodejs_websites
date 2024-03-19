
import React, { useState } from 'react'
import { WrapperInputStyle } from './style'


export const InputFrom = (props) => {
    const [valueInput, setValueInput] = useState('')
    const {placeholder = "Nhập Text" , ...rests} = props;
  return (
 
    <WrapperInputStyle placeholder={placeholder} valueInput={valueInput}{...rests} />
  )
}
