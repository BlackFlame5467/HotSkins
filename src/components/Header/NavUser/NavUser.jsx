import React from "react"
import styles from "./NavUser.scss"
import Btn from "../../Btn/Btn"
import Select from "react-select"
import { useState } from "react"
import { Link } from "react-router-dom"

// import ru from "./../../../img/header/ru.svg"
// import en from "./../../../img/header/en.svg"
// import ukr from "./../../../img/header/ukr.svg"

const NavUser = () => {
	const options = [
		{
			value: "ru",
			label: "RU",
		},
		{
			value: "urk",
			label: "UKR",
		},
		{
			value: "en",
			label: "EN",
		},
	]
	const [currentValue, setValue] = useState("ru")

	const onChange = newValue => {
		setValue(newValue.value)
	}

	const getValue = () => {
		return currentValue ? options.find(v => v.value === currentValue) : ""
	}
	return (
		<div className="nav__user">
			<Select
				classNamePrefix="nav__select"
				options={options}
				isSearchable={false}
				value={getValue()}
				onChange={onChange}
			/>
			<Link to="login">
				<Btn title={"Войти"} />
			</Link>
		</div>
	)
}

export default NavUser
