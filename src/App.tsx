import './App.css'
import { ActivityComponent } from './components/ActivityComponent/ActivityComponent'
import { AssetsComponent } from './components/AssetsComponent/AssetsComponent'
import { BuyComponent } from './components/BuyComponent/BuyComponent'
import { ProfileStats } from './components/ProfileStats/ProfileStats'
import { Statistics } from './components/Statistics/Statistics'

function App() {
	return (
		<>
			<div className='content'>
				<main>
					<AssetsComponent />
					<ActivityComponent />
					<Statistics />
				</main>
				<aside className='aside'>
					<ProfileStats />
					<BuyComponent />
				</aside>
			</div>
		</>
	)
}

export default App
