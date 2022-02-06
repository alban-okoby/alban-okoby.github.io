< div id = "photo" > < /div>

<
script >
    function photo() {
        var x = document.getElementById("photo")
        x.innerHTML = "<img src=\"/images/BIENVENUE-" + Math.floor((Math.random() * 2) + 1) + ".jpg\" width=\"560\" height=\"200\" />"
    }
bienvenue(); <
/script>

/* Ici, j'affiche soit l'image BIENVENUE-1.jpg ou BIENVENUE-2.jpg située dans le dossier /images.
Si on a plus d'images, adapter le coefficient multiplicateur situé après Math.random() (ici 2) */