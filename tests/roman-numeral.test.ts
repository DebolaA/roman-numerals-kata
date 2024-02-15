import { convertToRomanNumeral } from '../src/convert-to-roman-numerals'

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
