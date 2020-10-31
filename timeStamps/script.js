// timestamp

//const before = new Date('02/01/2019 7:30:59');
const before = new Date('February 1 2019 7:30:59');
const now = new Date();


const diff = now.getTime() - before.getTime();
// const diff = now - before;
console.log(diff);


const mins = Math.round(diff / 1000 / 60);
// 1000 millsec in a second / 60 mins
const hours = Math.round(mins / 60);
// give the amount of hours
const days = Math.round(hours / 24);
// give the amount of days

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);

// converting timestamps to date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));
// give full date 