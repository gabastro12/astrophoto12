function accederTableauPeriodique() {
  window.location.href = "tableau-periodique.html"; // Rediriger vers la page du tableau périodique
}
function afficherImage(imageSrc, nomObjet, constellation) {
  const imageAffichee = document.getElementById('image-affichee');
  imageAffichee.src = imageSrc;

  const nomObjetElement = document.getElementById('nom-objet');
  nomObjetElement.textContent = 'Nom de l\'objet : ' + nomObjet;

  const constellationElement = document.getElementById('constellation');
  constellationElement.textContent = 'Constellation : ' + constellation;

  const imageGrande = document.getElementById('image-grande');
  imageGrande.style.display = 'flex';
}

function cacherImage() {
  const imageGrande = document.getElementById('image-grande');
  imageGrande.style.display = 'none';
}
