import { romanNumeralConstant } from '../data/numeral-const.data'

/**
 * This function should receive a roman numeral and return the number/integer equivalent of the input
 * @param {String} s
 * @returns {Number} n
 */
export function convertToDecimalNumber(decimalNum: string): number {
    if (!decimalNum) throw new Error('Number 0 cannot be passed')
    if (!Number.isInteger(decimalNum)) throw new Error('Number is required')

    let romanVal: string = ''

    // for (let romanKey of romanNumeralConstant) {
    //     while (decimalNum >= romanKey.num) {
    //         romanVal += romanKey.roman
    //         decimalNum -= romanKey.num
    //     }
    // }
    return parseInt(romanVal)
}
