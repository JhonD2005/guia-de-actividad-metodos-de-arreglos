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

