import React from "react"
import styles from "./FooterList.module.scss"
import FooterListItem from "./FooterListItem/FooterListItem"

const footerList = [
	{
		_id: "1",
		title: "Помощь",
	},
	{
		_id: "2",
		title: "Контакты",
	},
	{
		_id: "3",
		title: "Пользовательское соглашение",
	},
]

const FooterList = () => {
	return (
    <ul className={styles.footer__list}>
        {
        footerList.map(item => <FooterListItem title={item.title}/>)
        }
    </ul>
)}

export default FooterList
