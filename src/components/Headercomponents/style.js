import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    align-items: center;
    /* Các điều chỉnh cho thiết bị di động */

`
export const WrapperTextHeader = styled.span`
    font-size: 30px;
    color: #fff;
    font-weight: 900;
    text-align: left;
    color: rgb(9,120,41);
    padding:10px 0px;
    text-transform:uppercase;
    grid-area:auto;

`
    

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: rgb(9,120,41);
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
`
export const WrapperTextHeaderSmall = styled.span`
        font-size: 12px;
        color: rgb(9,120,41);
        font-weight: 700;
        font-size: px;

`
export const WrapperTextHeaderIcon = styled.span`
        font-size:'30px';
        color: rgb(9,120,41);
        font-weight: 700;
`

