import React from 'react'

const styles = {

	totalTime: {
		gridColumn: '1 / span 5', 
		color: '#423F55',
		background: 'white',
		textAlign: 'center', 

	}, 

	resume: {
		gridColumn: '1 / span 5',
		color: '#423F55', 
		padding: '0 1rem', 
		liste: {
			listStyleType: 'none', 
			padding: '0', 
			paddingBottom:'2rem', 
		}, 
		listItem: {
			marginBottom: '10px', 
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontSize: '18px',
			text: {
				marginLeft: '1rem', 
			}, 
			thumbnail: {
				width: '100px', 
				borderRadius: '5px',
			}
		}
	}, 

	text:{
		fontFamily: 'Rubik, sans-serif', 
		color: '#1E1E1E', 
		fontSize: '18px',
		lineHeight: '128.7%', 
		letterSpacing: '0.03em', 
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

export default class PreviewUI extends React.Component {

	componentDidMount(){
		console.log("Le composant est monté")
	}
	render(){

		let liste = []; 
		const exercices = this.props.workout.exercices; 

		for(const i in exercices){
			const exercice = exercices[i]

			console.log('########'); 
			console.log(exercice); 
			console.log('########'); 

			const thumbnail = require(`../../img/exercices/${exercice.movement.thumbnail}`)

			liste.push(
			<li key={i} style={styles.resume.listItem}>
				<img style={styles.resume.listItem.thumbnail} src={thumbnail.default} alt="Rectangle blanc"/>
				<div style={styles.resume.listItem.text}>{`${exercice.movement.name} - ${exercice.instructions}`}</div>
			</li>
			)
		}

		const equipment = this.props.workout.workoutInfos.equipment.map((equipment, index) => 
			<li key={index}>
				{equipment}
			</li>
		);


		return(
			<React.Fragment>
		
				<div style={styles.totalTime}>
					<h1>{this.props.workout.workoutInfos.title}</h1>
					<h2>Prépare toi !</h2>
				</div>

				<div style={styles.resume}>
					<h3>Informations & Exercices</h3>

					<p style={styles.text}>{this.props.workout.workoutInfos.infos}</p>

				</div>

				<div style={styles.resume}>
					<h3>Fréquence d'entraînement</h3>

					<p style={styles.text}>{this.props.workout.workoutInfos.frequency}</p>

				</div>

				<div style={styles.resume}>
					<h3>Objectifs de progression</h3>

					<p style={styles.text}>{this.props.workout.workoutInfos.objectives}</p>

				</div>

				<div style={styles.resume}>
					<h3>Matériel Nécessaire</h3>

					<ul>
						{equipment}
					</ul>

				</div>

				<div style={styles.resume}>
					<h3>Résumé</h3>

					<ul style={styles.resume.liste}>
						{liste}
					</ul>

				</div>

				<div style={styles.buttonContainer}>
					<div style={styles.buttonContainer.button} onClick={this.props.startWorkout}>
						Démarrer
					</div>
				</div>

				
			</React.Fragment>
		)
	}
}

// class ExercicePreview extends React.Component {
// 	render(){
// 		return(
// 			<div>
// 				<div>
// 					<icon></icon>
// 				</div>
// 				<h6>Exercice</h6>
// 			</div>
// 		)
// 	}
// }