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
				</Switch>
			</LayoutRc>
		</Router>
	)
}

export default App
