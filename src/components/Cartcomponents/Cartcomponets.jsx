import React from 'react'
import { StyleNameProduct, WrapperPriceText, WrapperReportText, WrapperCardStyle } from './style';
export const Cartcomponets = () => {
  return (
    <WrapperCardStyle
    style={{width:240}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>ABC</StyleNameProduct>
    <WrapperReportText>
        dsadsadas
    </WrapperReportText>
    <WrapperPriceText>
        1000000
    </WrapperPriceText>
  </WrapperCardStyle>
  )
}
