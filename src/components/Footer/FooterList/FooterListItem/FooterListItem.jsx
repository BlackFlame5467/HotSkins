import React from 'react'
import styles from './FooterListItem.module.scss'


const FooterListItem = ({title}) => {
   return (
    <li>
        <a href="/" className={styles.footer__link}>{title}</a>
    </li>
)}

export default FooterListItem