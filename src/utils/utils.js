
export function convertIdToThreeDigits(inputString) {
    if (inputString.length === 1) {
      return '00' + inputString;
    } else if (inputString.length === 2) {
      return '0' + inputString;
    } else {
      return inputString; 
    }
}
