function sendSpaceship(name:string, captain:string){
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }
    alert(`A nave ${spaceship.name} comandada por ${spaceship.captain} foi enviada em uma missão`)
    return spaceship
}

function accelerate(targetSpeed:number, spaceship: {name:string, speed:number}){
    if(spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade de ${spaceship.name} para ${targetSpeed}...`)
    }else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade de ${spaceship.name} para ${targetSpeed}...`)
    }else{
        alert(`Mantendo a velocidade de ${spaceship.name}...`)
    }
}

const spaceshipName = prompt(`Qual o nome da spaçonave?`)
const spaceshipCaptain = prompt('Qual o nome do capitão da nave?')

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt(`Insira a velocidade a qual deseja acelerar`))
accelerate(speed, currentShip)