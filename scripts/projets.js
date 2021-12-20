// Création de l'objet Projet
class projets
{
    constructor(nomProjet, imgProjet, altImgProjet, lienProjet, languageProjet)
    {
        this.nomProjet = nomProjet,
        this.imgProjet = imgProjet,
        this.altImgProjet = altImgProjet,
        this.lienProjet = lienProjet,
        this.languageProjet = languageProjet
    }
}

// Création d'un tableau qui comportera l'ensemble des Projets
let tabProjets = [];

// Création des Projets
let legardemanger = new projets('Le Garde Manger', 'ressources/projets/legardemanger.png', 'Image représentant le Projet Le Garde Manger', 'https://zenitude.github.io/legardemanger/', ['HTML', 'CSS', 'Bootstrap']);
let nordwebmakers = new projets('Nord WebmakerS', 'ressources/projets/nordwebmakers.png', 'Image représentant le Projet Nord Webmakers', 'https://zenitude.github.io/nordwebmakers/', ['HTML', 'CSS', 'JavaScript']);
let bellaciao = new projets('Bella_Ciào', 'ressources/projets/bellaciao.png', 'Image représentant le Projet Bella_Ciào', 'https://github.com/Zenitude/bellaciao', ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']);
let portfolio = new projets('Portfolio', 'ressources/projets/portfolio.png', 'Image représentant le Projet Portfolio', '', ['CSS', 'JavaScript']);
let projet5 = new projets('Projet 5', 'ressources/projets/projet5.png', 'Image représentant le Projet 5', '', []);
let projet6 = new projets('Projet 6', 'ressources/projets/projet6.png', 'Image représentant le Projet 6', '', []);
let projet7 = new projets('Projet 7', 'ressources/projets/projet7.png', 'Image représentant le Projet 7', '', []);
let projet8 = new projets('Projet 8', 'ressources/projets/projet8.png', 'Image représentant le Projet 8', '', []);
let projet9 = new projets('Projet 9', 'ressources/projets/projet9.png', 'Image représentant le Projet 9', '', []);
let projet10 = new projets('Projet 10', 'ressources/projets/projet10.png', 'Image représentant le Projet 10', '', []);

// Ajout des projets dans le tableau tabProjets
tabProjets.push
(
    legardemanger, 
    nordwebmakers, 
    bellaciao, 
    portfolio//,
    // projet5,
    // projet6,
    // projet7,
    // projet8,
    // projet9,
    // projet10
);

// Création de la section Projets
const sectionProjets = document.createElement('section');
sectionProjets.setAttribute('class', 'sectionProjets');
sectionProjets.setAttribute('id', 'portfolio');
containerPrincipal.appendChild(sectionProjets);

// Création de la partie titre
const divTitreProjets = document.createElement('div');
divTitreProjets.setAttribute('class', 'titreProjets');
sectionProjets.appendChild(divTitreProjets);

// Création du titre de la section Projet
const titreProjets = document.createElement('h2');
titreProjets.innerText = 'Mes réalisations';
divTitreProjets.appendChild(titreProjets);

// Création du paragraphe d'accroche
const paragrapheProjets = document.createElement('p');
paragrapheProjets.setAttribute('class', 'paragrapheProjets');
paragrapheProjets.innerText = 'Internet is written in our hands';
sectionProjets.appendChild(paragrapheProjets);

// Création du container du contenu de la section Projet
const contenuProjets = document.createElement('div');
contenuProjets.setAttribute('class', 'contenuProjets');
sectionProjets.appendChild(contenuProjets);



// Création du tableau qui récupèrera les cases des projets
let tabCasesProjets = [];

// Création des cases de projets
for(let i = 0 ; i < tabProjets.length ; i++)
{
    let lienProjet = document.createElement('a');
    lienProjet.setAttribute('href', '');

    let caseProjet = document.createElement('div');
    caseProjet.setAttribute('class', 'projets');
    caseProjet.classList.add(`projet${i}`);

    let imgProjet = document.createElement('img');
    imgProjet.setAttribute('class', 'imgProjet');
    imgProjet.setAttribute('src', '');

    let nomProjet = document.createElement('p');
    nomProjet.setAttribute('class','nomProjet');

    let nameProjet = document.createElement('h3');
    nomProjet.appendChild(nameProjet);

    let languagesProjet = document.createElement('div');
    languagesProjet.setAttribute('class', 'languages');

    caseProjet.appendChild(imgProjet);
    caseProjet.appendChild(nomProjet);
    lienProjet.appendChild(caseProjet);
    caseProjet.appendChild(languagesProjet);
    
    tabCasesProjets.push(lienProjet);
}

tabCasesProjets.forEach(projet =>
{
    contenuProjets.appendChild(projet);
});

// Insertion des images et nom de projets
for(let i = 0 ; i < tabCasesProjets.length ; i++)
{
    /*Insertion du lien du Projet */
    tabCasesProjets[i].setAttribute('href', tabProjets[i]['lienProjet']);

    /* Insertion de la source et du alt de l'image */
    tabCasesProjets[i].childNodes[0].childNodes[0].setAttribute('src', tabProjets[i]['imgProjet']);
    tabCasesProjets[i].childNodes[0].childNodes[0].setAttribute('alt', tabProjets[i]['altImgProjet']);

    /* Insertion du nom du projet */
    tabCasesProjets[i].childNodes[0].childNodes[1].childNodes[0].innerText = tabProjets[i]['nomProjet'];
}

// Animation d'apparition
let optionsProjets = 
{
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0.4
}

function apparitionProjets(entries)
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            header.style.background = 'linear-gradient(135deg, #000, #333, #000)';
            header.style.borderBottom = '1px solid #000';
            header.childNodes[1].childNodes[0].childNodes[0].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[1].style.borderBottom = '2px solid white';
            header.childNodes[1].childNodes[0].childNodes[2].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[3].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[4].style.borderBottom = 'none';

            tabCasesProjets.forEach(projet =>
            {
                projet.childNodes[0].style.opacity = 1;
                projet.childNodes[0].style.transform = 'none';
                projet.childNodes[0].childNodes[1].style.height = '100%';

                paragrapheProjets.style.opacity = 1;
                paragrapheProjets.transform = 'none';

            });  
        }
    });
}

const observerProjets = new IntersectionObserver(apparitionProjets, optionsProjets);

observerProjets.observe(sectionProjets);