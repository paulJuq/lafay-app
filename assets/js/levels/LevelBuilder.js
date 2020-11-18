import A1 from '../exercices/A1'
import A from '../exercices/A'
import B from '../exercices/B'
import C from '../exercices/C'

export default class LevelTest {

	constructor(previousSessions, workout){

		this.previousSessions = previousSessions; 
		this.workout = workout; 
	}

	getLastSession(){

		let lastSessions = []; 

		for(const i in this.previousSessions){
			const session = this.previousSessions[i]; 

			
			if(session.level === this.workout.workoutInfos.id){
				lastSessions.push(session)
			}
		}

		if(lastSessions.length > 0){

			const lastIndex = lastSessions.length - 1; 
			const lastSession = lastSessions[lastIndex].workout;

			for(const i in this.workout.exercices){

				const exercice = this.workout.exercices[i]; 

				exercice.previousSessionScore = lastSession[i].sessionScore; 

				exercice.sessionScore = lastSession[i].sessionScore + 1 ; 
			}
		}

		console.log(this.workout); 
		return this.workout; 
	}


}



