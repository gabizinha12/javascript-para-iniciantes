var possuiGraduacao = false
var possuiDoutorado = true

if(possuiGraduacao) {
    console.log('Possui graduação')
} else if(possuiDoutorado){
    console.log('Possui doutorado')
} else {
    console.log('Não possui nada')
}
// retorna possui graduação e não executa o else
var nome = 'Gabi'
if(nome) {
    console.log(nome)
} else {
    console.log('Nome não existe')
}

// if(false)
// if(0)
// if(NaN)
// if(null)
// if(undefined)
// if('') 
// clausulas falsy

// Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
