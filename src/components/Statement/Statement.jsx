import React from "react"
import styles from "./Statement.module.scss"
import Container from "./../Container/Container.jsx"
import Btn from "./../Btn/Btn.jsx"

import logo from "./../../img/statement/logo.png"
import Input from "../Input/Input.jsx"

const Statement = () => {
	return (
		<div className={styles.statement}>
			<Container style="container--1024">
				<div className={styles.statement__content}>
					<img src={logo} alt="" />
					<div className={styles.statement__form}>
						<h2 className={styles.statement__title}>Заявка на подключение</h2>
						<form className={styles.form}>
							<Input type={"text"} placeholder={"Ваше имя"} />
							<Input type={"email"} placeholder={"Ваш email"} />
							<Input type={"text"} placeholder={"Адрес сайта"} />
							<textarea
                                className={styles.form__textarea}
								placeholder="Ваши контакты (Телефон, Telegram, WhatsApp...)"
							></textarea>
							<Btn btnClass={styles.form__btn}title={"Отправить заявку"} />
						</form>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Statement
