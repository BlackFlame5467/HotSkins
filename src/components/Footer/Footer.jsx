import React from 'react'
import styles from './Footer.module.scss'
import  Container  from '../Container/Container'
import FooterList from './FooterList/FooterList'

const Footer = () => {
   return (
    <footer className={styles.footer}>
        <Container>
            <div className={styles.footer__content}>
                <p className={styles.footer__text}>Copyright © Skincash.ru</p>
                <FooterList />
            </div>
        </Container>
    </footer>
)}

export default Footer