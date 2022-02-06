(function($) {
    // Une fonction conçue par Alban pour retarder le chargement au clic des ancres
    var $window = $(window),
        $section = $('section'),
        $div = $('#nav');

    // Temps de chargement de la page.
    $window.on('load', function() {
        window.setTimeout(function() {
            $section.removeClass('is-preload');
        }, 100);
    });

    // Défilement.
    $('#nav a,.remote__button, .scrolly').scrolly({
        speed: 1500,
        offset: function() { return $div.height(); }
    });

})(jQuery);
// BEGIN articles(garba) Carousel
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
        const minPerSlide = 5
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
    // Fonction du compte à rebours
var Affiche = document.getElementById("Compte");

function Rebour() {
    var date1 = new Date();
    var date2 = new Date("Feb 20 00:00:00 2022");
    var sec = (date2 - date1) / 1000;
    var n = 24 * 3600;
    if (sec > 0) {
        j = Math.floor(sec / n);
        h = Math.floor((sec -
            (j * n)) / 3600);
        mn = Math.floor((sec - ((j * n + h * 3600))) / 60);
        sec = Math.floor(sec - ((j * n + h * 3600 + mn * 60)));
        Affiche.innerHTML = " " + j + " j " + h + " h " + mn + " min " + sec + " s ";
        windowstatus = " " + j + " j " + h + " h " + mn + " min " + sec + " s ";
    }
    tRebour = setTimeout("Rebour();", 1000);
}
Rebour();

function affichZero(nombre) {
    // cette fonction prend en paramètre un nombre
    // si ce nombre est inférieur à 10, on affiche 0 + ce nombre
    // Ex: il est 07h00
    return nombre < 10 ? '0' + nombre : nombre;
}

function dateEtHeure() {
    // Cette fonction fait deux choses :
    // 1 - Elle construit une constante avec l'objet Date()
    // qui renvoie (année, mois, jour, heure, minutes, seconde, millisecondes)
    // tout ça est dans l'objet infos

    const infos = new Date();

    // 2 - La fonction attribue du texte au div id="heure_exacte"
    // ce texte n'est autre que l'heure contenue dans l'objet infos
    // on ne souhaite afficher que l'heure et les minutes avec infos.getHours()
    // et infos.getMinutes(), On Sépare par ":" Ex: il est 07:00.

    document.getElementById('heure_exacte').innerHTML = '| ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
} // Fin fonction dateEtHeure

// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
// toutes les 100 millisecondes, donc à chaque seconde.
window.onload = function() {
    setInterval("dateEtHeure()", 100);
};