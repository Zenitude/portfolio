// Création de la section Accueil / Creating the Home section
const sectionAccueil = document.createElement('section');
sectionAccueil.setAttribute('class', 'sectionAccueil');
sectionAccueil.setAttribute('id', 'accueil');
containerPrincipal.appendChild(sectionAccueil);

sectionAccueil.appendChild(header)

// API Météo / Weather API
const cleAPI = "cc805b94763f12a71588c1db269528ab";

const meteo = document.createElement('div');
meteo.setAttribute('class', 'meteo');

const ciel = document.createElement('div'); 
ciel.setAttribute('class', 'ciel');

const temp = document.createElement('div');
temp.setAttribute('class', 'temperature');

const region = document.createElement('div');
region.setAttribute('class', 'region');

meteo.appendChild(ciel);
meteo.appendChild(temp);
meteo.appendChild(region);

sectionAccueil.appendChild(meteo);

if(navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition(position => 
  {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    appelAPI(latitude,longitude);
    
  },() => 
  {
    alert(`Vous avez refusé la géolocalisation, l'application météo ne fonctionnera pas.`);
  });
}

function appelAPI(lat, long)
{
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${cleAPI}`)
    .then(response => response.json())
    .then(data =>
    {
        donneesAPI = data;
        meteoDuJour(donneesAPI);
    });
}

function meteoDuJour(donneesAPI)
{ 
  ciel.innerText = `${donneesAPI.current.weather[0].description}`;
  temp.innerText = `${Math.trunc(donneesAPI.current.temp)}° C`;
  region.innerText = `${donneesAPI.timezone}`;
}

// Création du container du message d'accueil / Creation of the welcome message container
const messageAccueil = document.createElement('div');
messageAccueil.setAttribute('class', 'msgAccueil');
sectionAccueil.appendChild(messageAccueil);

// Message d'accueil / Welcome message
new Typewriter(messageAccueil, 
{
    loop: true,
    deleteSpeed: 30 
})
.changeDelay(30)
.typeString('<span>Moi c\'est Rudy Mollet</span>')
.pauseFor(300)
.typeString("<span>, Dev Full-Stack</span> !")
.pauseFor(800)
.deleteChars(13)
.typeString('<span> HTML</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span> Bootstrap</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span> Javascript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span> PHP et MySQL</span> !')
.pauseFor(1000)
.deleteChars(14)
.typeString('<span> formé avec :</span> ')
.pauseFor(1000)
.deleteChars(46)
.typeString('<span class="ecoleDuWeb"> <img src="ressources/accueil/ecoleduweb.png"> ÉCOLE DU WEB</span>')
.pauseFor(1000)
.deleteChars(14)
.typeString('<span class="openclassroom"> <img src="ressources/accueil/openclassroom.png">PENCLASSROOM</span>')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span class="greta"> <img src="ressources/accueil/greta.png"> <img src="ressources/accueil/logoCambrai.png"></span>')
.pauseFor(1500)
.deleteChars(3)
.typeString('<span>Bienvenue sur mon </span>')
.typeString('<span>Port</span>')
.typeString('<span>folio!</span>')
.pauseFor(1000)
.start()

// Création du container de la video en background / Creation of the video container in background
let tabVideo = [];

class video {
  constructor(lienVideo, typeVideo)
  {
    this.lienVideo = lienVideo;
    this.typeVideo = typeVideo;
  }
} 

let videoMp4 = new video('../ressources/accueil/terre.mp4', 'mp4');
let videoOgv = new video('../ressources/accueil/terre.ogv', 'ogv');
let videoWmv = new video('../ressources/accueil/terre.wmv', 'wmv');
let videoAvi = new video('../ressources/accueil/terre.avi', 'avi');

tabVideo.push(
  videoMp4,
  videoOgv,
  videoWmv,
  videoAvi
);

const videoBackground = document.createElement('video');
videoBackground.setAttribute('loop', '');
videoBackground.setAttribute('muted', '');
videoBackground.setAttribute('preload', 'auto');
videoBackground.setAttribute('poster', '../ressources/accueil/poster.png');

tabVideo.forEach(video => 
{
  const sourceVideoBackground = document.createElement('source');
  sourceVideoBackground.setAttribute('src', video["lienVideo"]);
  sourceVideoBackground.setAttribute('type', `video/${video["typeVideo"]}`);
  videoBackground.appendChild(sourceVideoBackground);
});

messageAccueil.appendChild(videoBackground);

const playAndPause = document.createElement('div');
playAndPause.style.backgroundImage = 'url(../ressources/accueil/play.svg)';
playAndPause.setAttribute('class', 'playAndPause');
playAndPause.classList.add('play');
messageAccueil.appendChild(playAndPause);

playAndPause.addEventListener('click', () =>
{
  if(playAndPause.classList.contains('play'))
  {
    videoBackground.play();
    playAndPause.classList.remove('play');
    playAndPause.classList.add('pause');
    playAndPause.style.backgroundImage = 'url(../ressources/accueil/pause.svg)';
  }
  else
  {
    videoBackground.pause();
    playAndPause.classList.remove('pause');
    playAndPause.classList.add('play');
    playAndPause.style.background = 'url(../ressources/accueil/play.svg)';
  }
})

// Animation d'apparition / Appearance Animation
let optionsAccueil = 
{
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0.4
}

function apparitionAccueil(entries)
{
  entries.forEach(entry =>
  {
      if(entry.isIntersecting)
      {
          header.style.background = 'none';
          header.style.borderBottom = 'none';
          header.childNodes[1].childNodes[0].childNodes[0].style.borderBottom = '2px solid white';
          header.childNodes[1].childNodes[0].childNodes[1].style.borderBottom = 'none';
          header.childNodes[1].childNodes[0].childNodes[2].style.borderBottom = 'none';
          header.childNodes[1].childNodes[0].childNodes[3].style.borderBottom = 'none';
          header.childNodes[1].childNodes[0].childNodes[4].style.borderBottom = 'none';
      }
  });
}

const observerAccueil = new IntersectionObserver(apparitionAccueil, optionsAccueil);

observerAccueil.observe(sectionAccueil);
