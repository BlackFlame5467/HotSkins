import React from "react"
import styles from "./Btn.module.scss"

const Btn = ({ title, btnClass = styles.btn}) => {
	return <button className={`${btnClass} ${styles.btnHover}`}>{title}</button>
}

export default Btn
