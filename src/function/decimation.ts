export function decimation(output: number[], kVal: number) {
	const multiDec: number[][] = [] // массив для результатов децимации

	for (let k = 2; k < kVal; k++) {
		for (let s = 0; s < k; s++) {
			const PSP = [...output] // клон ПСП
			const dec: number[] = [] // массив для одной итерации децимации
			let i = s // индекс

			while (PSP.length) {
				// цикл децимации
				dec.push(PSP[i]) // добавляем символ в массив децимации
				PSP.splice(i, 1) // удаляем из рассматриваемой последовательности прошедший бит
				i += k - 1 // с учетом удаленного бита
				i %= PSP.length // в случае, если индекс > длины рассматриваемой последовательности
			}
			multiDec.push(dec) // добавляем результат децимации в массив результатов
		}
	}

	return multiDec // возвращаем массив результатов децимации
}
