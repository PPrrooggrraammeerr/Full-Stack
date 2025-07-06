alert("Olá, seja bem-vindo(a) ao jogo do número secreto!");

let number_maximum = 10;
let number_secret = parseInt(Math.random() * 10 + 1);
console.log(number_secret);

let try_number;
let attemps = 0;

while (try_number != number_secret) {
    
    let try_number = prompt(`Informe um número que seja de 0 à ${number_maximum} e veja se você consegue descobrir: `);

    // attemps = attemps + 1;
    attemps++;

    if (try_number == number_secret) {
        alert('Parabéns! Você acertou o número secreto...');
        console.log('Parabéns! Você acertou o número secreto...');
        alert(`O número secreto é: ${number_secret}`);
        break;
    } else {
        // alert('Que pena! Você não acertou o número secreto...')
        // console.log('Que pena! Você não acertou o número secreto...');
        if (try_number > number_secret) {
            alert(`O número secreto é menor que ${try_number}...`);
        } else {
            alert(`O número secreto é maior que ${try_number}...`);
        }
    }

    alert('Por gentileza, tente novamente!');

}

let attempt_alert = attemps > 1 ? `Número(s) de tentativa(s) até acertar: ${attemps}` : `Número(s) de tentativa(s) até acertar: ${attemps}`;

alert(attempt_alert);