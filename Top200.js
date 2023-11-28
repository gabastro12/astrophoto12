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
    var sectionNames = ["cancer", "lynx", "hercule", "hydre", "lion", "peLion", "sextant", "com", "chienChasse", "corbeau", "coupe", "crB", "serpent", "vierge", "amasVierge", "grOurse", "balance", "bouvier", "ophiuchus", "scorpion", "aigle", "sobieski", "fleche", "lyre", "sagittaire", "peOurse", "dragon", "capricorne", "cygne", "dauphin", "peRenard", "cephee", "lezard", "pegase", "verseau", "andromede", "baleine", "belier", "poissons", "austral", "sculpteur", "cassiopee", "persee", "triangle", "eridan", "girafe", "lievre", "orion", "taureau", "gemeaux", "grandChien", "licorne", "cocher", "poupe"];

    // Fonction pour compter les images dans une section donnée
    function countImagesInSection(section) {
    var count = 0;

    section.forEach(function (element) {
        var images = element.querySelectorAll("img");

        images.forEach(function (image) {
            // Vérifiez si le nom de fichier se termine par "-a.jpg"
            if (image.src.endsWith("-a.jpg") && image.naturalWidth > 300) {
                count++;
            }
        });
    });

    return count;
}

// Initialiser les totaux
var totalPosted = 0;
var totalToPost = 0;

// Utilisez une boucle pour traiter toutes les sections
for (var i = 0; i < sectionNames.length; i++) {
    var currentSectionName = sectionNames[i];
    var currentSection = document.querySelectorAll('.section[data-section="' + currentSectionName + '"]');
    var currentCount = countImagesInSection(currentSection);

    // Comptez le nombre total d'éléments se terminant par "-a.jpg" dans la section
    var totalSection = document.querySelectorAll('.section[data-section="' + currentSectionName + '"] img[src$="-a.jpg"]').length;

    // Mettez à jour les totaux
    totalPosted += currentCount;
    totalToPost += totalSection;

    // Affichez les résultats dans le HTML
    var currentResultElement = document.getElementById(currentSectionName + '-result');
    if (currentResultElement) {
        currentResultElement.textContent += " " + currentCount + " sur " + totalSection;
    } else {
        console.error("L'élément avec l'ID " + currentSectionName + "-result n'a pas été trouvé.");
    }

    // Affichez les résultats dans la console
    console.log("Nombre - section " + currentSectionName + " : " + currentCount + " sur " + totalSection);
}

// Affichez le total dans la console
console.log("Total des images postées : " + totalPosted);
console.log("Total des images à poster : " + totalToPost);

// Mettez à jour les compteurs dans le HTML
document.getElementById('total-posted-counter').querySelector('.counter-number').textContent = totalPosted;
document.getElementById('total-to-post-counter').querySelector('.counter-number').textContent = totalToPost;



});
