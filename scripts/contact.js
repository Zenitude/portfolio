// Création de la section Contact / Creation of the Contact section
const sectionContact = document.createElement('section');
sectionContact.setAttribute('class', 'sectionContact');
sectionContact.setAttribute('id', 'contact');
containerPrincipal.appendChild(sectionContact)

// Création de la partie titre / Creation of the title part
const divTitreContact = document.createElement('div');
divTitreContact.setAttribute('class', 'titreContact');
sectionContact.appendChild(divTitreContact);

// Création du titre / Title creation
const titreContact = document.createElement('h2');
titreContact.innerText = 'Entrer en contact';
divTitreContact.appendChild(titreContact)

// Création du container du contenu de la section Contact / Creation of the container of the contents of the Contact section
const contenuContact = document.createElement('div');
contenuContact.setAttribute('class', 'contenuContact')
sectionContact.appendChild(contenuContact)

// Création du formulaire / Creating the form
const form = document.createElement('form');
form.setAttribute('class', 'formContact');

// Création du label et de l'input Nom / Creating the label and input Name
const labelNom = document.createElement('label');
labelNom.setAttribute('for', 'nomContact');
labelNom.innerText = 'Nom';

const inputNom = document.createElement('input');
inputNom.setAttribute('type', 'text');
inputNom.setAttribute('id', 'nomContact');
inputNom.setAttribute('name', 'nomContact');

// Création du label et de l'input Mail / Creation of the label and the Mail input
const labelMail = document.createElement('label');
labelMail.setAttribute('for', 'mailContact');
labelMail.innerText = 'E-mail';

const inputMail = document.createElement('input');
inputMail.setAttribute('type', 'mail');
inputMail.setAttribute('id', 'mailContact');
inputMail.setAttribute('name', 'mailContact');

// Création du label et du textarea Message / Creating the label and textarea Message
const labelMessage = document.createElement('label');
labelMessage.setAttribute('for', 'messageContact');
labelMessage.innerText = 'Message';

const areaMessage = document.createElement('textarea');
areaMessage.setAttribute('id', 'messageContact');
areaMessage.setAttribute('name', 'messageContact');

// Création du bouton pour envoyer le formulaire / Creating the button to send the form
const btnMessage = document.createElement('button');
btnMessage.setAttribute('class', 'btn-envoyer');
btnMessage.innerText = 'Envoyer';

// Insertions dans le formulaire et dans la section Contact / Insertions in the form and in the Contact section
form.appendChild(labelNom);
form.appendChild(inputNom);
form.appendChild(labelMail);
form.appendChild(inputMail);
form.appendChild(labelMessage);
form.appendChild(areaMessage);
form.appendChild(btnMessage);
contenuContact.appendChild(form);

// Création d'un hr de séparation / Creating a separation hr
const separateur = document.createElement('hr');
contenuContact.appendChild(separateur);

// Création de la grande partie Mail, Telepone, et Reseaux Sociaux / Creation of Mail, Telepone, and Social Networks
const divInformations = document.createElement('div');
divInformations.setAttribute('class', 'informations')
contenuContact.appendChild(divInformations);

// Création de la partie E-mail personnel / Creating the Personal E-mail Part
const divMail = document.createElement('div');

const titreEmail = document.createElement('h3');
titreEmail.innerText = 'E-mail';

const lienmail = document.createElement('a');
lienmail.setAttribute('href', 'mailto:mollet.rudy@gmail.com');

const contenuMail = document.createElement('span');
contenuMail.innerText = 'mollet.rudy@gmail.com'
lienmail.appendChild(contenuMail);

divMail.appendChild(titreEmail);
divMail.appendChild(lienmail);
divInformations.appendChild(divMail)

// Création de la partie téléphone / Creation of the telephone part
const divTel = document.createElement('div');

const titreTel = document.createElement('h3');
titreTel.innerText = 'Téléphone';

const contenuTel = document.createElement('span');
contenuTel.innerText = '06.28.18.86.67';

divTel.appendChild(titreTel);
divTel.appendChild(contenuTel);
divInformations.appendChild(divTel);

// Création de l'objet reseauxSociaux / Creating the Social Network Object
class reseauxSociaux
{
    constructor(nomReseau, lienReseau, imgReseau, altImgReseau)
    {
        this.nomReseau = nomReseau,
        this.lienReseau = lienReseau,
        this.imgReseau = imgReseau,
        this.altImgReseau = altImgReseau
    }
}

// Création du tableau qui contiendra tous les réseaux / Creation of the table that will contain all the networks
let tabReseaux = [];

// Création des réseaux / Creation of networks
let linkedin = new reseauxSociaux('linkedin', 'https://www.linkedin.com/in/rudy-mollet/', 'ressources/reseaux/linkedin.png', 'icône linkedin, cliquez pour accéder à linkedin');
let github = new reseauxSociaux('github', 'https://github.com/Zenitude', 'ressources/reseaux/github.png', 'icône github, cliquez pour accéder à github');

// Ajout des réseaux dans le tableau / Adding Networks to the Table
tabReseaux.push
(
    linkedin,
    github
);

// Création de la div qui contiendra les réseaux / Creation of the div that will contain the networks
const divReseaux = document.createElement('div');
divInformations.appendChild(divReseaux);

const titreReseaux = document.createElement('h3');
titreReseaux.innerText = 'Réseaux sociaux';
divReseaux.appendChild(titreReseaux);

// Création des liens et images / Creating links and images
tabReseaux.forEach(reseau =>
{
    let lienReseau = document.createElement('a');
    lienReseau.setAttribute('href', reseau['lienReseau']);

    let imgReseau = document.createElement('img');
    imgReseau.setAttribute('src', reseau['imgReseau']);
    imgReseau.setAttribute('alt', reseau['altImgReseau']);

    lienReseau.appendChild(imgReseau);
    divReseaux.appendChild(lienReseau);
});

// Animation d'apparition / Appearance Animation
let optionsContact = 
{
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0.3
}

function apparitionContact(entries)
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            header.childNodes[1].childNodes[0].childNodes[0].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[1].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[2].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[3].style.borderBottom = 'none';
            header.childNodes[1].childNodes[0].childNodes[4].style.borderBottom = '2px solid white';

        }
    });
}

const observerContact = new IntersectionObserver(apparitionContact, optionsContact);

observerContact.observe(sectionContact);
