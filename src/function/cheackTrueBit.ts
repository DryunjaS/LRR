export const highlightTrueBlocks = (
	decErrPSP: number[][],
	decTruePSP: number[][],
	decIndex: number
) => {
	let consecutiveMatches = 0
	let highlight = false

	for (
		let itemIndex = 0;
		itemIndex < decTruePSP[decIndex].length;
		itemIndex++
	) {
		if (decErrPSP[decIndex][itemIndex] === decTruePSP[decIndex][itemIndex]) {
			consecutiveMatches++
			if (consecutiveMatches >= decTruePSP[decIndex].length / 4) {
				highlight = true
				break
			}
		} else {
			consecutiveMatches = 0
		}
	}

	return highlight ? "true" : ""
}
