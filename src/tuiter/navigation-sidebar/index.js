import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUser, FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = [
   { name: "home", icon: <FaHome /> }, 
   { name: "explore", icon: <FaSearch /> },
   { name: "notifications", icon: <FaBell /> },
   { name: "messages", icon: <FaEnvelope /> },
   { name: "bookmarks", icon: <FaBookmark /> },
   { name: "lists", icon: <FaListAlt /> },
   { name: "profile", icon: <FaUser /> },
   { name: "more", icon: <FaEllipsisH /> }
 ];
 return (
   <div className="list-group">
     {links.map((link) => 
         <Link to={`/tuiter/${link.name}`} className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
           {link.icon} {link.name}
         </Link>
     )}
     {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
     { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}

   </div>
 );
};
export default NavigationSidebar;
