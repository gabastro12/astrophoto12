document.addEventListener("DOMContentLoaded", function () {
        var links = document.querySelectorAll('.catalog-table a');

        links.forEach(function (link) {
            var season = link.classList[0];
            var cell = link.closest('td');
            cell.classList.add(season + '-cell');
        });
    });

window.addEventListener("load", function () {
    // Définissez les noms des sections dans un tableau
    var sectionNames = ["lion", "com", "peLion", "crB", "balance", "corbeau", "coupe", "bouvier", "sextant", "chienChasse", "hydre", "vierge", "amasVierge", "aigle", "fleche", "sagittaire", "scorpion", "lyre", "cygne", "sobieski", "dauphin", "serpent", "ophiuchus", "hercule", "peRenard", "andromede", "lezard", "austral", "verseau", "belier", "sculpteur", "triangle", "capricorne", "pegase", "persee", "baleine", "poissons", "lievre", "lynx", "cocher", "cancer", "taureau", "grandChien", "eridan", "gemeaux", "orion", "licorne", "girafe", "grOurse", "poupe", "cassiopee", "peOurse", "cephee", "dragon"];

    // Fonction pour compter les images dans une section donnée
    // Définir la fonction countImagesInSection en premier
function countImagesInSection(section) {
    var count = 0;
    var totalImages = 0;

    section.forEach(function (element) {
        var images = element.querySelectorAll("img");

        images.forEach(function (image) {
            totalImages++;

            // Vérifiez si le nom de l'image se termine par "-a.jpg"
            if (image.naturalWidth > 300 && image.src.endsWith("-a.jpg")) {
                count++;
            }
        });
    });

    // Ne comptez que si au moins une image de la paire a le suffixe "-a.jpg"
    return { count: count, total: totalImages };
}

// Déclarer la variable totalImages en dehors de la boucle
var totalImages = 0;

// Utilisez une boucle pour traiter toutes les sections
for (var i = 0; i < sectionNames.length; i++) {
    var currentSectionName = sectionNames[i];
    var currentSection = document.querySelectorAll('.section[data-section="' + currentSectionName + '"]');
    var counts = countImagesInSection(currentSection);
    var currentCount = counts.count;
    var totalImagesInSection = counts.total;

    // Ajoutez le nombre total d'images de la section actuelle au total
    totalImages += totalImagesInSection;

    // Affichez les résultats dans le HTML
    var currentResultElement = document.getElementById(currentSectionName + '-result');
    if (currentResultElement) {
        currentResultElement.textContent += " " + currentCount + " sur " + totalImagesInSection;
    } else {
        console.error("L'élément avec l'ID " + currentSectionName + "-result n'a pas été trouvé.");
    }

    // Affichez les résultats dans la console
    console.log("Nombre - section " + currentSectionName + " : " + currentCount + " sur " + totalImagesInSection);

}

// Affichez le nombre total d'images dans la console
console.log("Nombre total d'images : " + totalImages);

});
