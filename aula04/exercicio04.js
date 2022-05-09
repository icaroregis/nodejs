let nome = 'Ícaro Régis';
let idade = 29;
let peso = 90;
let altura = 1.77;
let temPLano = true;
const imc = peso / (altura * altura);

console.log(
  `${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(
    2,
  )}`,
);
