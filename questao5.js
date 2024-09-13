function inverteString(inputString) {
     let novaString = ''
     for (let i = inputString.length - 1; i >= 0; i--) {
          novaString += inputString[i];
     }
     return novaString
}

console.log(inverteString("arlei"));