console.log('hola mundo')
function sumar(a,b){
    return a+b
}
var n1=5, n2=6
console.log('La suma de '+n1+'mas'+n2+' es: '+ sumar(n1,n2))
console.log(__filename)
console.log(__dirname)
function printHola() {
    console.log( "Hola, mundo!");
   }
   // Now call above function after 2 seconds
   setTimeout(printHola, 2000);
   function printHola() { console.log( "Hola, mundo!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHola, 2000);
// Now clear the timer
clearTimeout(t);   
function printHola() {
    console.log( "Hola, mundo!");
   }
   // Now call above function after 2 seconds
   setInterval(printHola, 2000);
   