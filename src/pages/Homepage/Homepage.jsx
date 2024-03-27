import React from "react";
import Slidercomponets from "../../components/Slidercomponents/Slidercomponets";
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.webp";
import { WrapperMenuHeader, WrapperNavHeader,WrapperItemHeader } from './style';
import { Footerpage } from "../Footerpage/Footerpage";
const Homepage =()=>{
    return(
        <>
    <WrapperMenuHeader>
        <WrapperNavHeader>
            <WrapperItemHeader >
                TRANG  CHỦ
            </WrapperItemHeader>
            <WrapperItemHeader >
                GIỚI THIỆU
            </WrapperItemHeader>
            <WrapperItemHeader >
                SẢN PHẨM
            </WrapperItemHeader>
            <WrapperItemHeader >
                BẢNG GIÁ
            </WrapperItemHeader>
            <WrapperItemHeader >
                CẨM MANG
            </WrapperItemHeader>
            <WrapperItemHeader >
                TIN TỨC
            </WrapperItemHeader>
            <WrapperItemHeader >
                lIÊN HỆ
            </WrapperItemHeader>
         </WrapperNavHeader>
    </WrapperMenuHeader>
        <div id="container" style={{backgroundColor:'#efefef', height:'auto', maxWidth:'100%'}}>
        <Slidercomponets arrImages ={[banner1,banner2]}/>
        <div style={{marginTop: '20px', display:'flex' ,alignItems:'center',gap:'20px'}}>
        </div>
        </div>
    <Footerpage></Footerpage>
    </>
    )
}
export default Homepage