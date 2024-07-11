import Decimation from "./components/Decimation"
import InputErr from "./components/InputErr"
import InputSeed from "./components/InputSeed"
import LRR from "./components/LRR"
import Polynomial from "./components/Polynomial"

function App() {
	return (
		<div className='app'>
			<Polynomial />
			<LRR />
			<InputSeed />
			<InputErr />
		</div>
	)
}

export default App
