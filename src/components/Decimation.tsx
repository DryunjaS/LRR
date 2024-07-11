import store from "../store/store"
import { decimation } from "../function/decimation"
import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import { observer } from "mobx-react-lite"
import { createPairs } from "../function/createPairs"
import { countRatio } from "../function/countRatio"

const Decimation = () => {
	const [decK, setDecK] = useState<number[][]>([])

	useEffect(() => {
		const result = createPairs(12)
		setDecK(result)
	}, [store.truePSP])

	return (
		<div className='app__item'>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Коэффициент распознавания</th>
						<th>Коэффициент (k)</th>
						<th>Сдвиг (s)</th>
					</tr>
				</thead>
				<tbody>
					{decK.map((dec, decIndex) => (
						<tr key={decIndex}>
							<td>
								{countRatio(
									store.ErrPSP,
									store.truePSP,
									store.zotValue,
									decK[decIndex][0],
									decK[decIndex][1]
								)}
							</td>
							<td>{decK[decIndex][0]}</td>
							<td>{decK[decIndex][1]}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default observer(Decimation)
