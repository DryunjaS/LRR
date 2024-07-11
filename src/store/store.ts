import { observable } from "mobx"

const store = observable({
	select: { id: "7001", label: "x^7 + x + 1", dot: [1, 0, 0, 0, 0, 1, 1] },
	truePSP: [0],
	ErrPSP: [[]],
	zotValue: 0,
	polynom: [{ id: "7001", label: "x^7 + x + 1", dot: [1, 0, 0, 0, 0, 1, 1] }],
	getPolynomById(id: string) {
		return this.polynom.find((item) => item.id === id)
	},
	setSelect(id: string) {
		const selectedPolynom = this.getPolynomById(id)

		if (selectedPolynom) {
			this.select = selectedPolynom
		}
	},
	setZotValue(newValue) {
		this.zotValue = newValue
	},
})

export default store
