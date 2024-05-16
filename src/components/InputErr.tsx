import Form from "react-bootstrap/Form"
import store from "../store/store"
import { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { createErrPSP } from "../function/createErrPSP"
import Decimation from "./Decimation"
import { highlightTrueBlocks } from "../function/cheackTrueBit"

const InputErr = () => {
	const [arr, setArr] = useState<number[]>([])
	const [truePSP, setTruePSP] = useState<number[]>([])
	const [errPSP, setErrPSP] = useState<number[]>([])
	const [selectedValue, setSelectedValue] = useState<number>()

	useEffect(() => {
		const n = parseInt(store.select.id[0])
		const arr = Array.from(
			{ length: n ? Math.pow(2, n) - 1 : 0 },
			(_, index) => index + 1
		)
		setArr(arr)
		const errArr = createErrPSP(truePSP, arr, selectedValue)
		setErrPSP(errArr)
		store.ErrPSP = errArr
	}, [store.select.id, selectedValue, truePSP])
	useEffect(() => {
		setTruePSP(store.truePSP)
	}, [store.truePSP])

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value
		setSelectedValue(parseInt(value))
	}
	return (
		<div className='app__item'>
			<Form.Label htmlFor='basic-seed' className='title'>
				Выберите количество ошибок
			</Form.Label>
			<Form.Select
				aria-label='Default select example'
				onChange={handleSelectChange}
			>
				<option value={0} key={0}>
					0
				</option>
				{arr.map((el) => (
					<option value={el} key={el}>
						{el}
					</option>
				))}
			</Form.Select>
			<Form.Label htmlFor='basic-seed'>
				Последовательность с ошибками
			</Form.Label>
			<div className='container-PSP'>
				{errPSP.map((item, index) => (
					<div
						className={`item ${
							item !== truePSP[index]
								? "err"
								: highlightTrueBlocks([[...errPSP]], [[...truePSP]], 0)
						}`}
						key={index}
					>
						{item}
					</div>
				))}
			</div>
			<Decimation />
		</div>
	)
}

export default observer(InputErr)
