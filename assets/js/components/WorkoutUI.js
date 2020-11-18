import React from 'react'

const styles = {

	exerciceTitle : {
		color: 'white', 
		gridColumn: '4 / span 2',
		marginTop: '1rem', 
	}, 

	nbReps: {
		textTransform: 'uppercase', 
		textAlign:'center', 
		fontSize: '28px', 
		gridColumn: '1 /  span 5', 
		justifySelf: 'center', 
		marginTop: '30px', 
		padding: '0 1rem', 
	},

	mainPicture: {
		gridColumn: '1 / span 5', 
		width: '100%',
	},

	secondaryPicture: {
			gridColumn: '1 / span 3', 
			width: '90%',
			zIndex: '5', 
			marginTop: '-3rem',
			justifySelf: 'center', 
	},

	previousMaxReps: {
		color: '#423F55', 
		fontSize: '18px',
		gridColumn: '1 / span 5', 
		justifySelf: 'center',  
		marginTop: '12px', 
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

export default class WorkoutUI extends React.Component{
	render(){

		const workout = this.props.workout
		const mainImg = require(`../../img/exercices/${workout.movement.mainImg}`)
		const secondaryImg = require(`../../img/exercices/${workout.movement.secondaryImg}`)

		return (
			<React.Fragment>

				<img src={mainImg.default} style={styles.mainPicture}/>

				<img src={secondaryImg.default} style={styles.secondaryPicture}/>

				<div style={styles.exerciceTitle}>
					<div>{workout.movement.name}</div>
					<div>{ `Round: ${workout.round} `}</div>
				</div>

				<div style={styles.nbReps}>{workout.instructions}</div>

				<div style={styles.previousMaxReps}>{`Score à battre : ${workout.sessionScore}`}</div>


				<ButtonNext click={this.props.setRestState}/>


			</React.Fragment>
		)
	}
}


function ButtonNext(props){
		return (
			<div style={styles.btnNext} onClick = {props.click}> suivant </div>
		)
}



