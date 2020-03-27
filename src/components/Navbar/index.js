import React ,{useState} from 'react';
import './style.css';
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
            <li><a href="#">Home</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">ContactUs</a></li>
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