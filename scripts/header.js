// Création du header
const header = document.createElement('header');

// Création du grand titre
const grandTitre = document.createElement('h1');
grandTitre.innerText = 'Rudy Mollet';
header.appendChild(grandTitre);

// Création de la navbar
const nav = document.createElement('nav');
header.appendChild(nav);

// Création de la liste
const liste = document.createElement('ul');
nav.appendChild(liste);

// Création des items
let tabItems = [];

for(let i = 0 ; i < 5; i++)
{
    let item = document.createElement('li');
    
    let lien = document.createElement('a');
    lien.setAttribute('href', '');

    item.appendChild(lien);

    tabItems.push(item);
}

// Ajout des informations pour chaque item
tabItems[0].childNodes[0].setAttribute('href', '#accueil');
tabItems[0].childNodes[0].innerText = 'Accueil';

tabItems[1].childNodes[0].setAttribute('href', '#portfolio');
tabItems[1].childNodes[0].innerText = 'Portfolio';

tabItems[2].childNodes[0].setAttribute('href', '#competences');
tabItems[2].childNodes[0].innerText = 'Compétences';

tabItems[3].childNodes[0].setAttribute('href', '#apropos');
tabItems[3].childNodes[0].innerText = 'À propos';

tabItems[4].childNodes[0].setAttribute('href', '#contact');
tabItems[4].childNodes[0].innerText = 'Contact';

// Ajout des items à la liste
tabItems.forEach(item =>
{
    liste.appendChild(item);
});

// Ajout du menu hamburger
const menuH = document.createElement('div');
menuH.setAttribute('class', 'menuH');
header.appendChild(menuH);

let tabHamburgers = [];

for(let i = 0 ; i < 3 ; i++)
{
    const hamburger = document.createElement('div');
    hamburger.setAttribute('class', 'hamburger');
    menuH.appendChild(hamburger);
    tabHamburgers.push(hamburger);
}

// Activation menuH au click
menuH.addEventListener('click', () =>
{
    tabHamburgers.forEach(hmbgr =>
    {
        hmbgr.classList.toggle('activeMenuH');
    });

    nav.classList.toggle('afficheNav');

});

// Event Scroll Navbar
const clientWidth = document.documentElement.clientWidth;

window.addEventListener('scroll', () =>
{
    const scrollTop = document.documentElement.scrollTop;
    
     if(scrollTop > 350 && scrollTop <= 500)
     {
         header.style.background = 'linear-gradient(135deg, #000, #333, #000)';
     }

});