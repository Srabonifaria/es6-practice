const ages =[12, 13, 14, 15,16];
const ages2 = [15 ,16, 17 ,13,14];
const ages3 =[24, 25 ,26, 13];
const allAges =ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 =[...ages , ...ages2 ,5 , ...ages3];
// console.log(allAges2);

const business =650;
const minister =450;
const sochib =250;
const takapoisa =[650 ,450,250 , 850];
// const maximum = Math.max(business , minister , sochib);
const maximum = Math.max(...takapoisa);
console.log(maximum);