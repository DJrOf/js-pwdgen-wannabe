console.log('JS OK');

/*

1) Recupero nome utente
2) Recupero cognome utente
3) Recupero colore preferito utente
4) Recupero elemento HTML tramite il quale mostrare la password
5) Genero e stampo la password
*/


// 1) Recupero nome utente
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);

// 2) Recupero cognome utente
const userSurname = prompt("Qual'è il tuo Cognome?");
console.log(userSurname);

// 3) Recupero colore preferito utente
const userFavColor = prompt("Qual'è il tuo Colore preferito?");
console.log(userFavColor);

// 4) Recupero elemento HTML tramite il quale mostrare la password
const userdataprintElement = document.getElementById("userdataprint");
console.log(userdataprintElement);

// 5) Genero e stampo la password
userdataprintElement.innerText = userName + userSurname + userFavColor + '21';
