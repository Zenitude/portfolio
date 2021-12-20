// Création de la section Formations
const sectionFormations = document.createElement('section');
sectionFormations.setAttribute('class', 'sectionFormations');
sectionFormations.setAttribute('id', 'competences');
containerPrincipal.appendChild(sectionFormations);

// Création de la partie titre
const divTitreFormations = document.createElement('div');
divTitreFormations.setAttribute('class', 'titreFormations');
sectionFormations.appendChild(divTitreFormations);

// Création du titre Formations
const titreFormation = document.createElement('h2');
titreFormation.innerText = 'Mes compétences';
divTitreFormations.appendChild(titreFormation);

// Création de la partie formations
const divFormations = document.createElement('div');
divFormations.setAttribute('class', 'contenuFormations');
sectionFormations.appendChild(divFormations);

// Création de l'objet Formations
class formations
{
    constructor(nomFormations,imgFormations, altImgFormations)
    {
        this.nomFormations = nomFormations,
        this.imgFormations = imgFormations,
        this.altImgFormation = altImgFormations
    }
}

// Création du tableau qui comportera les formations
let tabFormations = [];

// Création des Formations
let frontEnd = new formations('Développement Front-End','ressources/formations/frontend.png', 'Image représentant des logos de langages Front-End');
let backend = new formations('Développement Back-End', 'ressources/formations/backend.png', 'Image représentant des logos de langages de développement back-end');
let mobile = new formations('Développement Mobile', 'ressources/formations/mobile.png', 'Image représentant des logos de développement mobile');
let frameworks = new formations('Frameworks', 'ressources/formations/frameworks.png', 'Image représentant des logos de frameworks');
let cms = new formations('CMS', 'blabla.', 'ressources/formations/cms.png', 'Immage représentant des logos de cms');
let logiciels = new formations ('Logiciels et OS', 'ressources/formations/logiciels.png', 'Immage représentant des logos de logiciels et de système d\'exploitation');

// Ajout des formations au tableau
tabFormations.push
(
    frontEnd,
    backend,
    logiciels
)

// Création des Contenants des formations
for(let i = 0 ; i < tabFormations.length ; i++)
{
    let contenantFormation = document.createElement('div');
    contenantFormation.setAttribute('class', 'contenantFormations');

    // Création du contenant de l'image
    const divImgFormations = document.createElement('div');
    divImgFormations.setAttribute('class', 'contenantImgFormations');
    contenantFormation.appendChild(divImgFormations);

    let imgFormation = document.createElement('img');
    imgFormation.setAttribute('src', tabFormations[i]['imgFormations']);
    imgFormation.setAttribute('alt', tabFormations[i]['altImgFormations']);
    divImgFormations.appendChild(imgFormation);

    let contenantTxtFormation = document.createElement('p');
    contenantTxtFormation.setAttribute('class', 'contenantTxtFormation');
    contenantFormation.appendChild(contenantTxtFormation);

    let titreFormation = document.createElement('h3');
    titreFormation.innerText = tabFormations[i]['nomFormations'];
    contenantTxtFormation.appendChild(titreFormation);

    divFormations.appendChild(contenantFormation);
}

// Animation d'apparition
let optionsFormations = 
{
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0.2
}

function apparitionFormations(entries)
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            header.childNodes[1].childNodes[0].childNodes[0].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[1].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[2].style.borderBottom = '2px solid white';
            header.childNodes[1].childNodes[0].childNodes[3].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[4].style.borderBottom = 'none';

        }
    });
}

const observerFormations = new IntersectionObserver(apparitionFormations, optionsFormations);

observerFormations.observe(sectionFormations);