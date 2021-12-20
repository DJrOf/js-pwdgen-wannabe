console.log('JS OK');

/* 

1) Recupero nome inserito dall'utente
2) Recupero cognome inserito dall'utente
3) Recupero colore preferito inserito dall'utente
4) Recupero elemento HTML tramite il quale mostrare la password generata
5) Genero e stampo la password

*/


// 1) Recupero nome inserito dall'utente
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);

// 2) Recupero cognome inserito dall'utente
const userSurname = prompt("Qual'è il tuo Cognome?");
console.log(userSurname);

// 3) Recupero colore preferito inserito dall'utente
const userFavColor = prompt("Qual'è il tuo Colore preferito?");
console.log(userFavColor);

// 4) Recupero elemento HTML tramite il quale mostrare la password generata
const userdataprintElement = document.getElementById("userdataprint");
console.log(userdataprintElement);

// 5) Genero e stampo la password
userdataprintElement.innerText = userName + userSurname + userFavColor + '21';
console.log(userName + userSurname + userFavColor + '21')