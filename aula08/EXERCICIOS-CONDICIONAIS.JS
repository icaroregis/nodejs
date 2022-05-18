// 1. Escreva um programa para ler 2 valores (considere que não serão
//     informados	valores	iguais)	e escrever o maior deles.

function maiorDeDois(a, b) {
  if (a < b) {
    return b;
  }

  return a;
}

console.log(maiorDeDois(40, 30));

// 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e
//     escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano
//     (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

function podeVotar(anoDeNascimento) {
  const anoAtual = 2022;
  const calculaIdade = anoAtual - anoDeNascimento;
  if (calculaIdade >= 16) {
    return `Parabéns você tem ${calculaIdade} anos, já pode votar!`;
  }

  return `Opa!! Você tem ${calculaIdade} anos, infelizmente ainda não pode votar!`;
}

console.log(podeVotar(2010));

// 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida
//     pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as
//     seguintes	mensagens:
//     ACESSO	PERMITIDO	caso	a	senha	seja	válida.
//     ACESSO	NEGADO	caso	a	senha	seja	inválida.

function senhaEhValida(senha) {
  if (senha === 1234) {
    return `ACESSO	PERMITIDO!`;
  }

  return `ACESSO NEGADO!`;
}

// 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma
//     dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um
//     programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o
//     valor	total	da	compra.

function totalDeMacas(qtdeDeMacas) {
  if (qtdeDeMacas < 12) {
    const macas = qtdeDeMacas * 0.3;
    return `valor total da compra: R$ ${macas.toFixed(2)}`;
  }

  const macas = qtdeDeMacas * 0.25;
  return `valor total da compra: R$ ${macas.toFixed(2)}`;
}

console.log(totalDeMacas(80));

// 5. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:
//     1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que
//     calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes
//     Fórmulas:
//     - para	homens:	(72.7	*	Altura)	– 58
//     - para	mulheres:	(62.1	*	Altura)	– 44.7

function pesoIdeal(altura, sexo) {
  if (sexo === 1) {
    return `Você é do sexo Feminino e seu peso ideal é ${
      62.1 * altura - 44.7
    }Kg`;
  }

  return `Você é do sexo Masculino e seu peso ideal é ${72.7 * altura - 58}kg`;
}

console.log(pesoIdeal(1.5, 1));
