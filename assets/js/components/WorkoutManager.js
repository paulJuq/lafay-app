import React from 'react'
import PreviewUI from './PreviewUI'
import WorkoutUI from './WorkoutUI'
import RestUI from './RestUI'
import ResumeUI from './ResumeUI'
import Stopwatch from './Stopwatch'

import LevelBuilder from '../levels/LevelBuilder'; 

const styles = {
	navigation: {
		display: 'flex',
		justifyContent: 'space-between', 
		alignItems: 'center', 
	},
	title: {
		paddingLeft: '8px', 
	},
	btnNext : {
		background : '#423F55', 
		fontSize: '18px', 
		gridColumn: '2 / span 3', 
		justifySelf: 'center', 
		padding: '8px 16px', 
		textTransform: 'uppercase', 
		marginTop: '3rem', 
		cursor: 'pointer', 

	},
}

export default class WorkoutManager extends React.Component{

	constructor(props) {
		super(props)

		this.state = {
			stopwatch: 0, 
			currentState: 'preview', 
			currentRound: 0, //round de la série en cours
			error: null, 
			isLoaded: false, 
		}

		this.incrementReps = this.incrementReps.bind(this)
		this.decrementReps = this.decrementReps.bind(this)
		this.guessNextExercice = this.guessNextExercice.bind(this)
		this.updateWorkoutTime = this.updateWorkoutTime.bind(this)
		this.startWorkout = this.startWorkout.bind(this)
		this.nextExercice = this.nextExercice.bind(this)
		this.setRestState = this.setRestState.bind(this)
	}

	componentDidMount(){
		fetch("https://127.0.0.1:8000/api/users/1")
		.then(res => res.json())
		.then(
			(result) => {

				const workout = new LevelBuilder(result.workoutSessions, this.props.workout).getLastSession(); 

				this.setState({
					isLoaded: true, 
					workout: workout,
				});
			}, 
			(error) => {
				this.setState({
					isLoaded: true, 
					error: error,
				});
			}
		)
	}


	setRestState(){
		this.setState({currentState: 'rest'})
	}


	updateWorkoutTime(){
		this.setState((s)=>({stopwatch: s.stopwatch+1}))
	}

	nextExercice(){

		if(this.state.currentRound + 1 < Object.keys(this.props.workout.exercices).length){
			this.setState((prevState) => ({currentRound: prevState.currentRound + 1, currentState:'workout'}))
		}else{
			this.setState({currentState: 'resume'})
		}
	}


	startWorkout(){
		this.setState({currentState : 'workout'})
	}


	incrementReps(){
		const workout = this.state.workout; 
		workout.exercices[this.state.currentRound].sessionScore += 1;
		this.setState({workout: workout} ); 
	}


	decrementReps(){

		const workout = this.state.workout

		if(workout.exercices[this.state.currentRound].sessionScore > 0){
			workout.exercices[this.state.currentRound].sessionScore -= 1
			this.setState({workout: workout} )
		}

	}


	guessNextExercice(){

		if(this.state.currentRound + 1 < Object.keys(this.props.workout.exercices).length ){
			const round = this.state.currentRound + 1 ; 
			return this.props.workout.exercices[round].movement.name; 
		}else{
			return 'Fin du workout'
		}
	}

	renderNavigation(){
		if(this.state.currentState !== 'resume' && this.state.currentState !== 'preview') {
			return (
				<nav style={styles.navigation}>
					<div style={styles.title}>{this.state.workout.workoutInfos.title}</div>
					<Stopwatch
						timeUpdate = {() => this.updateWorkoutTime()}
					/>
				</nav>
			)
		}
	}


	renderPreviewUI(){
		if(this.state.currentState === 'preview') {
			return (
				<PreviewUI 
					workout={this.state.workout}
					startWorkout={this.startWorkout}
				/>

			)
		}
	}

	renderWorkoutUI(){

		const workout = this.state.workout.exercices[this.state.currentRound]
		
		if (this.state.currentState === 'workout'){	
			return (
				<WorkoutUI
					workout = {workout}
					setRestState = {this.setRestState}
				/>
			)
		}
	}

	renderRestUI(){

		const workout = this.state.workout.exercices[this.state.currentRound]
		const nextExercice = this.guessNextExercice()

		if (this.state.currentState === 'rest'){
			return (
				<RestUI
					workout={workout}
					nextExercice={nextExercice}
					incrementReps = {this.incrementReps}
					decrementReps = {this.decrementReps}
					functionNext = {this.nextExercice}
				/>
			)
		}	
	}

	renderResumeUI(){

		if (this.state.currentState === 'resume'){
			return (
				<ResumeUI 
					workoutTotalTime = {this.state.stopwatch}
					workout = {this.state.workout}
				/>
			)
		}
	}

	render(){
		if(!this.state.isLoaded){
			return null; 
		}
		return (
			<React.Fragment>

				{this.renderNavigation()}

				<section className="content">
					{this.renderPreviewUI()}
					{this.renderWorkoutUI()}
					{this.renderRestUI()}
					{this.renderResumeUI()}
				</section>

			</React.Fragment>

		)
	}

}



