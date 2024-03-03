function fetchStarWars3() { //la on a la a une fonction avec un fetch pour récuperer des données dans le lien http//
  return fetch(
      'https://api.themoviedb.org/3/movie/1895?api_key=d95dabc51c183468af9ad2bced0b9cbb'
       )
.then((response) => response.json())// la on  a un then qui est la pour nous apporter la réponse du fetch//
}
async function displayStarWrs3() {// la on appelle la la fonction asynchome qui s'appele 'displayStarWrs3' ensuite une a une constante ave lequel on vas 
  //recuperer tout les données et ensuite on vas attendre avec le 'await' on vas recuperer la réponse //
const data = await fetchStarWars3()

document.getElementById("star-wars-3").innerHTML = `
  <h1>${data.title}</H1>
  <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${
      data.title}" />
`
  }
displayStarWrs3()
//la avec document.getElementByid dans on vas utiliser dans les documents on vas récuperer dans la fonction star-wars-3 et le innerhtml sa sert remplacer le contenus en html
////le data.title permet de récuperer des données dans le titre //