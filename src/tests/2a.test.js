import ismayoredad from '../utils/ismayoredad'
import { describe, expect, test } from 'vitest'

test('Examen UT6 Ej 2.a) Tests', () => {
    describe('La función debe retornar un valor boolean', () => {
        const result = ismayoredad(22);
        expect(Typeof, result).toBe("boolean")
    })

    describe('La función debe retornar true si el valor enviado es 18', () => {
        const result = ismayoredad(18);
        expect(result).toBe(true)
    })

    describe('La función debe retornar true si el valor enviado es mayor a 18', () => {
        const result = ismayoredad(45);
        expect(result).toBe(true)
    })

    describe('La función debe retornar false si el valor enviado es menor a 18', () => {
        const result = ismayoredad(17);
        expect(result).toBe(false)
    })

    describe('La función debe retornar null si el valor enviado es menor a 0', () => {
        const result = ismayoredad(-1);
        expect(Typeof, result).toBe("null")
    })
})