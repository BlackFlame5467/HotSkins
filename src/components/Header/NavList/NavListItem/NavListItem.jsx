import React from 'react'
import styles from './NavListItem.module.scss'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavListItem = ({item}) => {
   return (
        <li>
            <Link to={item.url} className={styles.nav__link}>{item.title}</Link>
        </li>
)}

export default NavListItem