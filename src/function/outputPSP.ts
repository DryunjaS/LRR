export function outputPSP(seed: number[], dot: number[]) {
	const output = []
	for (let j = 0; j < Math.pow(2, seed.length) - 1; j++) {
		// цикл по длине ПСП
		let sum = 0 // сумма выходов обратной связи

		for (let i = dot.length - 1; i > 0; i--) {
			// цикл по массиву обратной связи
			if (dot[i] === 1) {
				sum += seed[i - 1]
			}
		}
		sum %= 2 // потому что сумма по модуою два
		seed.unshift(sum) // довабляю в начало ПСП результат обратной связи
		output.push(seed[seed.length - 1]) // записываю выходной бит
		seed.pop() // сохраняю размер последовательности
	}
	return output
}
