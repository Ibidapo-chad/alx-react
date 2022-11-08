// Using fromJS create getImmutableObject function that takes an 
// an object as a parameter.
// obj: Object parameter
// return: Immutable map

const Immutable= require('immutable');

function getImmutableObject(obj) {
    let result= Immutable.fromJS(obj);
    return result
};

module.exports= getImmutableObject;
