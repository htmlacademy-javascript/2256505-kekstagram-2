import {checkMeetingTime} from './functions.js';

import { cards } from './data.js';
const photos = cards();
console.log(photos);

console.log(checkMeetingTime('08:00', '17:00', '17:00', 0));

