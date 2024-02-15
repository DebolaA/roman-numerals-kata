import { romanNumeralConstant } from '../data/numeral-const.data'

/**
 * This function should receive a roman numeral and return the number/integer equivalent of the input
 * @param {String} s
 * @returns {Number} n
 */
export function convertToDecimalNumber(romanStr: string): number {
    if (!romanStr.length) throw new Error('An Empty string is not allowed')

    const regex = /^[IVXLCDM]+$/
    if (!regex.test(romanStr))
        throw new Error('Only valid roman numerals are allowed')

    //Work the string from right to left

    let result = getNumberEquivalent(romanStr.charAt(romanStr.length - 1))
    for (let i = romanStr.length - 2; i >= 0; i--) {
        if (
            getNumberEquivalent(romanStr.charAt(i)) <
            getNumberEquivalent(romanStr.charAt(i + 1))
        ) {
            result -= getNumberEquivalent(romanStr.charAt(i))
        } else {
            result += getNumberEquivalent(romanStr.charAt(i))
        }
    }

    return result
}

function getNumberEquivalent(val: string) {
    let index = romanNumeralConstant.findIndex((x) => x.roman === val)
    return romanNumeralConstant[index].num
}
