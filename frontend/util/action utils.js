// convert array to object
// sort alphabetically by attribute_item name, menu_item name, business_name
// in serach utils- write b-search algorithm

const arrayToObject = ( array ) =>{
  let newObj = {}
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