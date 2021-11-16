import Tags from "./tags.js";

export default class Photographe {
  constructor(Photographe) {
    this.name = Photographe.name;
    this.tagline = Photographe.tagline;
    this.id = Photographe.id;
    this.country = Photographe.country;
    this.city = Photographe.city;
    this.price = Photographe.price;
    this.portrait = Photographe.portrait;
    this.tags = Photographe.tags;
  }

  // Create and flip the photographer's view in miniature (page index.html)

  getElementIndex() {
    //const main = document.querySelector("main");
    const divPhotographe = document.createElement("div");
    const tagFiltre = document.querySelector(".tags_list");
    divPhotographe.setAttribute("class", "photographer");

    divPhotographe.innerHTML = `
      <a class="lien_photographer" href="pageHTML/Profil.html?id=${this.id}">
        <img class="photographer_portrait" src="Sample/Photographers ID Photos/${this.portrait}">
        <h2 class="photographer_name">${this.name}</h2>
      </a>
      <div class="photographer_infos">
          <p class="photographer_country">${this.city}, ${this.country}</p>
          <p class="photographer_tagline">${this.tagline}</p>
          <p class="photographer_price">${this.price}€/jour</p>
      </div>
      `;

    const tagsList = document.createElement("ul");
    tagsList.setAttribute("class", "photographer_taglist");

    let arrayTags = this.tags.map((tag) => new Tags(tag));

    arrayTags.forEach((tags) => {
      tagsList.appendChild(tags.element);
    });

    divPhotographe.appendChild(tagsList);

    return divPhotographe;
  }

  // Create and flip the view of the photographer profile (page profil.html)

  getElementProfil() {
    const container = document.createElement("div");
    const infosPhotographe = document.createElement("div");
    const btnFormulaire = document.createElement("button");
    const imgPhotographe = document.createElement("img");

    container.setAttribute("class", "card_photographer");
    infosPhotographe.setAttribute("class", "infos_photographer");
    btnFormulaire.setAttribute("class", "btn_contact");
    imgPhotographe.setAttribute("class", "photographer_portrait");
    imgPhotographe.setAttribute(
      "src",
      `../Sample/Photographers ID Photos/${this.portrait}`
    );

    infosPhotographe.innerHTML = `
    <h1 class="photographer_name">${this.name}</h1>
    <div>
      <p class="photographer_country">${this.city}, ${this.country}</p>
      <p class="photographer_tagline" >${this.tagline}</p>
    </div>
    `;
    const tagsList = document.createElement("ul");
    tagsList.setAttribute("class", "photographer_taglist");

    let arrayTags = this.tags.map((tag) => new Tags(tag));

    arrayTags.forEach((tags) => {
      tagsList.appendChild(tags.element);
    });

    infosPhotographe.appendChild(tagsList);

    btnFormulaire.innerHTML = "Contactez-moi";

    container.appendChild(infosPhotographe);
    container.appendChild(btnFormulaire);
    container.appendChild(imgPhotographe);

    return container;
  }
}
