import {TYPE_EVENTS} from "./data";

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

class Waypoint {
  constructor(data) {
    this._type = TYPE_EVENTS[data.type];
    this._name = data.name;
    this._timeFrom = data.time.from;
    this._timeTo = data.time.to;
    this._duration = data.time.duration;
    this._price = data.price;
    this._offers = data.offers;
    this._element = null;
  }

  get template() {
    const offers = this._offers.map((item) => `<li><button class="trip-point__offer">${item}</button></li>`).join(``);
    return `<article class="trip-point">
          <i class="trip-icon">${this._type}</i>
          <h3 class="trip-point__title">${this._name}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${this._timeFrom}&nbsp;&mdash; ${this._timeTo}</span>
            <span class="trip-point__duration">${this._duration} H</span>
          </p>
          <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
          <ul class="trip-point__offers">
            ${offers}
          </ul>
        </article>`;
  }
  get element() {
    return this._element;
  }
  render() {
    this._element = createElement(this.template);
    return this._element;
  }

  set bind(func) {
    this._element.addEventListener(`click`, func);
  }

  unBind() {}

  set onClick(func) {
    func();
  }
}

export {Waypoint, createElement};