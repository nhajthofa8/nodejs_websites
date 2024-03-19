


import Notfoundpage from '../pages/Notfoundpage/Notfoundpage';
import { ProductDetailspage } from '../pages/ProductDetailspage/ProductDetailspage';
import Homepage from './../pages/Homepage/Homepage';
import Orderpage from './../pages/Orderpage/Orderpage';
import { SignInPage } from './../pages/SignInPage/SignInPage';
import { SignUpPage } from './../pages/SignUpPage/SignUpPage';



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
        path:'/products-details',
        page: ProductDetailspage,
        isShowHeader: true,
     },
     {
        path:'/sign-in',
        page: SignInPage,
        isShowHeader: false,
     },
 {
        path:'/sign-up',
        page: SignUpPage,
        isShowHeader: false,
     },
    
     {
        path:'*',
        page:Notfoundpage
     },
]