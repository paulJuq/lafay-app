import React from 'react'

const styles = {
	repsCounter : {
		gridColumn: '1 / span 5', 
		background: 'white', 
		color: '#423F55', 

		title: {
			fontSize: '24px', 
			width: '100%', 
			textAlign: 'center', 
			marginTop: '20px', 
		}, 
		subtitle: {
			marginTop: '10px', 
			fontSize: '18px',
			width: '100%', 
			textAlign: 'center', 
		},
		counter: {
			width: '100%', 
			display: 'flex',
			justifyContent: 'center',  
			alignItems:'center', 
			margin: '32px 0', 

			control: {
				fontSize: '62px',
				cursor: 'pointer',
			},

			totalReps: {
				fontSize: '96px', 
				margin: '0 42px', 
			},

		},
	},

	timer:{
		gridColumn: '1 / span 5', 
		marginTop: '82px', 
		title: {
			fontSize: '28px', 
			textAlign: 'center', 	 

		}, 
		counter: {
			display:'flex', 
			width:'100%', 
			justifyContent: 'center', 
			alignItems: 'center', 
			marginTop: '24px', 

			time : {
				fontSize: '36px', 
				margin: '0 36px', 
			},

			controls: {
				color: '#423F55', 
				fontSize: '24px',
				cursor: 'pointer',  
			},	
		}, 
		skip: {
			width: '100%', 
			textAlign: 'center', 
			textDecoration: 'underline',
			cursor: 'pointer',   
			marginTop: '16px', 
		}, 
	},

	nextExercice: {
		gridColumn : '1 / span 5', 
		color: '#423F55', 
		marginTop: '88px',
		width: '95%', 
		textAlign: 'right', 
		marginRight: '32px',
	},
}

export default class RestUI extends React.Component{

	render(){
		
		const workout = this.props.workout

		return (
			<React.Fragment>
				
				<div style={styles.repsCounter} >
					<div style={styles.repsCounter.title}>{workout.movement.name}</div>	
					<div style={styles.repsCounter.subtitle}>Total répétitions</div>
					<RepsCounter 
						previousMaxReps={workout.sessionScore} 
						incrementReps={this.props.incrementReps}
						decrementReps={this.props.decrementReps}
					/>
				</div>

				<RestTimer
					functionNext = {this.props.functionNext}
					restingTime = {workout.rest}
				/>

				<div  style={styles.nextExercice}>Exercice suivant : {this.props.nextExercice} </div>


			</React.Fragment>
		)
	}
}


function RepsCounter(props){
	
	return (

		<div style={styles.repsCounter.counter}>

			<div 
				style={styles.repsCounter.counter.control}
				onClick={props.decrementReps}
			>
				-
			</div>

			<div style={styles.repsCounter.counter.totalReps}>{props.previousMaxReps}</div>
			
			<div 
				style={styles.repsCounter.counter.control} 
				onClick= {props.incrementReps}
				>+
			</div>
		</div>	
	)

}

class RestTimer extends React.Component{
	
	constructor(props){
		super(props); 
		this.state={
			restTime: this.props.restingTime,
		}

		this.extendTime = this.extendTime.bind(this); 
		this.decreaseTime = this.decreaseTime.bind(this); 
	}

	componentDidMount(){
		this.interval = window.setInterval( () => {

			const restTime = this.state.restTime; 

			if(restTime > 0){
				this.setState((state) => ({restTime : state.restTime -1 }))
			}else{
				window.clearInterval(this.interval)
				this.props.functionNext()
			}
		}, 1000)
	}

	componentWillUnmount(){
		window.clearInterval(this.interval)
	}

	extendTime(){
		return this.setState((state)=>({restTime: state.restTime + 30}))
	}

	decreaseTime(){

		const time = this.state.restTime; 

		time > 30
		?this.setState((state)=>({restTime: state.restTime - 30}))
		:this.setState({restTime: 0})
		
	}

	


	render(){
		return(

			<div style={styles.timer}>

				<div style={styles.timer.title}>REPOS</div>

				<div style={styles.timer.counter}>
					<div style={styles.timer.counter.controls} onClick={this.decreaseTime}>-30s</div>

					<div style={styles.timer.counter.time}>{this.state.restTime}</div>

					<div style={styles.timer.counter.controls} onClick={this.extendTime}>+30s</div>
				</div>

				<div style={styles.timer.skip} onClick={this.props.functionNext}>Passer</div>
			</div>

		)
	}
}
