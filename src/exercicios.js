// 1) Devolve true se n for par.
export function par(n) {
  return n % 2 === 0
}

// 2) Média aritmética de um array de notas.
// Decisão: array vazio não tem média, então lançamos um erro
// (devolver 0 esconderia um bug de quem chamou a função).
export function media(notas) {
  if (notas.length === 0) {
    throw new Error('Não é possível calcular a média de um array vazio')
  }
  const soma = notas.reduce((acc, nota) => acc + nota, 0)
  return soma / notas.length
}

// 3) Recebe { name, age }[] e devolve só quem tem age >= 18.
export function filtrarMaiores18(usuarios) {
  return usuarios.filter(u => u.age >= 18)
}
