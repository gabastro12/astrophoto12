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

// Utilisez une boucle pour traiter toutes les sections
for (var i = 0; i < sectionNames.length; i++) {
    var currentSectionName = sectionNames[i];
    var currentSection = document.querySelectorAll('.section[data-section="' + currentSectionName + '"]');
    var currentCount = countImagesInSection(currentSection);

    // Comptez le nombre total d'éléments se terminant par "-a.jpg" dans la section
    var totalSection = document.querySelectorAll('.section[data-section="' + currentSectionName + '"] img[src$="-a.jpg"]').length;

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


});
