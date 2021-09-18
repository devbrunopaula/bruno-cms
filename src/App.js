import './App.scss'
import LayoutRc from './components/Layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../src/components/Home'
function App() {
	return (
		<Router>
			<LayoutRc>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/create-page'>
						<Test />
					</Route>
				</Switch>
			</LayoutRc>
		</Router>
	)
}

export default App

const Test = () => {
	return <div>Test</div>
}
