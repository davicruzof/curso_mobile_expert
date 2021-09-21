export const key = "b4b7c6a8";

const getApi = () => {
    fetch(`https://api.hgbrasil.com/finance?key=${key}`, { method: 'GET'})
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
  }