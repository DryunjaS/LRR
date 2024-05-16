import { observer } from "mobx-react-lite"
import store from "../store/store"

const LRR: React.FC = () => {
	return (
		<div className='container'>
			<img src={`./images/${store.select.id}.png`} alt='' className='img-LRR' />
		</div>
	)
}

export default observer(LRR)
