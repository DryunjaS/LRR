import Form from "react-bootstrap/Form"
import store from "../store/store"
import { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { createErrPSP } from "../function/createErrPSP"
import Decimation from "./Decimation"

const InputErr = () => {
	const [truePSP, setTruePSP] = useState<number[]>([...store.truePSP])
	const [errPSP, setErrPSP] = useState<number[][]>([])

	useEffect(() => {
		const n = parseInt(store.select.id[0])
		const arr = Array.from(
			{ length: n ? Math.pow(2, n) - 1 : 0 },
			(_, index) => index + 1
		)

		const newErrPSP = arr.map((item, index) =>
			createErrPSP(truePSP, arr, index)
		)
		console.log(newErrPSP)
		store.ErrPSP = newErrPSP
	}, [truePSP])

	useEffect(() => {
		setTruePSP(store.truePSP)
	}, [store.truePSP])

	return (
		<div className='app__item'>
			<Decimation />
		</div>
	)
}

export default observer(InputErr)
