// Date de naissance
const birthDate = new Date('1980-10-03');

// Date actuelle
const currentDate = new Date();

// Calcul de l'âge
let age = currentDate.getFullYear() - birthDate.getFullYear();
const monthDifference = currentDate.getMonth() - birthDate.getMonth();

// Ajustement si l'anniversaire n'est pas encore passé cette année
if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
}

// Affichage de l'âge
document.getElementById('age').textContent = `${age} ans`;
