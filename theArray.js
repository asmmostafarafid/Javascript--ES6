// array concate
const ages = [18, 22, 55, 66, 33, 99];
const ages2 = [22, 3, 56, 96, 41];
const ages3 = [44, 55, 78, 99, 55];
const allages = ages.concat(ages2).concat([5]).concat(ages3);
// sprad operator
const allages2 = [...ages, ...ages2, 5, ...ages3];
console.log(allages2);
console.log(allages);

//array max
const business = 455;
const miminster = 7888;
const sochib = 8555;
const takapoisa = [2255, 454, 89897, 95649, 9797, 9564, 9654];
const maxPoisa = Math.max(...takapoisa);
console.log(takapoisa);
const maximum = Math.max(business, miminster, sochib);

console.log(maximum);