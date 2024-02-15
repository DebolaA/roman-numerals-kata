import { romanNumeralConstant } from '../data/numeral-const.data'
/**
 * This function should receive a number/integer and return the roman numeral equivalent of the input
 * @param {Number} n
 * @returns {String}
 */
export function convertToRomanNumeral(decimalNum: number): string {
    if (!decimalNum) throw new Error('Number 0 cannot be passed')
    if (!Number.isInteger(decimalNum)) throw new Error('Number is required')

    //From the following const, find the highest decimal value v that is less than or equal to the decimal number x and its corresponding roman numeral n
    //Repeat stages 1 and 2 until you get zero result of x
    //Write the roman numeral n that you found and subtract its value v from x

    let romanVal: string = ''

    for (let romanKey of romanNumeralConstant) {
        while (decimalNum >= romanKey.num) {
            romanVal += romanKey.roman
            decimalNum -= romanKey.num
        }
    }
    return romanVal
}
