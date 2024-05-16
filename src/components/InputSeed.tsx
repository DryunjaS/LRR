import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import store from "../store/store"
import { observer } from "mobx-react-lite"
import { outputPSP } from "../function/outputPSP"

const InputSeed = () => {
	const [length, setLength] = useState(0)
	const [input, setInput] = useState("")
	const [valuePSP, setValuePSP] = useState<number[]>([])

	useEffect(() => {
		const n = parseInt(store.select.id[0])
		setLength(n)
		const formatInput = input
			.split(" ")
			.join("")
			.slice(0, n)
			.split("")
			.join(" ")
		setInput(formatInput)
	}, [store.select.id])

	useEffect(() => {
		const seed = input.split(" ").map((char) => parseInt(char, 2)) //начальное значение
		const output = outputPSP(seed, store.select.dot) //полученая ПСП

		setValuePSP(output)
		store.truePSP = output
	}, [input, store.select.dot])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value.replace(/\s/g, "")
		const filteredInput = inputValue.replace(/[^01]/g, "")
		const formatInput = filteredInput.slice(0, length).split("").join(" ")
		setInput(formatInput)
	}

	return (
		<div className='app__item'>
			<Form.Label htmlFor='basic-seed' className='title'>
				Введите начальное заполнение
			</Form.Label>
			<InputGroup className='mb-3'>
				<Form.Control
					id='basic-seed'
					onChange={handleInputChange}
					value={input}
				/>
			</InputGroup>
			<Form.Label htmlFor='basic-PSP' className='title'>
				Рассчитанная ПСП
			</Form.Label>
			<div className='container-PSP'>
				{valuePSP.map((item) => (
					<div className='item'>{item}</div>
				))}
			</div>
		</div>
	)
}

export default observer(InputSeed)
