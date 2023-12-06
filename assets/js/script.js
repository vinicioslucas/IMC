// Fazer a captura do evento de SUBMIT DO FORMULARIO

const form = document.querySelector('#form'); // Selecionando o formulario por ID

//Criando um evento de SUBMIT

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // Para mostrar qual elemento foi clicado na pagina
    const inputAltura = e.target.querySelector('#altura'); //Tbm feito a captura do input completo

    const peso = Number(inputPeso.value); //Capturando o valor do input
    const altura = Number(inputAltura.value); //Capturando o valor enviado pelo input

    if (!peso){ //Se peso não for verdadeiro
        setResultado('Peso inválido', false);
        return; //Estou dando um brake na função
    }
    if (!altura){ //Se peso não for verdadeiro
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelmc = getNivelImc(imc);

    const msg = `Seu IMC ${imc} (${nivelmc}).`;
    setResultado(msg, true);
});

// Criando a função do nivel do IMC
//Função com um Array
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //è um array com strings
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Criando a função para calcular o IMC
function getImc(peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

//Criando uma função para criar um paragrafo
function criaP(){
    const p = document.createElement('p'); //Criando o paragrafo
    return p;
}

// Criando a função de resultado
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado'); //Capturando o resultado por um ID
    resultado.innerHTML = ''; //Criando um HTML para a DIV resultado 

    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p); // Inserindo um elemento filho dentro da div que é o paragrafo
}