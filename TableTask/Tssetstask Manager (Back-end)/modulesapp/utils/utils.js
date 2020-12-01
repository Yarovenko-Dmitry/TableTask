const randomString = () => {
  let text = '';
  const possibleSymbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 8; i++)
    text += possibleSymbol.charAt(Math.floor(Math.random() * possibleSymbol.length));
  return text;
}

const randomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

module.exports = {randomString, randomNumber}