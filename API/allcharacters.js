//dans ce paragraphe nous avont une fonction HarryPotterCharacters dans le lequelle nous allons envoyé une requete afin de recuperer tout les informations//
//dans le lien ensuite nous aurons une reponse garce au then //

function fetchHarryPotterCharacters() {
    return fetch('')
    .then((response) => response.json());
}
//au second paragraphe nous avons une fonction asychrone c'est a dire qu'il vas fonctionner avec une ordre d'écriture du script ensuite nous allons rappeler la fonction//
//et on vas utiliser le display qui vas afficher dans notre page la fonction HarryPotterCharacters sa vas nous permetre de récuperer les données sur les personnages harrypotter //
//le await sa permet de attendre la réponse de la fonction ,ensuite nous avons une variable characters nommée par let qui vas nous servir pour utiliser ses informations en html//
//et sa sera ensuite affiché dans la page html en le reliant avec une "<ul id="harry-potter-characters"></ul>" pour appeller cette fonction dna snotre partie en html//
//le characters.forEach(character => {charactersHTML += `// sa permet de crée une boucle pour chaque personnage et avec le charactersHTML on vas nommée // 
//une div qui vas tout contenir le h1(le titre qui est le nom du personnage avec le h2 (les caractéristiques ) et le p(les caractéristiques de chaque personnage ))
async function displayHarryPotterCharacters() {
 const characters = await fetchHarryPotterCharacters();
let charactersHTML = '';
characters.forEach(character => {
charactersHTML += `
<div>
<h1>${character.name}</h1>


<h2>
<p>${character.slug}</p>
<p>${character.eyes}</p>
<p>${character.hairs}</p>
<p>${character.birthay}</p>
<p>${character.blood}</p>
<p>${character.house}</p>
</h2>


<img src="${character.image}" alt="${character.name}" />
</div>

`;
});
//ici on voit que tout est classé dans document ensuite on va prendre tout ce qu'il y a , on vas recolter tout les données de la fonction et on vas utiliseé les éléments ci-dessus //
//pour les mettre dans notre page web et le display  + le nom de la fonction sert a afficher le nom de la fonction dans la page web //
document.getElementById("harry-potter-characters").innerHTML = charactersHTML;
}
displayHarryPotterCharacters();





