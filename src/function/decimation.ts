export function decimation(output: number[], kVal: number) {
	const multiDec: number[][] = [] // массив для результатов децимации

	for (let k = 1; k <= kVal; k++) {
		for (let s = 0; s < k; s++) {
			const tmp: number[] = []

			for (let i = s; tmp.length < output.length; i += k) {
				if (i >= output.length) {
					i %= output.length
				}
				tmp.push(output[i])
			}

			multiDec.push(tmp)
		}
	}

	return multiDec // возвращаем массив результатов децимации
}
