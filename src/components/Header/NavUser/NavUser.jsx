import React from "react"
import styles from "./NavUser.scss"
import Btn from "../../Btn/Btn"
import Select from "react-select"
import { useState } from "react"
import { components } from "react-select"

import ru from "./../../../img/header/ru.svg"
import en from "./../../../img/header/en.svg"
import ukr from "./../../../img/header/ukr.svg"

const options = [
	{
		value: "ru",
		label: "RU",
		image: { ru },
	},
	{
		value: "urk",
		label: "UKR",
		image: { ukr },
	},
	{
		value: "en",
		label: "EN",
		image: { en },
	},
]

const NavUser = () => {
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
			<Btn title={"Войти"} />
		</div>
	)
}

export default NavUser
