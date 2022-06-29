let piloteName = prompt("Qual é o nome do piloto");
let velNave = 0;
let acelerar = prompt("Qual a velocidade de aceleração?");

let confirma = confirm("Você confirma a velocidade de aceleração? " + acelerar);

function aceleracao() {
    while (confirma == false) {
        acelerar = prompt("Qual a velocidade de aceleração?");
        confirma = confirm("Você confirma a velocidade de aceleração? " + acelerar);
    }

    velNave = acelerar;

    return confirma;
}

if (aceleracao() == true) {

    if (velNave <= 0) {
        while (velNave <= 0) {
            confirma = false
            alert("A nave está parada, considere acelerar");
            aceleracao();
        }
    }
    else if (velNave <= 40) {
        while (velNave <= 40) {
            confirma = false
            alert("Velocidade lenta. Podemos acelerar um pouco mais.");
            aceleracao();
        }
    }

    else {
        while (velNave >= 81) {
            confirma = false
            alert("Velocidade perigosa. Controle automatico forçado.\nVocê precisa digitar uma velocidade segura");
            aceleracao();
        }
        if (velNave <= 80) {
            alert("A nave está numa boa velocidade");
        }
    }

}
