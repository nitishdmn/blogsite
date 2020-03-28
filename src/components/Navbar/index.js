import React ,{useState} from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Navbar
**/
const Navbar = (props) => {
    const [search , setSearch] = useState(false);
    const submitSearch = (e) =>
    {
        e.preventDefault();
        alert("qwerty");
    }
    const openSearch = ()=>{
         setSearch(true);
    }
    const searchClass = search ?'searchInput active':'searchInput';
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">AboutUs</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/contact-us">ContactUs</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
               <input type="text" className ={searchClass} placeholder=" Search"/>
               <img onClick={openSearch} className = "searchIcon" src={require('../../assets/icons/Search.png')} alt="Search"></img>
            </form>
        </div>
    </div>
   )
 }

export default Navbar