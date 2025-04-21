const galeria = document.querySelector("#galeria");


function createPost(name, message, imageURL, index) {
  const div = document.createElement("div");
  div.classList.add("digimon");

  const nombre = document.createElement("h3");
  nombre.textContent = name;
  
  const elemento = document.createElement("img");
  elemento.src = imageURL;
  
  const mensaje = document.createElement("p");
  mensaje.textContent = `Este es el personaje ${index}`;
  
  
  div.append(elemento, nombre, mensaje, );
  return div;
}


for (let index = 1; index <= 826; index++) {
  fetch(`https://rickandmortyapi.com/api/character/${index}`)
    .then(response => response.json())
    .then(personaje => {
      const post = createPost(
        `Personaje ${index}: ${personaje.name}`,
        `Especie: ${personaje.species} | Origen: ${personaje.origin.name}`,
        personaje.image,index
      );
      galeria.appendChild(post);
    })
    .catch(error => console.error(`Error cargando personaje ${index}:`, error));
}

