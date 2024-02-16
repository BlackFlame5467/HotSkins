import React from 'react'
import styles from './Input.module.scss'

const Input = ({type, placeholder}) => {
   return (
        <input type={type}  placeholder={placeholder} className={styles.input}/>
)}

export default Input