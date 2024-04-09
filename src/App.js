/* eslint-disable no-undef */
//import {useQuery} from '@tanstack/react-query'
import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routes} from './routes'
//import axios from 'axios';
import Defaultcomponents from './components/Defaultcomponents/Defaultcomponents';

function App() {
  
  return (
    <div>
     <Router>
      <Routes>
        {routes.map((route) => {
            const Page =route.page
            const Layout = route.isShowHeader ? Defaultcomponents: Fragment
            return (
              <Route key ={route.path} path={route.path} element = {
             <Layout>   
                <Page/>
            </Layout>
            }/>
          )
        })}
      </Routes>
   </Router>
    </div>
  )
}

export default App