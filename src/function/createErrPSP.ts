import { shuffle } from "./shuffle"

export function createErrPSP(
	truePSP: number[],
	errArr: number[],
	selectedValue: number | undefined
) {
	const errPSP: number[] = []

	const shuffledArray = shuffle([...errArr])
	const modifiedArray = shuffledArray.map((item) => item - 1)
	const randomErr = modifiedArray.slice(0, selectedValue)
	randomErr.sort((a, b) => a - b)

	let j = 0
	for (let i = 0; i < truePSP.length; i++) {
		if (i === randomErr[j]) {
			if (truePSP[i] === 1) {
				errPSP.push(0)
			} else {
				errPSP.push(1)
			}
			j++
		} else {
			errPSP.push(truePSP[i])
		}
	}
	return errPSP
}
