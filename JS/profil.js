var Photographers = [
  {
    name: "Mimi Keel",
    id: 243,
    city: "London",
    country: "UK",
    tags: ["portrait", "events", "travel", "animals"],
    tagline: "Voir le beau dans le quotidien",
    price: 400,
    portrait: "MimiKeel.jpg",
    alt: "Mimi Keel",
  },
  {
    name: "Ellie-Rose Wilkens",
    id: 930,
    city: "Paris",
    country: "France",
    tags: ["sports", "architecture"],
    tagline: "Capturer des compositions complexes",
    price: 250,
    portrait: "EllieRoseWilkens.jpg",
    alt: "Ellie-Rose Wilkens",
  },
  {
    name: "Tracy Galindo",
    id: 82,
    city: "Montreal",
    country: "Canada",
    tags: ["art", "fashion", "events"],
    tagline: "Photographe freelance",
    price: 500,
    portrait: "TracyGalindo.jpg",
    alt: "Tracy Galindo",
  },
  {
    name: "Nabeel Bradford",
    id: 527,
    city: "Mexico City",
    country: "Mexico",
    tags: ["travel", "portrait"],
    tagline: "Toujours aller de l'avant",
    price: 350,
    portrait: "NabeelBradford.jpg",
    alt: "Nabeel Bradford",
  },
  {
    name: "Rhode Dubois",
    id: 925,
    city: "Barcelona",
    country: "Spain",
    tags: ["sport", "fashion", "events", "animals"],
    tagline: "Je crée des souvenirs",
    price: 275,
    portrait: "RhodeDubois.jpg",
    alt: "Rhode Dubois",
  },
  {
    name: "Marcel Nikolic",
    id: 195,
    city: "Berlin",
    country: "Germany",
    tags: ["travel", "architecture"],
    tagline: "Toujours à la recherche de LA photo",
    price: 300,
    portrait: "MarcelNikolic.jpg",
    alt: "Marcel Nikolic",
  },
];

var media = [
  {
    id: 342550,
    photographerId: 82,
    title: "Fashion Yellow Beach",
    image: "Fashion_Yellow_Beach.jpg",
    tags: ["fashion"],
    likes: 62,
    date: "2011-12-08",
    price: 55,
  },

  {
    id: 8520927,
    photographerId: 82,
    title: "Fashion Urban Jungle",
    image: "Fashion_Urban_Jungle.jpg",
    tags: ["fashion"],
    likes: 11,
    date: "2011-11-06",
    price: 55,
  },
  {
    id: 9025895,
    photographerId: 82,
    title: "Fashion Pattern on a Pattern",
    image: "Fashion_Pattern_on_Pattern.jpg",
    tags: ["fashion"],
    likes: 72,
    date: "2013-08-12",
    price: 55,
  },
  {
    id: 9275938,
    photographerId: 82,
    title: "Wedding Gazebo",
    image: "Event_WeddingGazebo.jpg",
    tags: ["events"],
    likes: 69,
    date: "2018-02-22",
    price: 55,
  },
  {
    id: 2053494,
    photographerId: 82,
    title: "Sparkles",
    image: "Event_Sparklers.jpg",
    tags: ["events"],
    likes: 2,
    date: "2020-05-25",
    price: 55,
  },
  {
    id: 7324238,
    photographerId: 82,
    title: "18th Anniversary",
    image: "Event_18thAnniversary.jpg",
    tags: ["events"],
    likes: 33,
    date: "2019-06-12",
    price: 55,
  },
  {
    id: 8328953,
    photographerId: 82,
    title: "Wooden Horse Sculpture",
    video: "Art_Wooden_Horse_Sculpture.mp4",
    tags: ["art"],
    likes: 24,
    date: "2011-12-08",
    price: 100,
  },
  {
    id: 7502053,
    photographerId: 82,
    title: "Triangle Man",
    image: "Art_Triangle_Man.jpg",
    tags: ["art"],
    likes: 88,
    date: "2007-05-07",
    price: 55,
  },
  {
    id: 8523492,
    photographerId: 82,
    title: "Purple Tunnel",
    image: "Art_Purple_light.jpg",
    tags: ["art"],
    likes: 24,
    date: "2018-05-05",
    price: 55,
  },
  {
    id: 75902334,
    photographerId: 82,
    title: "Art Mine",
    image: "Art_Mine.jpg",
    tags: ["art"],
    likes: 75,
    date: "2019-11-25",
    price: 55,
  },
  {
    id: 73852953,
    photographerId: 925,
    title: "8 Rows",
    image: "Sport_2000_with_8.jpg",
    tags: ["sport"],
    likes: 52,
    date: "2013-02-30",
    price: 70,
  },
  {
    id: 92758372,
    photographerId: 925,
    title: "Fashion Wings",
    image: "Fashion_Wings.jpg",
    tags: ["fashion"],
    likes: 58,
    date: "2018-07-17",
    price: 70,
  },
  {
    id: 32958383,
    photographerId: 925,
    title: "Melody Red on Stripes",
    image: "Fashion_Melody_Red_on_Stripes.jpg",
    tags: ["fashion"],
    likes: 11,
    date: "2019-08-12",
    price: 70,
  },
  {
    id: 928587383,
    photographerId: 925,
    title: "Venture Conference",
    image: "Event_VentureConference.jpg",
    tags: ["events"],
    likes: 2,
    date: "2019-01-02",
    price: 70,
  },
  {
    id: 725639493,
    photographerId: 925,
    title: "Product Pitch",
    image: "Event_ProductPitch.jpg",
    tags: ["events"],
    likes: 3,
    date: "2019-05-20",
    price: 70,
  },
  {
    id: 23394384,
    photographerId: 925,
    title: "Musical Festival Keyboard",
    image: "Event_KeyboardCheck.jpg",
    tags: ["events"],
    likes: 52,
    date: "2019-07-18",
    price: 70,
  },
  {
    id: 87367293,
    photographerId: 925,
    title: "Musical Festival Singer",
    image: "Event_Emcee.jpg",
    tags: ["events"],
    likes: 23,
    date: "2018-02-22",
    price: 70,
  },
  {
    id: 593834784,
    photographerId: 925,
    title: "Animal Majesty",
    image: "Animals_Majesty.jpg",
    tags: ["animals"],
    likes: 52,
    date: "2017-03-13",
    price: 70,
  },
  {
    id: 83958935,
    photographerId: 925,
    title: "Cute Puppy on Sunset",
    video: "Animals_Puppiness.mp4",
    tags: ["animals"],
    likes: 52,
    date: "2016-06-12",
    price: 70,
  },
  {
    id: 394583434,
    photographerId: 527,
    title: "Rock Mountains",
    video: "Travel_Rock_Mountains.mp4",
    tags: ["travel"],
    likes: 23,
    date: "2017-03-18",
    price: 45,
  },
  {
    id: 343423425,
    photographerId: 527,
    title: "Outdoor Baths",
    image: "Travel_Outdoor_Baths.jpg",
    tags: ["travel"],
    likes: 101,
    date: "2017-04-03",
    price: 45,
  },
  {
    id: 73434243,
    photographerId: 527,
    title: "Road into the Hill",
    image: "Travel_Road_into_Hill.jpg",
    tags: ["travel"],
    likes: 99,
    date: "2018-04-30",
    price: 45,
  },
  {
    id: 23425523,
    photographerId: 527,
    title: "Bridge into the Forest",
    image: "Travel_Bridge_into_Forest.jpg",
    tags: ["travel"],
    likes: 34,
    date: "2016-04-05",
    price: 45,
  },
  {
    id: 23134513,
    photographerId: 527,
    title: "Boat Wonderer",
    image: "Travel_Boat_Wanderer.jpg",
    tags: ["travel"],
    likes: 23,
    date: "2017-03-18",
    price: 45,
  },
  {
    id: 92352352,
    photographerId: 527,
    title: "Portrait Sunkiss",
    image: "Portrait_Sunkissed.jpg",
    tags: ["portrait"],
    likes: 66,
    date: "2018-05-24",
    price: 45,
  },
  {
    id: 34513453,
    photographerId: 527,
    title: "Shaw Potrait",
    image: "Portrait_Shaw.jpg",
    tags: ["portait"],
    likes: 52,
    date: "2017-04-21",
    price: 45,
  },
  {
    id: 23523533,
    photographerId: 527,
    title: "Alexandra",
    image: "Portrait_Alexandra.jpg",
    tags: ["portait"],
    likes: 95,
    date: "2018-11-02",
    price: 45,
  },
  {
    id: 525834234,
    photographerId: 527,
    title: "Afternoon Break",
    image: "Portrait_AfternoonBreak.jpg",
    tags: ["portait"],
    likes: 25,
    date: "2019-01-02",
    price: 45,
  },
  {
    id: 623534343,
    photographerId: 243,
    title: "Lonesome",
    image: "Travel_Lonesome.jpg",
    tags: ["travel"],
    likes: 88,
    date: "2019-02-03",
    price: 45,
  },
  {
    id: 625025343,
    photographerId: 243,
    title: "Hillside Color",
    image: "Travel_HillsideColor.jpg",
    tags: ["travel"],
    likes: 85,
    date: "2019-04-03",
    price: 45,
  },
  {
    id: 2525345343,
    photographerId: 243,
    title: "Wednesday Potrait",
    image: "Portrait_Wednesday.jpg",
    tags: ["portait"],
    likes: 34,
    date: "2019-04-07",
    price: 45,
  },
  {
    id: 2523434634,
    photographerId: 243,
    title: "Nora Portrait",
    image: "Portrait_Nora.jpg",
    tags: ["portait"],
    likes: 63,
    date: "2019-04-07",
    price: 45,
  },
  {
    id: 398847109,
    photographerId: 243,
    title: "Raw Black Portrait",
    image: "Portrait_Background.jpg",
    tags: ["portait"],
    likes: 55,
    date: "2019-06-20",
    price: 45,
  },
  {
    id: 2534342,
    photographerId: 243,
    title: "Seaside Wedding",
    image: "Event_SeasideWedding.jpg",
    tags: ["events"],
    likes: 25,
    date: "2019-06-21",
    price: 45,
  },
  {
    id: 65235234,
    photographerId: 243,
    title: "Boulder Wedding",
    image: "Event_PintoWedding.jpg",
    tags: ["events"],
    likes: 52,
    date: "2019-06-25",
    price: 45,
  },
  {
    id: 23523434,
    photographerId: 243,
    title: "Benevides Wedding",
    image: "Event_BenevidesWedding.jpg",
    tags: ["events"],
    likes: 77,
    date: "2019-06-28",
    price: 45,
  },
  {
    id: 5234343,
    photographerId: 243,
    title: "Wild Horses in the Mountains",
    video: "Animals_Wild_Horses_in_the_mountains.mp4",
    tags: ["animals"],
    likes: 142,
    date: "2019-08-23",
    price: 60,
  },
  {
    id: 95234343,
    photographerId: 243,
    title: "Rainbow Bird",
    image: "Animals_Rainbow.jpg",
    tags: ["animals"],
    likes: 59,
    date: "2019-07-02",
    price: 60,
  },
  {
    id: 52343416,
    photographerId: 195,
    title: "Japanese Tower, Kyoto",
    image: "Travel_Tower.jpg",
    tags: ["travel"],
    likes: 25,
    date: "2019-04-03",
    price: 60,
  },
  {
    id: 2523434,
    photographerId: 195,
    title: "Senset on Canals, Venice",
    image: "Travel_SunsetonCanals.jpg",
    tags: ["travel"],
    likes: 53,
    date: "2019-05-06",
    price: 60,
  },
  {
    id: 95293534,
    photographerId: 195,
    title: "Mountain and Lake",
    image: "Travel_OpenMountain.jpg",
    tags: ["travel"],
    likes: 33,
    date: "2019-05-12",
    price: 60,
  },
  {
    id: 356234343,
    photographerId: 195,
    title: "City Bike and Stair, Paris",
    image: "Travel_Bike_and_Stair.jpg",
    tags: ["travel"],
    likes: 53,
    date: "2019-06-20",
    price: 60,
  },
  {
    id: 235234343,
    photographerId: 195,
    title: "Adventure Door, India",
    image: "Travel_Adventure_Door.jpg",
    tags: ["travel"],
    likes: 63,
    date: "2019-06-26",
    price: 60,
  },
  {
    id: 6234234343,
    photographerId: 195,
    title: "Contrast, St Petersburg",
    image: "Architecture_Contrast.jpg",
    tags: ["architecture"],
    likes: 52,
    date: "2019-06-30",
    price: 60,
  },
  {
    id: 6525666253,
    photographerId: 195,
    title: "On a Hill, Tibet",
    image: "Architecture_On_a_hill.jpg",
    tags: ["architecture"],
    likes: 63,
    date: "2019-07-20",
    price: 60,
  },
  {
    id: 98252523433,
    photographerId: 195,
    title: "Leaning Tower, Pisa",
    image: "Architecture_Dome.jpg",
    tags: ["architecture"],
    likes: 88,
    date: "2020-01-05",
    price: 60,
  },
  {
    id: 9259398453,
    photographerId: 195,
    title: "Circle Highways, Buenos Aires",
    video:
      "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
    tags: ["architecture"],
    likes: 57,
    date: "2020-01-20",
    price: 65,
  },
  {
    id: 3523523534,
    photographerId: 195,
    title: "Corner Building and Blue Sky",
    image: "Architecture_Corner_Room.jpg",
    tags: ["architecture"],
    likes: 54,
    date: "2020-05-05",
    price: 60,
  },
  {
    id: 952343423,
    photographerId: 930,
    title: "Tricks in the Air",
    video: "Sport_Tricks_in_the_air.mp4",
    tags: ["sport"],
    likes: 150,
    date: "2018-02-30",
    price: 70,
  },
  {
    id: 235234343,
    photographerId: 930,
    title: "Climber",
    image: "Sport_Next_Hold.jpg",
    tags: ["sport"],
    likes: 101,
    date: "2018-03-05",
    price: 65,
  },
  {
    id: 235343222,
    photographerId: 930,
    title: "Surfer",
    image: "sport_water_tunnel.jpg",
    tags: ["sport"],
    likes: 103,
    date: "2018-03-10",
    price: 70,
  },
  {
    id: 7775342343,
    photographerId: 930,
    title: "Skier",
    image: "Sport_Sky_Cross.jpg",
    tags: ["sport"],
    likes: 77,
    date: "2018-04-16",
    price: 50,
  },
  {
    id: 9253445784,
    photographerId: 930,
    title: "Race End",
    image: "Sport_Race_End.jpg",
    tags: ["sport"],
    likes: 88,
    date: "2018-04-22",
    price: 65,
  },
  {
    id: 22299394,
    photographerId: 930,
    title: "Jump!",
    image: "Sport_Jump.jpg",
    tags: ["sport"],
    likes: 95,
    date: "2018-04-27",
    price: 70,
  },
  {
    id: 3452342633,
    photographerId: 930,
    title: "White Light",
    image: "Architecture_White_Light.jpg",
    tags: ["architecture"],
    likes: 52,
    date: "2018-05-03",
    price: 75,
  },
  {
    id: 939234243,
    photographerId: 930,
    title: "Water on Modern Building",
    image: "Architecture_Water_on_Modern.jpg",
    tags: ["architecture"],
    likes: 55,
    date: "2018-05-10",
    price: 72,
  },
  {
    id: 222959233,
    photographerId: 930,
    title: "Horseshoe",
    image: "Architecture_Horseshoe.jpg",
    tags: ["architecture"],
    likes: 85,
    date: "2018-05-15",
    price: 71,
  },
  {
    id: 965933434,
    photographerId: 930,
    title: "Cross Bar",
    image: "Architecture_Cross_Bar.jpg",
    tags: ["architecture"],
    likes: 66,
    date: "2018-05-20",
    price: 58,
  },
  {
    id: 777723343,
    photographerId: 930,
    title: "Connected Curves",
    image: "Architecture_Connected_Curves.jpg",
    tags: ["architecture"],
    likes: 79,
    date: "2018-05-21",
    price: 80,
  },
];

var photographersData = JSON.parse(JSON.stringify(Photographers));
var mediaData = JSON.parse(JSON.stringify(media));

//---------------------------------------------------------------------
import Photographe from "./class/photographe.js";
import Media from "./class/medias.js";
import Tags from "./class/tags.js";
//---------------------------------------------------------------------

// Retrieves each media according to the photographer's id

function triId(id) {
  return mediaData.filter((media) => media.photographerId == id);
}

const mediaMimi = triId(243);
const tracy = triId(82);
const Ellie = triId(930);
const Nabeel = triId(527);
const Rhode = triId(925);
const Marcel = triId(195);

const allMedia = document.querySelector("section");

function craft(items) {
  allMedia.innerHTML = "";
  for (let a = 0; a < items.length; a++) {
    const media = new Media(items[a]);
    const stocke = media.getElementMedia();

    allMedia.appendChild(stocke);
  }
}

const select = document.getElementById("select");
const arrowDownSelect = document.querySelector(".arrow_down");

select.addEventListener("focus", (e) => {
  arrowDownSelect.classList.add("rotate");
});

select.addEventListener("blur", () => {
  arrowDownSelect.classList.remove("rotate");
});

// Sort each media according to the chosen option

function sort(items) {
  allMedia.innerHTML = "";
  craft(items);
  select.addEventListener("change", () => {
    switch (select.value) {
      case "Popularite":
        items.sort((a, b) => a.likes - b.likes);
        craft(items);
        break;
      case "Date":
        items.sort((a, b) => (a.date > b.date ? 1 : -1));
        craft(items);
        break;
      case "Titre":
        items.sort((a, b) => (a.title > b.title ? 1 : -1));
        craft(items);
        break;
      default:
    }
  });
}

// Depending on the photographer chooses returns his profile and these media

const main = document.querySelector("main");
const locationPage = window.location.search;

switch (locationPage) {
  case "?id=243":
    const newProfil1 = new Photographe(photographersData[0]).getElementProfil();
    main.appendChild(newProfil1);
    sort(mediaMimi);
    break;
  case "?id=930":
    const newProfil2 = new Photographe(photographersData[1]).getElementProfil();
    main.appendChild(newProfil2);
    sort(Ellie);
    break;
  case "?id=82":
    const newProfil3 = new Photographe(photographersData[2]).getElementProfil();
    main.appendChild(newProfil3);
    sort(tracy);
    break;
  case "?id=527":
    const newProfil4 = new Photographe(photographersData[3]).getElementProfil();
    main.appendChild(newProfil4);
    sort(Nabeel);
    break;
  case "?id=925":
    const newProfil5 = new Photographe(photographersData[4]).getElementProfil();
    main.appendChild(newProfil5);
    sort(Rhode);
    break;
  case "?id=195":
    const newProfil6 = new Photographe(photographersData[5]).getElementProfil();
    main.appendChild(newProfil6);
    sort(Marcel);
    break;
  default:
    const newProfil = new Photographe(photographersData[0]).getElementProfil();
    main.appendChild(newProfil);
    sort(mediaMimi);
}

// Adds the total number of likes of each media

document.getElementById("total_like").innerHTML = Media.totalLikes;

//---------------- Lightbox ----------------

const modalLightbox = document.querySelector(".modal_lightbox");
const titleLightbox = document.querySelector(".title_lightbox");
const lightboxMedia = document.querySelector(".lightbox_media");
const mediaA = document.querySelectorAll(".media-link");
const nbSlide = mediaA.length;
const body = document.querySelector("body");
const close = document.querySelector(".btn_close");
const left = document.querySelector(".btn_arrow_left");
const right = document.querySelector(".btn_arrow_right");
let count = 0;
let el;
let video;

// Create the image or video in the lightbox

for (let l = 0; l < mediaA.length; l++) {
  console.log(mediaA[l].href);
  mediaA[l].addEventListener("click", (e) => {
    e.preventDefault();
    modalLightbox.style.display = "flex";
    body.classList.add("hidden");
    getimage(mediaA[l]);
  });
}

function getimage(link) {
  if (link.children[0].localName == "img") {
    el = document.createElement("img");
    el.classList.add("img_lightbox");
    el.src = link.href;
    titleLightbox.innerText = link.children[0].alt;
    lightboxMedia.appendChild(el);
  } else if (link.children[0].localName == "video") {
    video = document.createElement("video");
    video.setAttribute("class", "video_ligtbox");
    video.setAttribute("controls", "true");
    video.src = link.href;
    titleLightbox.innerText = link.children[0].attributes.alt.nodeValue;
    lightboxMedia.appendChild(video);
  }
}

video = document.createElement("video");
el = document.createElement("img");

// Allows you to navigate in the lightbox between each media

function slideNext(e) {
  if (count < nbSlide - 1) {
    count++;
    if (mediaA[count].children[0].localName == "img") {
      lightboxMedia.replaceChild(el, lightboxMedia.children[0]);
      el.src = mediaA[count].href;
      titleLightbox.innerText = mediaA[count].children[0].alt;
    } else if (mediaA[count].children[0].localName == "video") {
      lightboxMedia.replaceChild(video, lightboxMedia.children[0]);
      video.setAttribute("controls", "true");
      video.setAttribute("class", "video_ligtbox");
      video.src = mediaA[count].href;
      titleLightbox.innerText = mediaA.children[0].attributes.alt.nodeValue;
    }
  } else {
    count = 0;
  }
}

function slideLeft(e) {
  if (count > 0) {
    count--;
    if (mediaA[count].children[0].localName == "img") {
      lightboxMedia.replaceChild(el, lightboxMedia.children[0]);
      el.src = mediaA[count].href;
      titleLightbox.innerText = mediaA[count].children[0].alt;
    } else {
      lightboxMedia.replaceChild(video, lightboxMedia.children[0]);
      video.setAttribute("controls", "true");
      video.setAttribute("class", "video_ligtbox");
      video.src = mediaA[count].href;
      titleLightbox.innerText = mediaA.children[0].attributes.alt.nodeValue;
    }
  } else {
    count = nbSlide - 1;
  }
}

function closeLightbox() {
  modalLightbox.style.display = "none";
  body.classList.remove("hidden");
  lightboxMedia.innerHTML = "";
}

right.addEventListener("click", slideNext);
left.addEventListener("click", slideLeft);
close.addEventListener("click", closeLightbox);

window.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (key) {
    case "ArrowLeft":
      console.log("left");
      slideLeft();
      break;
    case "ArrowRight":
      console.log("Right");
      slideNext();
      break;
    case "Escape":
      closeModal();
      closeLightbox();
  }
});

//---------------- Formulaire --------------

const btnContact = document.querySelector(".btn_contact");
const btnClose = document.getElementById("close");
const modalbg = document.getElementById("background");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const BtnSubmit = document.querySelector(".btn_submit");
const email = document.getElementById("email");
const message = document.getElementById("message");
const titlemodale = document.querySelector(".title_modal");
const namePhotographe = document.querySelector(".photographer_name");

titlemodale.innerHTML = "Contactez moi " + "<br>" + namePhotographe.innerText;

// Open & close modal

btnContact.addEventListener("click", () => {
  modalbg.style.display = "block";
  firstName.focus();
});

function closeModal() {
  modalbg.style.display = "none";
}

btnClose.addEventListener("click", closeModal);

// Log Value Input Form

BtnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(message.value);
});
