
import { styled } from 'styled-components';
import { Card } from 'antd';

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{

        height: 200px;
        width: 200px;
    }

`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61);
`
export const WrapperReportText = styled.div`
    font-size:11px;
    color:rgba(128,128,137);
    display: flex;
    align-items: center;
`
export const WrapperPriceText = styled.div`
    color:rgba(255,66,78);
    font-size:16px;
    font-family: 500;

`

export const WrapperPriceDiscountText = styled.div`
        color:rgba(255,66,78);
        font-size: 16px;
        font-weight: 500;

`