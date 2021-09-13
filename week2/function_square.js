function getSquare(width, height) {

  const result = [];
  const row = Array(width)
  .fill()
  .map(element => element = '*')
  .join('')

  new Array(height)
  .fill('')
  .forEach(element => {
    result.push(row);
  })

  return result.join('\n');
}

console.log(getSquare(5,5));