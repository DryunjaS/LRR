import store from "../store/store"
import { decimation } from "../function/decimation"
import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import { observer } from "mobx-react-lite"
import { createPairs } from "../function/createPairs"
import { highlightTrueBlocks } from "../function/cheackTrueBit"

const Decimation = () => {
	const [decTruePSP, setDecTruePSP] = useState<number[][]>([])
	const [decErrPSP, setDecErrPSP] = useState<number[][]>([])
	const [decK, setDecK] = useState<number[][]>([])

	useEffect(() => {
		const truePSP = [...store.truePSP]
		const ErrPSP = [...store.ErrPSP]

		const DecTrue = decimation(truePSP, 9)
		const DecErr = decimation(ErrPSP, 9)

		setDecTruePSP(DecTrue)
		setDecErrPSP(DecErr)

		const result = createPairs(8)
		setDecK(result)
	}, [store.truePSP, store.ErrPSP])

	return (
		<div className='app__item'>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ПСП с децимацией</th>
						<th>Коэффициент (k)</th>
						<th>Сдвиг (s)</th>
					</tr>
				</thead>
				<tbody>
					{decErrPSP.map((dec, decIndex) => (
						<tr key={decIndex}>
							<td>
								<div className='container-PSP'>
									{dec.map((item, itemIndex) => (
										<div
											className={`item ${
												item !== decTruePSP[decIndex][itemIndex]
													? "err"
													: highlightTrueBlocks(decErrPSP, decTruePSP, decIndex)
											}`}
											key={itemIndex}
										>
											{item}
										</div>
									))}
								</div>
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
