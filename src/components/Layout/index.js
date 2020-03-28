import React from 'react';
import './style.css';
import Sidebar from '../SideBar';
import Post from '../../containers/Post';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
        
    </div>
    <div className="footer">
        <h1>THIS IS FOOTER FOR ALL PAGES</h1>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout