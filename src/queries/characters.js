import fetch from "../queries/fetch";

export const getRandomCharacters = (limit) => (
  fetch(`${process.env.REACT_APP_BASE_URL}character/random?limit=${limit}`)
  )
export function getCharactersById() {
  
}
export function getCharactersByName() {
  
}
export function getCharacters(limit = 1, searchOption, searchText) {
  console.log(`${process.env.REACT_APP_BASE_URL}/api/character/random?${limit}`)
}