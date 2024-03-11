


import Notfoundpage from '../pages/Notfoundpage/Notfoundpage';
import Productpage from '../pages/Productpage/Productpage';
import Homepage from './../pages/Homepage/Homepage';
import Orderpage from './../pages/Orderpage/Orderpage';



export const routes =[
    {
        path:'/',
        page:Homepage,
        isShowHeader: true,

    },

    {
        path:'/order',
        page: Orderpage,
        isShowHeader: true,
    },
    
    {
        path:'/products',
        page: Productpage,
        isShowHeader: true,
     },

     {
        path:'*',
        page:Notfoundpage
     },
]