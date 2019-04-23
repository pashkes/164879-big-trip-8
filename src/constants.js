const AUTHORIZATION = `Basic dXNlckBwYXNzd29yiZAo=weefw50ye54wew`;
const END_POINT = `https://es8-demo-srv.appspot.com/big-trip/`;
const ESC_KEY_CODE = 27;
const ANIMATION_DURATION = 800;
const TYPE_EVENTS = {
  'taxi': {icon: `🚕`, add: `to`},
  'bus': {icon: `🚌`, add: `to`},
  'train': {icon: `🚂`, add: `to`},
  'ship': {icon: `🛳️`, add: `to`},
  'transport': {icon: `🚊`, add: `to`},
  'drive': {icon: `🚗`, add: `to`},
  'flight': {icon: `✈️`, add: `to`},
  'check-in': {icon: `🏨`, add: `in`},
  'sightseeing': {icon: `🏛️`, add: `in`},
  'restaurant': {icon: `🍴`, add: `in`},
};

const WAY_OF_GROUPS = {
  TRASPORT: [`taxi`, `bus`, `train`, `flight`, `transport`, `drive`, `ship`],
  PLACES: [`check-in`, `sightseeing`, `restaurant`],
};

const STATISTIC = {
  spentMoneyTypes: new Map([
    [`flight`, 0],
    [`check-in`, 0],
    [`taxi`, 0],
    [`sightseeing`, 0],
    [`restaurant`, 0],
    [`drive`, 0],
    [`ship`, 0],
    [`train`, 0],
    [`bus`, 0],
  ]),
  wasUsedTypes: new Map([
    [`drive`, 0],
    [`taxi`, 0],
    [`flight`, 0],
    [`ship`, 0],
    [`train`, 0],
    [`bus`, 0],
  ]),
  spentTimeTypes: new Map([
    [`flight`, 0],
    [`check-in`, 0],
    [`taxi`, 0],
    [`sightseeing`, 0],
    [`restaurant`, 0],
    [`drive`, 0],
    [`ship`, 0],
    [`train`, 0],
    [`bus`, 0],
  ]),
};

const FILTERS = [
  {
    isChecked: true,
    value: `everything`,
  },
  {
    isChecked: false,
    value: `future`,
  },
  {
    isChecked: false,
    value: `past`,
  },
];

const SORTS = [
  {
    value: `event`,
    isChecked: true,
  },
  {
    value: `time`,
    isChecked: false,
  },
  {
    value: `price`,
    isChecked: false,
  },
];

export {TYPE_EVENTS, FILTERS, STATISTIC, SORTS, AUTHORIZATION, END_POINT, ESC_KEY_CODE, ANIMATION_DURATION, WAY_OF_GROUPS};
