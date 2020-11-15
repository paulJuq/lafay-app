import React from 'react'


const styles = {

	header: {
		gridColumn: '1 / span 5', 
		padding: '1rem', 
		fontSize: '18px', 
		color: '#423F55', 
	}, 

	totalTime: {
		gridColumn: '1 / span 5', 
		color: '#423F55',
		background: 'white',
		textAlign: 'center', 

	}, 

	resume: {
		gridColumn: '1 / span 5',
		color: '#423F55', 
		padding: '0 2rem', 
		liste: {
			listStyleType: 'none', 
			padding: '0', 
			paddingBottom:'2rem', 
		}, 
		listItem: {
			marginBottom: '10px', 
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			color: 'white',
			fontSize: '18px',
			text: {
				marginLeft: '1rem', 
			}, 

			score: {
				display: 'flex', 
				alignItems: 'center', 
			}, 

			scoreDifference: {
				color: '#423F55', 
			},
		},
	}, 

	buttonContainer: {
		gridColumn: '1 / span 5',
		width: '100%', 		
		textAlign: 'center', 
		position: 'fixed', 
		bottom:'0', 
		display: 'flex', 
		justifyContent: 'center', 

		button: {
			padding: '8px', 
			width: '90%', 
			background: '#423F55', 		
			marginBottom: '8px', 
			borderRadius: '3px',
			boxShadow:' 0px 1px 1px rgba(0, 0, 0, 0.25)',
			cursor: 'pointer', 
		}
	}


	
}




export default class ResumeUI extends React.Component{

	totalTimeCalculator(time){

		console.log(time); 
		let minutes = Math.trunc(time / 60) ; 
		let seconds = time - (minutes * 60) ; 

		return `${minutes}'${seconds}''`
	}




	render(){

		let round = []

		for(const i in this.props.workout.exercices){
			const exercice = this.props.workout.exercices[i]

			let scoreDifference = exercice.sessionScore - exercice.previousSessionScore

			if (scoreDifference >= 0) {
				scoreDifference = `+${scoreDifference}`
			}


				const thumbnail = require(`../../img/resumelistplaceholder.png`)

			round.push(
				

				<li key={i}  style={styles.resume.listItem}>
					<div style={styles.resume.listItem.score}>					
						<img src={thumbnail.default} alt="thumbnail" />
						<div style={styles.resume.listItem.text}>{`${exercice.sessionScore}x ${exercice.movement.name}`}</div>
					</div>
					<div style={styles.resume.listItem.scoreDifference}>({scoreDifference})</div>
				</li>
			)
		}

		return(
			<React.Fragment>

				<div style={styles.header}>{this.props.title}</div>

				<div style={styles.totalTime}>
					<h1>Workout Terminé</h1>
					<h2>{this.totalTimeCalculator(this.props.workoutTotalTime)}</h2>
				</div>

				<div style={styles.resume}>
					<h3>Résumé</h3>

					<ul style={styles.resume.liste}>

						 {round}
						
					</ul>

				{/*liste*/}
				</div>

				<div style={styles.buttonContainer}>
					<div style={styles.buttonContainer.button}>
						Terminé
					</div>
				</div>

				
			</React.Fragment>
		)
	}
}