import { observable } from "mobx"

const store = observable({
	select: {
		id: "3001",
		label: "x³ + x + 1",
		dot: [1011],
	},
	truePSP: [0],
	ErrPSP: [0],
	polynom: [
		{ id: "3001", label: "x³ + x + 1", dot: [1, 0, 1, 1] },
		{ id: "3002", label: "x³ + x² + 1", dot: [1, 1, 0, 1] },
		{ id: "4001", label: "x⁴ + x² + 1", dot: [1, 0, 0, 1, 1] },
		{ id: "4002", label: "x⁴ + x³ + 1", dot: [1, 1, 0, 0, 1] },
		{ id: "4003", label: "x⁴ + x³ + x² + x + 1", dot: [1, 1, 1, 1, 1] },
		{ id: "5001", label: "x⁵ + x² + 1", dot: [1, 0, 0, 1, 0, 1] },
		{ id: "5002", label: "x⁵ + x³ + 1", dot: [1, 0, 1, 0, 0, 1] },
		{ id: "5003", label: "x⁵ + x³ + x² + x + 1", dot: [1, 0, 1, 1, 1, 1] },
		{ id: "6001", label: "x⁶ + x² + 1", dot: [1, 0, 0, 0, 1, 1] },
		{ id: "6002", label: "x⁶ + x³ + 1", dot: [1, 0, 0, 1, 0, 0, 1] },
	],
	getPolynomById(id: string) {
		return this.polynom.find((item) => item.id === id)
	},
	setSelect(id: string) {
		const selectedPolynom = this.getPolynomById(id)

		if (selectedPolynom) {
			this.select = selectedPolynom
		}
	},
})

export default store
