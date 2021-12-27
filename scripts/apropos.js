// Création de la section À propos / Creating the About section
let sectionAPropos = document.createElement('section');
sectionAPropos.setAttribute('class', 'sectionAPropos');
sectionAPropos.setAttribute('id', 'apropos');
containerPrincipal.appendChild(sectionAPropos);

// Création de la partie titre / Creation of the title part
const divTitreAPropos = document.createElement('div');
divTitreAPropos.setAttribute('class', 'titreAPropos');
sectionAPropos.appendChild(divTitreAPropos);

// Création du titre de la section À Propos / Creating the Section Title About
const titreAPropos = document.createElement('h2');
titreAPropos.innerText = 'Qui suis-je ?';
divTitreAPropos.appendChild(titreAPropos);

// Création du container du contenu de la section À Propos / Creation of the container of the contents of the About section
const contenuAPropos = document.createElement('div');
contenuAPropos.setAttribute('class', 'contenuAPropos');
sectionAPropos.appendChild(contenuAPropos);

contenuAPropos.innerHTML = `<p>J'ai effectué des études dans le domaine de la comptabilité en allant jusqu'au BTS en 2010, puis j'ai effectué plusieurs petits boulots les années qui ont suivis la fin des mes études pour un jour de 2021, passé la trentaine, m'engager dans une reconversion vers un métier plus proches de mes passions et de ce que je faisais pendant mon temps libre, le développement web.</p>

<p>Passionné par le web, les jeux vidéos et l'informatique, j'ai commencé il y a plus de 10 ans (2011) à me former au HTML et CSS en pratiquant sur divers forum de jeux vidéos que j'avais créé pour des jeux que j'appréciai via des sites de création de forum préconçus. Lassé d'utiliser les mêmes interfaces limitées pendant des années, je suis passé à un choix plus large, les wikis, qui offraient un peu plus de possibilités en terme d'échange avec l'utilisateur. Je continue toujours de mettre à jour certains d'entre eux (wikis : 

    <a href="https://anthem.fandom.com/fr/wiki/Anthem_Wiki_FR">Anthem</a>, 
    <a href="https://pcbuildingsim.fandom.com/fr/wiki/PC_Building_Simulator_Wiki_FR">Pc Building Simulator</a> et 
    <a href="https://outriders.fandom.com/fr/wiki/Outriders_Wiki">Outriders</a>).</p>

<p>Lorsque mon choix de reconversion a été fait, j'ai dû reprendre tout de zéro. Et oui ! ; le domaine du développement évoluant constamment mes bases n'étaient plus d'actualités. J'ai donc commencé à me re-former via plusieurs sites en ligne (
    
    <a href="https://openclassrooms.com/fr/">OpenClassRoom</a> et 
    l'<a href="https://www.ecole-du-web.net/">École du Web</a>

) en réapprenant les langages de base nécessaires à tout bon développeur, HMTL5, CSS3 ainsi que le fameux JavaScript que j'apprécis manipuler. Après cinq mois d'auto-formation, j'ai intégré le Greta du Grand Hainaut situé dans la ville de Cambrai pour tenter d'obtenir un diplôme reconnu par l'état et compléter mon apprentissage, avoir mes premières expériences dans le domaine, tout en continuant d'apprendre avec les sites en lignes.</p>`

let tabAPropos = document.querySelectorAll('.contenuAPropos p');

// Animation d'apparition / Appearance Animation
let optionsAPropos = 
{
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0.3
}

function apparitionAPropos(entries)
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            header.childNodes[1].childNodes[0].childNodes[0].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[1].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[2].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[3].style.borderBottom = '2px solid white';
            header.childNodes[1].childNodes[0].childNodes[4].style.borderBottom = 'none';

            tabAPropos.forEach(paragraphe =>
            {
                paragraphe.style.opacity = 1;
                paragraphe.style.transform = 'none';                
            });  
        }
    });
}

const observerAPropos = new IntersectionObserver(apparitionAPropos, optionsAPropos);

observerAPropos.observe(contenuAPropos);
