// Test program 
const getImmutableObject= require('./1-map');

const item= {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}; 

let res= getImmutableObject(item);
console.log(res);