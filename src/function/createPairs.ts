export function createPairs(n: number) {
	const pairs = []
	for (let i = 2; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			pairs.push([i, j])
		}
	}
	return pairs
}