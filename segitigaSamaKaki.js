const segitigaSamaKaki = (n, symbol) => {
  let temp = ''
  for (let i = n; i >= 0; i--) {
    for (let j = n; j > i; j--) {
      temp += ' '
    }
    for (let j = 0; j < i; j++) {
      if (i === n) {
        temp += symbol
      } else if (j === 0){
        temp += symbol
      } else {
        temp += ' '
      }
    }
    for (let j = 1; j < i; j++) {
      if (i === n) {
        temp += symbol
      } else if (i - j === 1){
        temp += symbol
      } else {
        temp += ' '
      }
    }
    temp += '\n'
  }
  return console.log(temp)
}

segitigaSamaKaki(10, '*')