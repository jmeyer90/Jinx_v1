// Converts an array to an object.
// JBuilder is fetching multiple types of objects at once.
// When JBuilder returns an array, we convert the array to an object
// So we can easily normalize state when we reach the reducers.

const arrayToObject = ( array ) =>{
  let newObj = {};
  let length = array.length;
 
  for(let i=0; i < length; i++){
    let el = array.shift();
    newObj[Object.keys(el)[0]] = Object.values(el)[0];
  }
  
  return newObj;
};

export const extractAsObj = ( Obj, key ) =>{
  let extracted = Obj[key];
  delete Obj[key];
  extracted = arrayToObject(extracted);
  return extracted
};