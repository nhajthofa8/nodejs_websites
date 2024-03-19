import React from "react";
import { TypeProduct } from "../../components/TypeProduct/TypeProduct";
import { WrapperTyperProduct } from "./style";
import Slidercomponets from "../../components/Slidercomponents/Slidercomponets";
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.webp";
import { Cartcomponets } from "../../components/Cartcomponents/Cartcomponets";
const Homepage =()=>{
    const arr =['Bao Do', 'Bao Xanh' ,'Bao Thuc An']
    return(
        <>
        <div style={{ padding: '0 120px'}}>
        <WrapperTyperProduct>
        {arr.map((item) =>{
        return (
            <TypeProduct name = {item} key ={item}/>
        )   
        })}
             </WrapperTyperProduct>
         </div>
        <div id="container" style={{backgroundColor:'#efefef', padding:'0 120px', height:'1000px'}}>
        <Slidercomponets arrImages ={[banner1,banner2]}/>
        <div style={{marginTop: '20px', display:'flex' ,alignItems:'center',gap:'20px'}}>
            <Cartcomponets></Cartcomponets>
        </div>
        </div>
    </>
    )
}
export default Homepage