function startGame() {
    var difficulty = document.getElementById('difficulty').value;
    var maxAttempts, maxRange;

    if (difficulty === 'easy') {
        maxAttempts = 10;
        maxRange = 50;
    } else if (difficulty === 'medium') {
        maxAttempts = 7;
        maxRange = 100;
    } else {
        maxAttempts = 5;
        maxRange = 200;
    }

    playGame(maxAttempts, maxRange);
}

function playGame(maxAttempts, maxRange) {
    var targetNumber = Math.floor(Math.random() * maxRange) + 1;
    var attempts = 0;

    while (attempts < maxAttempts) {
        var guess = prompt('Devinez le chiffre entre 1 et ' + maxRange);

        if (guess === null) {
            alert('Partie annulée. Le chiffre caché était ' + targetNumber);
            return;
        }

        guess = parseInt(guess);

        if (isNaN(guess) || guess < 1 || guess > maxRange) {
            alert('Veuillez entrer un nombre valide entre 1 et ' + maxRange);
        } else if (guess === targetNumber) {
            alert('Félicitations! Vous avez deviné le chiffre ' + targetNumber + ' en ' + (attempts + 1) + ' tentatives.');
            return;
        } else {
            attempts++;
            alert('Essai incorrect. Il vous reste ' + (maxAttempts - attempts) + ' tentatives.');
        }
    }

    alert('Désolé, vous avez épuisé toutes vos tentatives. Le chiffre caché était ' + targetNumber);
}