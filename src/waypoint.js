import {TYPE_EVENTS} from "./data";
import Component from "./component";
import moment from 'moment';
// import format from 'moment-duration-format';

class Waypoint extends Component {
  constructor(data) {
    super();
    this._type = TYPE_EVENTS[data.type];
    this._dateFrom = data.date.from;
    this._dateTo = data.date.to;
    this._price = data.price;
    this._offers = data.offers;
    this._city = data.city;
    this._onClick = null;
  }

  get template() {
    const startDate = moment(this._dateFrom);
    const endDate = moment(this._dateTo);
    const duration = endDate.diff(startDate, `hours`);
    return `<article class="trip-point">
          <i class="trip-icon">${this._type}</i>
          <h3 class="trip-point__title">Flight to ${this._city}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${startDate.format(`hh:mm`)} — ${endDate.format(`hh:mm`)}</span>
            <span class="trip-point__duration">${duration}</span>
          </p>
          <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
          <ul class="trip-point__offers">
            ${[...this._offers].map((item) => `<li><button class="trip-point__offer">${item}</button></li>`).join(``)}
          </ul>
        </article>`;
  }

  bind() {
    this._element.addEventListener(`click`, this._onClick);
  }
  update(data) {
    this._type = TYPE_EVENTS[data.type];
    this._city = data.city;
    this._dateFrom = data.date.from;
    this._dateTo = data.date.to;
    this._price = data.price;
    this._offers = data.offers;
  }
  set onClick(func) {
    this._onClick = func;
  }
}

export default Waypoint;
