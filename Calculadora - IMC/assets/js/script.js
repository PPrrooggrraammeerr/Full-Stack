const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseInt(document.getElementById('weight').value);

    const heightRaw = document.getElementById('height').value;
    const height = parseFloat(heightRaw.replace(',', '.'));

    if (!weight || !height || height === 0) {
        alert("Por favor, insira peso e altura válidos!");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.className = 'attention';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Parabéns! Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});

document.getElementById('weight').addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');
    this.value = value.slice(0, 3);
});

document.getElementById('height').addEventListener('input', function () {
    let raw = this.value.replace(/\D/g, '');
    raw = raw.slice(0, 3);

    if (raw.length === 0) {
    this.value = '';
    } else if (raw.length === 1) {
    this.value = raw + ',';
    } else if (raw.length === 2) {
    this.value = raw[0] + ',' + raw[1];
    } else if (raw.length === 3) {
    this.value = raw[0] + ',' + raw.slice(1, 3);
    }

    let parsed = parseFloat(this.value.replace(',', '.'));
    if (parsed > 2.2) {
    this.value = '2,20';
    }
});