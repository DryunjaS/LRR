import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import store from "../store/store"
import { observer } from "mobx-react-lite"

const Polynomial = () => {
	const [selectedValue, setSelectedValue] = useState("")

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value)
		store.setSelect(event.target.value)
	}
	return (
		<div className='app__item'>
			<Form.Label htmlFor='basic-seed' className='title'>
				Выберите полином
			</Form.Label>

			<Form.Select
				id='polynomialSelect'
				aria-labelledby='polynomialSelectLabel'
				onChange={handleSelectChange}
				value={selectedValue}
			>
				{store.polynom.map((option) => (
					<option key={option.id} value={option.id}>
						{option.label}
					</option>
				))}
			</Form.Select>
		</div>
	)
}

export default observer(Polynomial)
