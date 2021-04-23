export const getRandomChar = (setState) => {
  fetch(process.env.REACT_APP_BASE_URL + 'character/random')
  .then(response => response.json())
  .then(data => setState(data))
}