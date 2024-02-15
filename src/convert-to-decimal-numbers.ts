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

    let romanVal: string = ''

    // for (let romanKey of romanNumeralConstant) {
    //     while (decimalNum >= romanKey.num) {
    //         romanVal += romanKey.roman
    //         decimalNum -= romanKey.num
    //     }
    // }
    return parseInt(romanVal)
}
