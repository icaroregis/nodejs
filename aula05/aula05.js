function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(1, 3));

function repeat(inf, qtde) {
  return inf.repeat(qtde);
}
console.log(repeat('oi', 5));

const funcaoAnonima = (inf, qtde) => {
  return inf.repeat(qtde);
};
console.log(funcaoAnonima);
