export const getShowInfo = (selection: string) => {
  return fetch(`https://rickandmortyapi.com/api/${selection}`)
    .then(response => response.json())
}