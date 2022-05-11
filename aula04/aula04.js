// para executar ukm código bata colocar: "node 'nome do arquivo.js'"
console.log('olá mundo!!');

//não respeita escopo de bloco, é global.
var teste = 'teste';

//escopo limitado local dentro de um bloco de códigos pelas chaves.
let nome = 'Ícaro Régis';
console.log(nome);

//não muda
const CPF = '053.789.373-37';
console.log(CPF);

const idade = 25;

const activeUser = true;

const soma1 = (5 / 5) * 6;
const soma2 = (5 * 5) / 6;
const result = soma1 + soma2;
console.log(result);

//quando juntamos uma string com um valor numérico o js transforma tudo em string
const msn = 'teste' + 25;
console.log(typeof msn);

const msn02 = 'teste' + true;
console.log(typeof msn02);
