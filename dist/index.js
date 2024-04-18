function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada por ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade de ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt("Qual o nome da spa\u00E7onave?");
var spaceshipCaptain = prompt('Qual o nome do capitão da nave?');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade a qual deseja acelerar"));
accelerate(speed, currentShip);
