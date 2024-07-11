export const countRatio = (
	errArrPSP: number[][],
	truePSP: number[],
	zotValue: number,
	k: number,
	s: number
) => {
	let ratio = 0
	const trueDecPSP = decimation(truePSP, k, s)
	let count = 0

	for (let i = 0; i < errArrPSP.length; i++) {
		const errTmpPSP = decimation(errArrPSP[i], k, s)

		const isTruePSP = cheackIsTruePSP(errTmpPSP, trueDecPSP, zotValue)
		if (isTruePSP === true) {
			count++
		}
	}

	ratio = count / errArrPSP.length
	return ratio
}

function decimation(PSP: number[], k: number, s: number) {
	const tmp: number[] = []
	for (let i = s; tmp.length < 127; i += k) {
		if (i >= PSP.length) {
			i %= PSP.length
		}
		tmp.push(PSP[i])
	}
	return tmp
}
function cheackIsTruePSP(
	decErrPSP: number[],
	decTruePSP: number[],
	zotValue: number
) {
	let consecutiveMatches = 0
	let highlight = false

	for (let itemIndex = 0; itemIndex < decTruePSP.length; itemIndex++) {
		if (decErrPSP[itemIndex] === decTruePSP[itemIndex]) {
			consecutiveMatches++
			if (consecutiveMatches >= zotValue) {
				highlight = true
				break
			}
		} else {
			consecutiveMatches = 0
		}
	}

	return highlight ? true : false
}
