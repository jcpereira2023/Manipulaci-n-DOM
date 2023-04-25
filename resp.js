let name1 = "Julio César ";
let lastname1 = "Pereira A";
console.log(`Mi nombre es ${name1}${lastname1}`);

sumar()
sumar()

function sumar(){
    let resultado = 2+2
    console.log ("Resulatdo: " + resultado)

}

function dtosPers (name, lastname,){

}
let nombre = "Julio";
let apellido = "Pereira";
let usuario = "jpereira";
let edad = 54;
let correo = "jc.pereira10@gmail.com"
let adulto = true;
let ahorro = 20000;
let deuda = 8000;

let nombrecomp = nombre+" "+apellido;
let dinero_real = ahorro-deuda;

const name = "Juan David";
const lastname = "Castro Gallego";



function datos(completeName, nickname){
  completeName = name + " " + lastname;
  nickname = "juandc" ;
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
        
}

//const tipoDeSuscripcion = "ExpertPlus"//;
//
//if (tipoDeSuscripcion == "Free" ){
//  console.log("Solo puedes tomar los cursos gratis");
//   }; 
//    if (tipoDeSuscripcion === "Basic" ){
//    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     }; 
//      if (tipoDeSuscripcion === "Expert" ){
//      console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//       }; 
//        if (tipoDeSuscripcion === "ExpertPlus" ){
//      console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//     }; 
   

const tipoDeSuscripcion = "Expert";
const Insc = {
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
    "": "Inscribete Ya"
}

console.log(Insc [tipoDeSuscripcion]);

//

//for (let i = 0; i < 5; i++) { 
//
//    console.log("El valor de i es: " + i); 
//} 
//for (let j = 10; j >= 2; j--) { 
//    console.log("El valor de j es: " + j); 
//}

let x=0
while (x<5){
    x++
    console.log("El valor de x es: " + (x-1));
    }

    let y=10
while (y>=2){
    y--
    console.log("El valor de y es: " + (y+1));
    }



    
    while ( resp = prompt("Cuánto es la suma de (2 + 2) ? ") != 4){
                alert("Volvemos a empezar"); 
                            
    };
    alert("Es correcto... !Felicidades!");  

// http://127.0.0.1:5500/index.html

let fibon = [21,13,8,5,3,2,1,1]

function imp(fibon){
     largo = fibon.length
       while ( largo >=0){
         console.log("El valor del arreglo en la posición: "  + largo + " es:  " + "(" + (fibon[largo]) + ")");
         largo --
        }

        }
        imp (fibon)
//===========================================
        const clima = {
            estacion: " Verano",
            temp: "38 Grados",
            duracion: "3 meses" 
        }
        
        function impr(objet){
            for(let element in objet){
                console.log("Datos clima en Junio..." + objet[element]);
            }
        }
        
        impr(clima);

        //==========================
  
 