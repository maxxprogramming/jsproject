//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

 
 
 const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

  for (let i = 0; i < users.length; i++) {
     if (users[i].years <= 18) {
        console.log("Usuarios menores de edad: " + users[i].name)
        console.log("**************************************")
     } else {
        console.log("Usarios mayores de edad: " + users[i].name)
     }
  }



  //Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. 
  //Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.



  const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let fruitsLength = fruits.length;
let foodScheduleLength = foodSchedule.length;

for (let i = 0 ; i< foodScheduleLength; i++ ) {
    if (foodSchedule[i].isVegan == false) {
        foodSchedule[i].name = fruits;
    }
    
}

console.log(foodSchedule);

