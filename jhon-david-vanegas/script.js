/*1:
Mutabilidad---
 los metodos mutables modifican el arreglo original.

pop(): elimina el último elemento del arreglo y lo devuelve.
shift(): elimina el primer elemento del arreglo y lo devuelve.
unshift(): agrega uno o más elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.

Inmutabilidad---

los metodos inmutables hacen una copia del arreglo original y no lo modifican.

concat(): une dos o más arreglos y devuelve un nuevo arreglo.
join(): une todos los elementos del arreglo en una cadena de texto, separados por un separador especificado.
map(): crea un nuevo arreglo con los resultados de la llamada a una función proporcionada aplicada a cada elemento del arreglo.
filter(): crea un nuevo arreglo con todos los elementos que cumplan una condición especificada en una función proporcionada..
find(): devuelve el primer elemento del arreglo que cumpla con una condición especificada en una función proporcionada.
2:
la programacion imperativa se enfoca en como hacer algo, describe el proceso paso a paso y aplica el uso frecuente de variables mutables

la programacion declarativa se enfoca en que se quiere lograr, describe el resultado final, y no aplica o aplica poco la mutabilidad.

3:
 las funciones flecha son preferidas por claridad y brevedad, hacen que los metodos de arreglos sean mas claros
 
4:
se produce un efecto secundario, reduce la legibilidad y mantenibilidad y puede producir bugs.

5: 
find() busca y devuelve el primer elemento del arreglo que cumple una condicion, en caso de no encontrar ninguno, devuelve undefined

findIndex() busca la posicion del primer elemento que cumple una condicion, si no lo encuentra devuelve -1

includes() verifica si un valor existe dentro del arreglo devuelve true o false.

6:
map(): un metodo que transforma un arreglo en otro nuevo, siempre retorna un nuevo arreglo

forEach(): un metodo para recorrer un arreglo y ejecutar una accion por cada elemento. 
*/

/*Ejercicio 1 */

let herramientas = ["Martillo", "Destornillador"];

herramientas.push("Taladro");

herramientas.unshift("Sierra");

herramientas.pop();

console.log(herramientas);

/*Ejercicio 2 */

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

colores.splice(1, 0, "Naranja");

colores.splice(3, 1, "Morado");

console.log(colores);


/*Ejercicio 3 */

const temperaturas = [15, 20, 25, 30];

const farenheit = temperaturas.map(temp => (temp * 9/5) + 32);

console.log(farenheit);
console.log(temperaturas);

/*Ejercicio 4 */  

const inventario = [5, 12, 8, 130, 44];

const grandesValores = inventario.filter(n => n > 10);

console.log(grandesValores);
console.log(inventario);

/*Ejercicio 5 */

const ventas = [100, 250, 150, 400];

const totalVentas = ventas.reduce((acumulador, valor) => {
    return acumulador + valor;
}, 0);

console.log(totalVentas);
console.log(ventas);

/*Ejercicio 6 */

let nombres = ["Zulma", "Andrés", "Bernardo", "Carlos"];

nombres.sort((a, b) => a.localeCompare(b));

console.log(nombres);

/*Ejercicio 7 */

let orden = [1, 2, 3, 4, 5];

orden.reverse();

console.log(orden);

/*Ejercicio 8 */

const invitados = ["Juan", "Maria", "Pedro", "Luisa"];

const resultado = invitados.find(nombre => nombre === "Pedro");

console.log(resultado);

/*Ejercicio 9 */

const precios = [45, 12, 89, 34];

const indice = precios.findIndex(precio => precio === 89);

console.log(indice);

/*Ejercicio 10 */

const cursos = ["Git", "React", "Node"];

const existe = cursos.includes("JavaScript");

console.log(existe);

/*Ejercicio 11 */

const edades = [20, 25, 19, 30];

const todosMayores = edades.every(edad => edad >= 18);

console.log(todosMayores);

/*Ejercicio 12 */

const puntajes = [5, 8, 12, 3];

const existeMayor = puntajes.some(puntaje => puntaje > 10);

console.log(existeMayor);

/*Ejercicio 13 */

const filaA = ["A1", "A2"];
const filaB = ["B1", "B2"];

const todasLasFilas = filaA.concat(filaB);

console.log(todasLasFilas);






