import React from 'react'
import styles from './NavListItem.module.scss'

const NavListItem = ({item}) => {
   return (
        <li>
            <a href="/" className={styles.nav__link}>{item.title}</a>
        </li>
)}

export default NavListItem