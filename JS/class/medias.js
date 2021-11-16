export default class Media {
  constructor(ip) {
    this.id = ip.id;
    this.photographerId = ip.photographerId;
    this.title = ip.title;
    this.tags = ip.tags;
    this.likes = ip.likes;
    this.date = ip.date;
    this.price = ip.price;
    this.image = ip.image;
    this.video = ip.video;
    this.liked = false;

    Media.totalLikes += this.likes;
  }

  static totalLikes = 0;

  // Add or remove a like when clicking on the heart

  like = () => {
    if (this.liked) {
      this.likes -= 1;
      Media.totalLikes -= 1;
    } else {
      this.likes += 1;
      Media.totalLikes += 1;
    }

    this.liked = !this.liked;
    this.likeCount.innerHTML = this.likes;
    document.getElementById("total_like").innerHTML = Media.totalLikes;
  };

  //Create and return a media

  getElementMedia = () => {
    const media = document.createElement("article");
    media.setAttribute("class", "media");

    const mediaLink = document.createElement("a");
    mediaLink.href = this.getLinkChoice();
    mediaLink.setAttribute("role", "button");
    mediaLink.setAttribute("class", "media-link");
    mediaLink.innerHTML = this.getMediaChoice();

    const footer = document.createElement("footer");
    footer.setAttribute("class", "media_infos");
    footer.innerHTML = `<p class="media_infos_title">${this.title}</p>`;

    const like = document.createElement("div");
    like.setAttribute("class", "media_likes");

    const numberLike = document.createElement("span");
    numberLike.setAttribute("class", "media_number_like");
    numberLike.innerHTML = this.likes;

    this.likeCount = numberLike;

    like.appendChild(numberLike);
    like.appendChild(this.getLikeBtn());
    footer.appendChild(like);
    media.appendChild(mediaLink);
    media.appendChild(footer);

    return media;
  };

  // Create and return the like button

  getLikeBtn = () => {
    const likeBtn = document.createElement("img");
    likeBtn.setAttribute("src", "../icones/vector.png");
    likeBtn.setAttribute("aria-label", "likes");
    likeBtn.setAttribute("role", "button");
    likeBtn.setAttribute("tabindex", "0");

    likeBtn.addEventListener("click", (e) => {
      this.like();
    });
    likeBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.like();
      }
    });

    this.likeBtn = likeBtn;

    return likeBtn;
  };

  // create the thumbnail of a media

  getMediaChoice = () => {
    if (this.image) {
      return `<img class="media_link_image items" src="../Sample/${this.photographerId}/${this.image}" alt="${this.title}">`;
    }

    if (this.video) {
      return `<video class="media_link_video items" src="../Sample/${this.photographerId}/${this.video}" type="video/mp4" alt="${this.title}">
        <source src="Sample/${this.photographerId}/${this.video}" type="video/mp4">
       </video>`;
    }
  };

  getLinkChoice = () => {
    if (this.image) {
      return `../Sample/${this.photographerId}/${this.image}`;
    }

    if (this.video) {
      return `../Sample/${this.photographerId}/${this.video}`;
    }
  };
}
