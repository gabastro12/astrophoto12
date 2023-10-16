window.addEventListener("load", () => {
  const galleryContainer = document.getElementById("gallery-container");

  let imagesSup300px = 0;
  let totalImages = donnees.length;

  for (const data of donnees) {
    const imgElement = new Image();
    imgElement.src = data.image;

    imgElement.onload = function () {

      if (imgElement.width > 250) {
        imagesSup300px++;
      }

      if (--totalImages === 0) {
        console.log(`Nombre d'images supérieures à 300px : ${imagesSup300px}`);
            const resultatDiv = document.getElementById('resultat');
    resultatDiv.classList.add('info-text');  // Ajoute une classe pour les styles
    resultatDiv.textContent = `Nombre de photos : ${imagesSup300px} sur ${donnees.length}`;
  }
    };

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.setAttribute("data-saison", data.saison);

    itemDiv.style.backgroundColor = "RGB(46, 48, 71)";  // Changez la couleur comme vous le souhaitez


    const imageName = data.image.split('/').pop().split('-')[0];

    const image = document.createElement("img");
    image.src = data.image;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `<p>${imageName}</p>`;

    itemDiv.appendChild(image);
    itemDiv.appendChild(overlay);

    galleryContainer.appendChild(itemDiv);

    // Ajout de la classe "full" pour la gestion de l'affichage en plein écran
    image.classList.add("full");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("image-info");
    infoDiv.innerHTML = `
      <p>Nom: ${data.nom}</p>
      <p>Constellation: ${data.constellation}</p>
      <p>Saison: ${data.saison}</p>
      <p>Difficulté: ${data.difficulté}</p>
    `;

    itemDiv.appendChild(image);
    itemDiv.appendChild(infoDiv);

    galleryContainer.appendChild(itemDiv);

    // Ajout de l'événement pour afficher en plein écran
    image.addEventListener("click", () => {
      const fullImageContainer = document.createElement("div");
      fullImageContainer.classList.add("full-image-container");

      const fullImage = document.createElement("img");
      fullImage.src = data.image;
      fullImage.classList.add("full-image");

      fullImageContainer.appendChild(fullImage);
      fullImageContainer.appendChild(infoDiv.cloneNode(true));

      document.body.appendChild(fullImageContainer);

      fullImageContainer.addEventListener("click", () => {
        fullImageContainer.remove();
      });
    });
  }
});
