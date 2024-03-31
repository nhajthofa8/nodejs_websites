import React, { useState } from 'react'
import {Menu,Drawer} from 'antd';
import './style.css';
import {  
    MenuFoldOutlined
  } from '@ant-design/icons';
  
function Appp(){
    const [openMenu, setOpenMenu]=useState(false)
    return (
    <div>
        <div style={{
            paddingLeft:'12',
            paddingTop:'12',
            height:'60'}}
            className='menuIcon'
        >
    <MenuFoldOutlined style={{color:'white', fontSize:'30'}} onClick={()=>{
        setOpenMenu(true);
    }}/>
</div>
        <span className='headerMenu'>
        <AppMenu></AppMenu>
        </span>
            <Drawer 
            placement ='left'
            open ={openMenu}
            onClose ={()=>
            {
                setOpenMenu(false);
            }}
            closable={false} bodyStyle>

        <AppMenu></AppMenu>
        </Drawer>
        </div>



    )

}

function AppMenu ({isInline=false}) {
    return (
    <div>
        <Menu>
            mode ={isInline?"inline":'horizontal'}
            items ={[
                { label: 'Home',
                    key:'home'
                },
                { label: 'Home',
                key:'home'
                },
                { label: 'Home',
                key:'home'
                }, 
                { label: 'Home',
                key:'home'
                },   

            ]}
        </Menu>
    </div>
  )
}

export default Appp;