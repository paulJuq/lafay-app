import React from 'react'

const styles = {

	exerciceTitle : {
		color: 'white', 
		gridColumn: '1 / span 5',
		display: 'flex',
		alignItems: 'center', 
		justifyContent: 'space-between',

		exerciceName: {
			fontSize: '32px',
			padding: '16px 16px 16px 32px',
			color: '#423F55',
		},
		round: {
			fontSize: '24px',
			textAlign: 'center',
			padding: '16px',
		},
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
		fontSize: '64px',
		gridColumn: '1 / span 5', 
		justifySelf: 'center',  
		marginTop: '12px', 
	},

	btnNext : {
		background : '#423F55', 
		fontSize: '24px', 
		gridColumn: '2 / span 3', 
		width: '100%',
		padding: '0.8rem 0', 
		textTransform: 'uppercase', 
		marginTop: '3rem', 
		cursor: 'pointer', 
		textAlign: 'center',

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

{/*				<img src={secondaryImg.default} style={styles.secondaryPicture}/>
*/}
				<div style={styles.exerciceTitle}>
					<div style={styles.exerciceTitle.exerciceName}>{workout.movement.name.toUpperCase()}</div>
					<div style={styles.exerciceTitle.round}>Round <br/> {workout.round} </div>
				</div>

				<div style={styles.nbReps}>{workout.instructions}</div>

				<div style={styles.previousMaxReps}>{`x${workout.sessionScore}`}</div>


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



