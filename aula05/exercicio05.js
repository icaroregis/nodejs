// questão 01
function teste01(x, y) {
  return y - x;
}
console.log(teste01(100, 50));

//questao2
function polegadaParaCentimetro(polegada) {
  return `${polegada} polegadas equivalem a ${polegada * 2.4} centímetros`;
}
console.log(polegadaParaCentimetro(10));

//questao 3
function converteParaUrl(string) {
  return `http://www.${string}.com.br`;
}
console.log(converteParaUrl('google'));

//questao04
function addExc(texto) {
  return `${texto} !`;
}
console.log(addExc('teste'));

//questão05
function idadeDoCachorro(anos, nome_do_cachorro) {
  return `${nome_do_cachorro} tem ${anos} anos, isso equivale a ${
    anos * 7
  } anos.`;
}
console.log(idadeDoCachorro(7, 'Lessy'));

//questao06
function valorDaHora(salario) {
  return `O salário R$ ${salario} é equivalente à ${salario / 160} horas.`;
}
console.log(valorDaHora(3500));

//questao07
function imc(altura, peso) {
  const imc = peso / (altura * altura);
  return `Seu imc equivale a: ${imc}`;
}
console.log(imc(1.77, 90));
