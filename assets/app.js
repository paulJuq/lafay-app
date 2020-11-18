import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WorkoutManager from './js/components/WorkoutManager'; 

import Home from './js/components/Home'; 


import TestMax from './js/levels/TestMax'; 
import Niveau1Programme1 from './js/levels/Niveau1Programme1'
import Niveau1Programme2 from './js/levels/Niveau1Programme2'
import Niveau2 from './js/levels/Niveau2'

class App extends React.Component {

	render () {

		return (

			<Router>
				<React.Fragment>				
					<Switch>

						<Route path='/workout/test-max'>
					    	<WorkoutManager workout={TestMax}/>
						</Route>

						<Route path='/workout/niveau-1-premier-programme'>
					    	<WorkoutManager workout={Niveau1Programme1} />
						</Route>

						<Route path='/workout/niveau-1-deuxieme-programme'>
					    	<WorkoutManager workout={Niveau1Programme2} />
						</Route>

						<Route path='/workout/niveau-2'>
					    	<WorkoutManager workout={Niveau2} />
						</Route>

						<Route path='/workout'>
							<Home  />
						</Route>
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

ReactDOM.render( <App/>, document.getElementById('root'))