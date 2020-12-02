import B1 from '../exercices/B1'
import A3 from '../exercices/A3'
import A1 from '../exercices/A1'
import C1 from '../exercices/C1'
import E from '../exercices/E'
import F from '../exercices/F'
import G from '../exercices/G'
import H from '../exercices/H'
import K2 from '../exercices/K2'

const workout = {

	workoutInfos: {
		id: '3',
		title : "Niveau 2",
		rounds:  '4', 
		totalExercices: 4, 
		infos: `Essayez d'ajouter, à chaque entrainement, une répétition à chaque série de chaque exercice`,
		exercicesList: [B1, A3, A1, C1, E, F, G, H, K2],
		frequency: `Quatre fois la première semaine, trois fois dès la deuxième`, 
		objectives: `Cherchez à atteindre huit à dix répétitions à chaque série de chaque exercice.`, 
	}, 

	exercices: {
		0 : {
			movement: B1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		1 : {
			movement: B1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		2 : {
			movement: B1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		3 : {
			movement: B1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		4 : {
			movement: B1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		5 : {
			movement: B1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		6 : {
			movement: A3, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		7 : {
			movement: A3, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		8 : {
			movement: A3, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		9 : {
			movement: A3, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		10 : {
			movement: A3, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		11 : {
			movement: A3, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		12 : {
			movement: A1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		13 : {
			movement: A1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		14 : {
			movement: A1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		15 : {
			movement: A1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		16 : {
			movement: A1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		17 : {
			movement: A1, 
			rest: 180,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		18 : {
			movement: C1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 3, 
			round: '1/6', 
		},
		19 : {
			movement: C1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 3, 
			round: '2/6', 
		},
		20 : {
			movement: C1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 3, 
			round: '3/6', 
		},
		21 : {
			movement: C1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 3, 
			round: '4/6', 
		},
		22 : {
			movement: C1, 
			rest: 25,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 3, 
			round: '5/6', 
		},
		23 : {
			movement: C1, 
			rest: 180,
			instructions: 'Vitesse Maximale', 
			previousSessionScore: 0, 
			sessionScore: 3, 
			round: '6/6', 
		},
		24 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe droite - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		25: {
			movement: E, 
			rest: 25,
			instructions: 'Jambe droite - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		26 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe droite - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		27 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe droite - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		28 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe droite - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		29 : {
			movement: E, 
			rest: 120,
			instructions: 'Jambe droite - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		30 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe gauche - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		31 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe gauche - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		32 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe gauche - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		33 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe gauche - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		34 : {
			movement: E, 
			rest: 25,
			instructions: 'Jambe gauche - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		35 : {
			movement: E, 
			rest: 180,
			instructions: 'Jambe gauche - Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		36 : {
			movement: F, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		37 : {
			movement: F, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		38 : {
			movement: F, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		39 : {
			movement: F, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		40 : {
			movement: F, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		41 : {
			movement: F, 
			rest: 180,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		42 : {
			movement: G, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 10, 
			round: '1/6', 
		},
		43 : {
			movement: G, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 10, 
			round: '2/6', 
		},
		44 : {
			movement: G, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 10, 
			round: '3/6', 
		},
		45 : {
			movement: G, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 10, 
			round: '4/6', 
		},
		46 : {
			movement: G, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 10, 
			round: '5/6', 
		},
		47 : {
			movement: G, 
			rest: 90,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 10, 
			round: '6/6', 
		},
		48 : {
			movement: H, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		49 : {
			movement: H, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		50 : {
			movement: H, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		51 : {
			movement: H, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		52 : {
			movement: H, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		53 : {
			movement: H, 
			rest: 60,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
		},
		54 : {
			movement: K2, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '1/6', 
		},
		55 : {
			movement: K2, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '2/6', 
		},
		56 : {
			movement: K2, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '3/6', 
		},
		57 : {
			movement: K2, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '4/6', 
		},
		58 : {
			movement: K2, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '5/6', 
		},
		59 : {
			movement: K2, 
			rest: 25,
			instructions: 'Rythme normal', 
			previousSessionScore: 0, 
			sessionScore: 5, 
			round: '6/6', 
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
