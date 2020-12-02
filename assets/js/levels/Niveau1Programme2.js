import B from '../exercices/B'
import A1 from '../exercices/A1'
import D from '../exercices/D'
import C1 from '../exercices/C1'
import E from '../exercices/E'
import F from '../exercices/F'
import G from '../exercices/G'
import K2 from '../exercices/K2'

const workout = {

	workoutInfos: {
		id: '2',
		title : "Niveau 1 Deuxième Programme",
		rounds:  '4', 
		totalExercices: 4, 
		infos: `Tentez à chaque fois de battre votre record sur chaque exercice`,
		exercicesList: [B, A1, D, C1, E, F, G, K2],
		frequency: `Trois fois par semaine, un jour de repos minimum entre chaque séance`, 
		objectives: `Réalisé 8 répétitions à la première série de B pour passer au niveau 2`, 
	}, 

	exercices: {
		0 : {
			movement: B, 
			rest: 120,
			instructions: 'max reps', 
			sessionScore: 0, 
			previousSessionScore: 0, 
			round: '1/3', 
		},
		1 : {
			movement: B, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,  
			previousSessionScore: 0, 
			round: '2/3', 
		},
		
		2 : {
			movement: B, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},

		3 : {
			movement: A1, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/3', 
		},

		4 : {
			movement: A1, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '2/3', 
		},

		5 : {
			movement: A1, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},


		6 : {
			movement: D, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/1', 
		},


		7 : {
			movement: C1, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/3', 
		},

		8 : {
			movement: C1, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '2/3', 
		},

		9 : {
			movement: C1, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},

		10 : {
			movement: E, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/3', 
		},
		11 : {
			movement: E, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '2/3', 
		},
		12 : {
			movement: E, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},

		13 : {
			movement: F, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/3', 
		},

		14 : {
			movement: F, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '2/3', 
		},

		15 : {
			movement: F, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},

		16 : {
			movement: G, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/3', 
		},

		17 : {
			movement: G, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '2/3', 
		},

		18 : {
			movement: G, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},

		19 : {
			movement: K2, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '1/3', 
		},

		20 : {
			movement: K2, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '2/3', 
		},

		21 : {
			movement: K2, 
			rest: 120, 
			instructions: 'max reps',
			sessionScore: 0,   
			previousSessionScore: 0, 
			round: '3/3', 
		},
		
	}, 
}

workout.workoutInfos.equipment = getEquipment(workout.workoutInfos.exercicesList); 
console.log(workout.workoutInfos.equipment);

function getEquipment(exercicesSet){

	console.log(exercicesSet); 

	const equipments = []; 

	for(const i in exercicesSet){

		const exerice = exercicesSet[i]; 
		console.log(exerice); 

		for(const i in exerice.equipment){

			const equipment = exerice.equipment[i];
			console.log(equipment); 

			if(equipment !== null && equipments.indexOf(equipment) === -1){
				console.log("Léquipement n'est pas dans la liste"); 
				equipments.push(equipment);  
			}
		}
	}

	return equipments; 	
}


export default workout; 
