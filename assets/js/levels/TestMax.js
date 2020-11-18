import A1 from '../exercices/A1'
import A from '../exercices/A'
import B from '../exercices/B'
import C from '../exercices/C'

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

export default workout; 
