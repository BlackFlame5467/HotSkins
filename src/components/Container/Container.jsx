import React from "react"
import styles from "./Container.module.scss"

const Container = ({ children, style = styles.container }) => {
	return <div className={`${style}`}>{children}</div>
}

export default Container
