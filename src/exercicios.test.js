import { describe, it, expect } from 'vitest'
import { par, media, filtrarMaiores18 } from './exercicios.js'

describe('par(n)', () => {
  it('par(2) devolve true', () => {
    expect(par(2)).toBe(true)
  })

  it('par(3) devolve false', () => {
    expect(par(3)).toBe(false)
  })

  it('par(0) devolve true (zero é boundary)', () => {
    expect(par(0)).toBe(true)
  })
})

describe('media(notas)', () => {
  it('media([7, 8, 9]) devolve 8', () => {
    expect(media([7, 8, 9])).toBe(8)
  })

  it('media([]) lança erro (decisão: array vazio não tem média)', () => {
    expect(() => media([])).toThrow()
  })
})

describe('filtrarMaiores18(usuarios)', () => {
  const usuarios = [
    { name: 'Ana', age: 22 },
    { name: 'Beto', age: 17 },
    { name: 'Carla', age: 30 },
  ]

  it('Ana (22) e Carla (30) entram; Beto (17) fica de fora', () => {
    expect(filtrarMaiores18(usuarios)).toEqual([
      { name: 'Ana', age: 22 },
      { name: 'Carla', age: 30 },
    ])
  })

  it('age === 18 conta como maior', () => {
    expect(filtrarMaiores18([{ name: 'Davi', age: 18 }])).toEqual([
      { name: 'Davi', age: 18 },
    ])
  })
})
