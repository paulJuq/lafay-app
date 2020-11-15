import React from 'react'

const styles = {

	stopwatch : {
		color :'white', 
		padding: '8px 16px', 
		background: '#423F55',
		width: '72px',
		textAlign: 'center',
		fontSize: '12px', 
		fontFamily: 'Russo One, sans-serif',
		margin: '18px 36px'
	}
}

export default class Stopwatch extends React.Component {


	constructor(props) {
		super(props)

		this.state = {
			minutes : 0, 
			seconds : 0
		}
	}

	componentDidMount(){

		this.interval = window.setInterval( ()=>	{

			this.state.seconds === 59
			? this.setState( (state) => ({minutes : state.minutes + 1 , seconds:0}))
			: this.setState( (state) => ({seconds: state.seconds + 1 }))

			this.props.timeUpdate()

		}, 1000);  

	}

	componentWillUnmount(){
		window.clearInterval(this.interval)
	}

	render() {

		const minutePrefix = (this.state.minutes<10) ? 0 : ''
		const secondPrefix = (this.state.seconds<10) ? 0 : ''

		return (
			<div className="stopwatch" style={styles.stopwatch}>
				{`${minutePrefix}${this.state.minutes}:${secondPrefix}${this.state.seconds} `}
			</div>
		)
	}
}