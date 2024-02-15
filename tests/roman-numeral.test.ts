import { convertToRomanNumeral } from '../src/convert-to-roman-numerals'
import { convertToDecimalNumber } from '../src/convert-to-decimal-numbers'

describe('convertToRomanNumeral', () => {
    test('throws an error when the input/arg is not an integer', () => {
        expect(() => convertToRomanNumeral(12.3)).toThrow('Number is required')
    })

    test('throws an error when the input/arg is 0', () => {
        expect(() => convertToRomanNumeral(0)).toThrow(
            'Number 0 cannot be passed',
        )
    })

    test('returns the Roman Numeral Value of the inputed integer', () => {
        expect(convertToRomanNumeral(33)).toBe('XXXIII')
        expect(convertToRomanNumeral(2012)).toBe('MMXII')
        expect(convertToRomanNumeral(1996)).toBe('MCMXCVI')
    })
})

describe('convertToDecimalNumber', () => {
    test('throws an error when the input/arg string has invalid letters', () => {
        expect(() => convertToDecimalNumber('XQYDML')).toThrow(
            'Only valid roman numerals are allowed',
        )
    })

    test('throws an error when the an empty string is passed', () => {
        expect(() => convertToDecimalNumber('')).toThrow(
            'An Empty string is not allowed',
        )
    })

    test('returns the Roman Numeral Value of the inputed integer', () => {
        expect(convertToDecimalNumber('XXXIII')).toBe(33)
        expect(convertToDecimalNumber('MMXII')).toBe(2012)
        expect(convertToDecimalNumber('MCMXCVI')).toBe(1996)
    })
})
