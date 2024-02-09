const form = document.querySelector('.formulario');

form.addEventListener('submit', e => {
    e.preventDefault();

    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido!', false);
        return;
    }

    const imc = calcularImc(peso, altura);
    const nivel = nivelImc(imc);

    const mensagem = `Seu Nível de IMC é: ${nivel}. IMC: ${imc}`;

    setResultado(mensagem, nivel, true);
});

function calcularImc(peso, altura) {
    let calculoImc = peso / (altura ** 2);
    return calculoImc.toFixed(2);
}

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    let resultadoNivel;

    if (imc >= 39.9) {
        return resultadoNivel = nivel[5];        
    } else if (imc >= 34.9) {
        return resultadoNivel = nivel[4];
    } else if (imc >= 29.9) {
        return resultadoNivel = nivel[3];
    } else if (imc >= 24.9) {
        return resultadoNivel = nivel[2];
    } else if (imc >= 18.5) {
        return resultadoNivel = nivel[1];
    } else {
        return resultadoNivel = nivel[0];
    }   
}

function criarParagrafo() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResultado(msg, nivel, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';

    const p = criarParagrafo();

    if (isValid) {
        if (nivel === 'Peso normal' || nivel === 'Abaixo do peso')  p.classList.add('nivel-bom');

        if (nivel === 'Sobrepeso' || nivel === 'Obesidade grau 1')  p.classList.add('nivel-medio');

        if (nivel === 'Obesidade grau 2' || nivel === 'Obesidade grau 3')    p.classList.add('nivel-ruim');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}