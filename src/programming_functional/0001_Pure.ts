/**
 * Uma função pura é uma função em que o valor
 * de retorno é determinado apenas por seus valores
 * de entrada, sem efeitos colaterais observavéis
 */

const PI = 3.14

// Função Impura - PI é algo que está fora da função!
function areaCirc(raio: number) {
  // return raio * raio * Math.PI // Estável
  return raio * raio * PI // Não Estável, pois eu posso modificar
}

// console.log(areaCirc(10));

// Função Pura - Não preciso de mais nada externo.
function areaCircPure(raio: number, pi: number = Math.PI) {
  return raio * raio * pi
}
console.log(areaCircPure(10));
console.log(areaCircPure(10, 3.14));
console.log(areaCircPure(10, Math.PI));
console.log(areaCircPure(10, 7.88));
