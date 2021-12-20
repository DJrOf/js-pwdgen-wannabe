console.log('JS OK');

const userName = prompt("Qual'è il tuo nome?");
console.log(userName);


const userSurname = prompt("Qual'è il tuo Cognome?");
console.log(userSurname);

const userFavColor = prompt("Qual'è il tuo Colore preferito?");
console.log(userFavColor);

const userdataprintElement = document.getElementById("userdataprint");
console.log(userdataprintElement);


userdataprintElement.innerText = userName + userSurname + userFavColor + '21';
