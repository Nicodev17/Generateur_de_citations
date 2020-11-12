$(document).ready(function() { 

// ---- GROUPES DE CITATIONS ----

let citations = {

    groupe1 : [
		['Avec ', 'En ce qui concerne ', 'Compte tenu de ', 'Malgré ', 'Pour revenir sur ', 'Pour parler de ', 'Afin de voir ', 'Vu ', 'Face à '],
		['la mer ', 'la nourriture ', 'la planète ', 'la fête ', 'la bêtise ', 'la congolexicomatisation ', 'la vache ', 'la baleine ', 'la sorcière ', 'la banane ', 'la cacahuète ', "l'armée "],
		['noire ', 'cassée ', 'lourde ', 'ennuyeuse ', 'ringarde ', 'volante ', 'pailletée ', 'musclée ', 'rêveuse ', 'boudeuse ', 'céleste ', 'luisante '],
 		['il faut ', 'on se doit de ', 'il est temps de ', 'nous sommes contraints de ', 'il est important de ', 'nous devons absolument ', 'il est conseillé de ' ],
 		['mettre sur le bon coin ', 'manger ', 'détruire ', 'signaler ', 'faire taire ', 'découper ', 'nettoyer ', 'faire parler ', 'colorier ', 'scotcher ', 'grignoter ', 'boycoter ', 'mépriser '],
		['tous les ', 'certains ', 'beaucoup des ', 'une partie des ', "l'ensemble des ", 'un par un tous les ', 'les principaux ', 'quelques ', 'plusieurs ', 'divers ', 'deux ', 'un groupe de '],
		['kiwis ', 'burgers ', 'chiens ', 'blobfish ', 'sorciers ', 'singes ', 'camions ', 'arbres ', 'super-héros ', 'extraterrestres ', 'fromages ', 'clowns ', 'saucissons '],
 		['énormes', 'psychopates', 'doux', 'enflammés', 'croustillants', 'robots', 'criminels', 'sucrés', 'ramollis', 'unijambistes', 'à deux têtes', 'jouflus'],
        [' !', '...', '.'],
    ],

    groupe2 : [
        ['Batman ', "Bob L'éponge ", 'Superman ', 'Iron Man ', 'Cat woman ', 'Flash ', 'Green Lantern ', 'Hulk ', 'Wolverine ', 'Wonder woman ', 'Olaf ', 'Lucifer ', 'Tarzan ', 'Bambie ', 'Jacks Sparrow ', 'Harry Potter ', 'Hermione ', 'Ron ', 'Jackie Chan '],
        ['mange ', 'course ', 'mord ', 'surveille ', 'protège ', 'tue ', 'cambriole ', 'incendie ', 'rase ', 'applatie ', 'croque ', 'lave ', 'noie ', 'torture ', 'gifle ', 'découpe ', 're-peint ', 'devient ami avec ', 'discute avec ', 'se bat avec ', 'carresse ', 'fait la course avec '],
        ['une télé ', 'une bougie ', 'un chien ', 'une fille ', 'un gars ', 'un chocapic ', 'une courgette ', 'une mamie ', 'un doudou ', 'du nutella ', 'une sucette ', 'un pinguouin ', 'un éléphant ', 'une bouée ', 'un singe ', 'un patronus ', "la reine d'Angleterre ", "une mouette "],
        ['obèse', 'ambidextre', 'drôle', 'sexy', 'rouge', 'magnifique', 'magique', 'rouge', 'énorme', 'dynamique', 'intrépide', 'moche', 'aimable', 'désagréable', 'calme', 'sympa', 'énergique', 'adulte', 'marron', 'liquide', 'en fuite', 'en plastique', 'dans la jungle', 'en nageant', 'rose'],
        [' !', '...', '.'],
    ]
}

// ---- CHOIX DU THEME (à partir des boutons radio) ----
function getTheme() {
    let nomTheme = document.querySelector("input[name = theme]:checked").value;
    return nomTheme;
}

// ---- CHOIX DU NOMBRE (à partir du 2eme groupe de boutons radio) ----
function getNombreCitation() {
    let nbCitation = document.querySelector("input[name = nbCitations]:checked").value;
    return nbCitation;
}

// ---- FONCTION pour génerer aléatoirement des citations ----
function aleatoire(theme) {
    let phrase = "";
    theme.forEach(array => {
        phrase += array[Math.floor(Math.random() * array.length)];
            /* math.floor arrondie à 0 et math.random cherche quelque chose entre 0 et 1, 
            on multiplie ensuite par un nombre avec length qui va chercher 
            entre 0 et le nombre d'entrées dans le tableau */ 
    });
    return phrase;
}
// FIN FONCTION citations aléatoires


// ---- FONCTION pour afficher LA citation ----
let button = document.querySelector('.generer');
button.addEventListener('click', function() {
    let nombreCitation = getNombreCitation();
    let theme = getTheme();
    document.getElementById("buttonDelete").setAttribute('style', 'display:block');
    document.getElementById("playCitation").innerHTML = "";

    for (let citation = 0; citation < nombreCitation; citation++) {
        document.getElementById("playCitation").innerHTML += "<li>" + "<blockquote>" + '• ' + aleatoire(citations[theme]);
    }
    
} );
// FIN FONCTION pour afficher LA citation

let button2 = document.querySelector('.buttonDelete');
    button2.addEventListener('click', function() {
        document.getElementById("playCitation").innerHTML = "";
        document.getElementById("buttonDelete").setAttribute('style', 'display:none');
} );

});
//FIN PROGRAMME

// ---- INTERACTION AVEC L'UTILISATEUR LORS DE L'OUVERTURE DU SITE ----
alert("Bienvenue ! Pour générer une phrase amusante n'oublie pas de choisir un thème et un nombre de citation.");
