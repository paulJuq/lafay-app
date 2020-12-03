
export default class LevelBuilder {

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
			//On récupère la dernière session du niveau sélectionné
			const lastSession = lastSessions[lastIndex].workout;

			for(const i in this.workout.exercices){

				const exercice = this.workout.exercices[i]; 

				exercice.previousSessionScore = lastSession[i].sessionScore; 

				console.log(this.workout.workoutInfos.id); 

				//affichage des reps dans WorkoutUI basé sur sessionScore. Application d'un traitement selon le niveau en cours
				switch(Number(this.workout.workoutInfos.id)){
					case 3 :
						console.log("case 3");
						exercice.sessionScore = lastSession[i].sessionScore + 1 ; 
						break; 
					default : 					
						console.log("case default");
						exercice.sessionScore = lastSession[i].sessionScore ; 
				}
			}
		}

		console.log(this.workout); 
		return this.workout; 
	}


}



