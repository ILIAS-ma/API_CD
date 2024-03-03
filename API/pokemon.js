fetch("https://pokeapi.co/api/v2/pokemon/venusaur") //la on a la a une fonction avec un fetch pour récuperer des données dans le lien http//
  .then((response) => response.json())//la on vas voir la réponse qui sera convertie en format json//
  .then((data) => {   //la on a la réponse du résultat en format json qui vas afficher tout les données de l'api//
    console.log(data); //la console log vas nous permetre d'afficher les réponse du data //
  });

function fetchPokemon(pokemon) {  //la on a la fonction Pokemon et fetchPokemon(pokemon) sa sert a récuperer les données de l'api  et ensuite on a la réponse du lien pokémon et ensuite then vas recuperer les donnée et les mettre en format json//
    return fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then((response) => response.json())
}
//ici on a appellé la function afin de l'afficher davec le display ensuite on vas récuperer les données on vas attendre un réponse de la requete et on vas récuperer les données de chaque pokemon et avec .innerHTML on vas nmettre un titre h1 qui est le nom de l'affiche avec l'image de l'affiche //
async function displayPokemon(pokemon) { //
const data = await fetchPokemon(pokemon)
document.getElementById("pokemon").innerHTML = `
    <h1>${data.name}</H1>
<img src='${data.sprites.front_default}" alt="${data.name}" />
`;
}