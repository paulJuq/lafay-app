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
		infos: `Testez vos capacités. Il s’agit pour vous de connaître vos performances réalisées à pleine amplitude sur les exercices suivants.`,
		exercicesList: [A, B, C, A1],
		frequency: `Ce test d’effort est à réaliser une fois unique pour dévérouiller son premier niveau d’entrainement.`, 
		objectives: `Selon vos résultats, l’accès à votre premier niveau d’entraînement sera débloqué.`, 
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
