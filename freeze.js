const bottle = {color: 'yellow', price:50, isClean:true, capacity :1};

const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);

console.log(bottle);
bottle.quantity = 40;
delete bottle.isClean;
console.log(bottle);

Object.seal(bottle);
delete bottle.capacity;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

Object.freeze(bottle);
delete bottle.capacity;
bottle.price = 5000;
bottle.height = 12;
console.log(bottle);