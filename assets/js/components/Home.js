import React from 'react'
import WorkoutManager from './WorkoutManager'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = {
	title : {
		textAlign: 'center', 
		textShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		marginTop: '2rem', 
	}, 

	levelList: {
		padding: '1rem', 
		listStyleType: 'none', 
	}, 

	level:{
		height: '56px',
		borderTop: 'solid 1px #423F55',
		display: 'flex', 
		alignItems: 'center', 
		cursor: 'pointer', 
	},

	link:{
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		color: 'white',
	} 


}

export default class Home extends React.Component{

	constructor(props){
		super(props)

		this.renderWorkout = this.renderWorkout.bind(this)
	}


	renderWorkout(){

		console.log('render')
		return(
			<WorkoutManager />
		)
	}


	render(){
		return(
			<React.Fragment>
				<h1 style={styles.title}>La Méthode Lafay</h1>

				<ul style={styles.levelList}>
					<li style={styles.level}>
						<Link style={styles.link} to='/workout/test-max'>Test d'effort maximum</Link>
					</li>
					<li style={styles.level}>
						<Link style={styles.link} to='/workout/niveau-1-premier-programme'>Niveau 1 - Premier Programme</Link>
					</li>
					<li style={styles.level}>
						<Link style={styles.link} to='/workout/niveau-1-deuxieme-programme'>Niveau 1 - Deuxième Programme</Link>
					</li>
					<li style={styles.level}>
						<Link style={styles.link} to='/workout/niveau-2'>Niveau 2</Link>
					</li>
					
				</ul>
			</React.Fragment>
		)
	}
}