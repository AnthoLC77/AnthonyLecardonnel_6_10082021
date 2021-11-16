export default class Tags {
  constructor(value) {
    this.value = value;
    this.false = false;

    this.element = document.createElement("li");
    this.element.setAttribute("class", "photographer_tag");
    this.element.setAttribute("data-value", "#" + this.value);
    this.element.setAttribute("data-active", this.false);
    this.element.setAttribute("role", "button");
    this.element.setAttribute("aria-label", `filtre ${this.value}`);

    this.element.innerHTML = `<a href="#">#${this.value}</a>`;
  }
}
