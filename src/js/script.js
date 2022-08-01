// import { one, two } from './main';
// console.log(`${one} and ${two}`);

// import { one as first } from './main';
// console.log(first);

// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

// import { one, two } from './main';
// import sayHi from './main';

// console.log(`${one} and ${two}`);
// sayHi();

import { one, two } from './main';
import { default as sayHi } from './main';

console.log(`${one} and ${two}`);
sayHi();
