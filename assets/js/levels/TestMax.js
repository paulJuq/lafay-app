import A1 from '../exercices/A1'
import A from '../exercices/A'
import B from '../exercices/B'
import C from '../exercices/C'

const TestMax = {

	workoutInfos: {
		id: '0',
		title : "Test d'effort maximum",
		rounds:  '4', 
		totalExercices: 4, 
	}, 

	exercices: {
		0 : {
			exercice: 'A', 
			restingTimeBetweenRounds: 180, 
			restingTimeBeforeNextExercice: 180, 
			reps: 'max reps', 
			img1: 'A1-main.png', 
			img2: 'A1-secondary.png', 
			maxReps: 0, 
			round: 1, 
		},
		1 : {
			exercice: 'B', 
			restingTimeBetweenRounds: 180, 
			restingTimeBeforeNextExercice: 180, 
			reps: 'max reps', 
			img1: 'D-main.png', 
			img2: 'D-secondary.png', 
			maxReps: 0, 
			round: 1, 
		},
		
		2 : {
			exercice: 'C', 
			restingTimeBetweenRounds: 180, 
			restingTimeBeforeNextExercice: 180, 
			reps: 'max reps', 
			img1: 'C1-main.png', 
			img2: 'C1-secondary.png', 
			maxReps: 0, 
			round: 1, 
		},

		3 : {
			exercice: 'A1', 
			restingTimeBetweenRounds: 180, 
			restingTimeBeforeNextExercice: 180, 
			reps: 'max reps', 
			img1: 'A1-main.png', 
			img2: 'A1-secondary.png', 
			maxReps: 0, 
			round: 1, 
		},
	}, 
}; 


const workout = {

	workoutInfos: {
		id: '0',
		title : "Test d'effort maximum",
		rounds:  '4', 
		totalExercices: 4, 
	}, 

	exercices: {
		0 : {
			movement: A, 
			rest: 180,
			instructions: 'max reps', 
			sessionScore: 0, 
			previousSessionScore: 0, 
			round: '1/1', 
		},
		1 : {
			movement: B, 
			rest: 180, 
			instructions: 'max reps',
			sessionScore: 0,  
			previousSessionScore: 0, 
			round: '1/1', 
		},
		
		2 : {
			movement: C, 
			rest: 180, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/1', 
		},

		3 : {
			movement: A1, 
			rest: 180, 
			instructions: 'max reps',
			sessionScore: 0,  
			previousSessionScore: 0, 
			round: '1/1', 
		},
	}, 


}



const previousSession = [
	{
		"exercice":"A",
		"reps":8
	},
	{
		"exercice":"B",
		"reps":12
	},
	{
		"exercice":"C",
		"reps":10
	},
	{
		"exercice":"A1",
		"reps":20
	}
]


for(const i in workout.exercices){
	const exercice = workout.exercices[i]
	exercice.previousSessionScore = previousSession[i].reps
	exercice.sessionScore = previousSession[i].reps
}

console.log(workout)

export default workout; 
